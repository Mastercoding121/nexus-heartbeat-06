const KEY_STORAGE = "nexus_e2ee_keys";
const ENCRYPTION_ENABLED_KEY = "nexus_e2ee_enabled";

function toBase64(buffer) {
  return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

function fromBase64(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}

function fromUtf8(str) {
  if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(str);
  const escaped = unescape(encodeURIComponent(str));
  const bytes = new Uint8Array(escaped.length);
  for (let i = 0; i < escaped.length; i++) bytes[i] = escaped.charCodeAt(i);
  return bytes;
}

async function sha256Hex(input) {
  const bytes = fromUtf8(String(input || ""));
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function generateKeyPair() {
  return crypto.subtle.generateKey({ name: "ECDH", namedCurve: "P-256" }, true, ["deriveKey"]);
}

async function exportPublicKey(key) {
  const exported = await crypto.subtle.exportKey("raw", key);
  return toBase64(exported);
}

async function importPublicKey(base64Key) {
  return crypto.subtle.importKey(
    "raw",
    fromBase64(base64Key),
    { name: "ECDH", namedCurve: "P-256" },
    true,
    [],
  );
}

async function deriveSharedKey(privateKey, publicKey) {
  return crypto.subtle.deriveKey(
    { name: "ECDH", public: publicKey },
    privateKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  );
}

async function deriveDirectChatKey(chatId, memberIdA, memberIdB) {
  const a = String(memberIdA || "").trim();
  const b = String(memberIdB || "").trim();
  const chat = String(chatId || "").trim();
  const pair = [a, b].sort().join("|");
  const material = `nexus-chat|${chat}|${pair}`;
  const hashHex = await sha256Hex(material);
  const keyBytes = new Uint8Array(32);
  for (let i = 0; i < 32; i++) {
    keyBytes[i] = parseInt(hashHex.slice(i * 2, i * 2 + 2), 16);
  }
  return crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function initializeE2EE() {
  const stored = localStorage.getItem(KEY_STORAGE);
  if (stored) return JSON.parse(stored);

  const keyPair = await generateKeyPair();
  const publicKey = await exportPublicKey(keyPair.publicKey);

  const keys = {
    publicKey,
    privateKeyJwk: await crypto.subtle.exportKey("jwk", keyPair.privateKey),
    publicKeyJwk: await crypto.subtle.exportKey("jwk", keyPair.publicKey),
  };
  localStorage.setItem(KEY_STORAGE, JSON.stringify(keys));
  return keys;
}

export function isE2EEEnabled() {
  const set = localStorage.getItem(ENCRYPTION_ENABLED_KEY);
  if (set === null || set === undefined) return true;
  return set !== "false";
}

export function setE2EEEnabled(enabled) {
  localStorage.setItem(ENCRYPTION_ENABLED_KEY, String(enabled));
}

export async function getMyPublicKey() {
  const keys = await initializeE2EE();
  return keys.publicKey;
}

const peerPublicKeys = new Map();

export function registerPeerPublicKey(chatId, publicKeyBase64) {
  peerPublicKeys.set(chatId, publicKeyBase64);
}

async function getChatKey(chatId, context) {
  const selfId = context?.selfMemberId || context?.selfId || "me";
  const peerId = context?.peerMemberId || context?.peerId;
  if (selfId && peerId && selfId !== peerId) {
    return deriveDirectChatKey(chatId, selfId, peerId);
  }

  const keys = await initializeE2EE();
  const privateKey = await crypto.subtle.importKey(
    "jwk",
    keys.privateKeyJwk,
    { name: "ECDH", namedCurve: "P-256" },
    true,
    ["deriveKey"],
  );

  let peerKey = peerPublicKeys.get(chatId);
  if (!peerKey) {
    peerKey = keys.publicKey;
    peerPublicKeys.set(chatId, peerKey);
  }

  const peerPublicKey = await importPublicKey(peerKey);
  return deriveSharedKey(privateKey, peerPublicKey);
}

export async function encryptMessage(chatId, plaintext, context) {
  if (!isE2EEEnabled()) return { encrypted: false, content: plaintext };

  const key = await getChatKey(chatId, context || {});
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoded = new TextEncoder().encode(String(plaintext ?? ""));

  const ciphertext = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);

  return {
    encrypted: true,
    content: JSON.stringify({
      iv: toBase64(iv),
      data: toBase64(ciphertext),
    }),
  };
}

export async function decryptMessage(chatId, content, isEncrypted, context) {
  if (!isEncrypted || !isE2EEEnabled()) return content;

  try {
    const parsed = typeof content === "string" ? JSON.parse(content) : content;
    const { iv, data } = parsed;
    const key = await getChatKey(chatId, context || {});
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: fromBase64(iv) },
      key,
      fromBase64(data),
    );
    return new TextDecoder().decode(decrypted);
  } catch {
    return "[Encrypted message — unable to decrypt]";
  }
}

export function generateSecurityCode(chatId) {
  const hash = String(chatId || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const code = ((hash * 7919) % 900000) + 100000;
  return String(code)
    .match(/.{1,3}/g)
    .join(" ");
}
