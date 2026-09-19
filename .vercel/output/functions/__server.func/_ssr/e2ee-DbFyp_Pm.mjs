import { i as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/e2ee-DbFyp_Pm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useSetting(key, defaultValue) {
	const [value, setValue] = (0, import_react.useState)(() => {
		const stored = localStorage.getItem(key);
		return stored !== null ? JSON.parse(stored) : defaultValue;
	});
	(0, import_react.useEffect)(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}
var WALLPAPERS = [
	{
		id: "default",
		name: "Default",
		url: null,
		preview: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
		license: "Built-in"
	},
	{
		id: "dots",
		name: "Soft Dots",
		url: "/wallpapers/pattern-dots.svg",
		preview: "/wallpapers/pattern-dots.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "waves",
		name: "Ocean Waves",
		url: "/wallpapers/pattern-waves.svg",
		preview: "/wallpapers/pattern-waves.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "geometric",
		name: "Geometric",
		url: "/wallpapers/pattern-geometric.svg",
		preview: "/wallpapers/pattern-geometric.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "nature",
		name: "Nature Sky",
		url: "/wallpapers/pattern-nature.svg",
		preview: "/wallpapers/pattern-nature.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "abstract",
		name: "Abstract",
		url: "/wallpapers/pattern-abstract.svg",
		preview: "/wallpapers/pattern-abstract.svg",
		license: "CC0 — Nexus Chat"
	}
];
function getWallpaperById(id) {
	return WALLPAPERS.find((w) => w.id === id) || WALLPAPERS[0];
}
var KEY_STORAGE = "nexus_e2ee_keys";
var ENCRYPTION_ENABLED_KEY = "nexus_e2ee_enabled";
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
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function generateKeyPair() {
	return crypto.subtle.generateKey({
		name: "ECDH",
		namedCurve: "P-256"
	}, true, ["deriveKey"]);
}
async function exportPublicKey(key) {
	return toBase64(await crypto.subtle.exportKey("raw", key));
}
async function importPublicKey(base64Key) {
	return crypto.subtle.importKey("raw", fromBase64(base64Key), {
		name: "ECDH",
		namedCurve: "P-256"
	}, true, []);
}
async function deriveSharedKey(privateKey, publicKey) {
	return crypto.subtle.deriveKey({
		name: "ECDH",
		public: publicKey
	}, privateKey, {
		name: "AES-GCM",
		length: 256
	}, false, ["encrypt", "decrypt"]);
}
async function deriveDirectChatKey(chatId, memberIdA, memberIdB) {
	const a = String(memberIdA || "").trim();
	const b = String(memberIdB || "").trim();
	const hashHex = await sha256Hex(`nexus-chat|${String(chatId || "").trim()}|${[a, b].sort().join("|")}`);
	const keyBytes = /* @__PURE__ */ new Uint8Array(32);
	for (let i = 0; i < 32; i++) keyBytes[i] = parseInt(hashHex.slice(i * 2, i * 2 + 2), 16);
	return crypto.subtle.importKey("raw", keyBytes, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}
async function initializeE2EE() {
	const stored = localStorage.getItem(KEY_STORAGE);
	if (stored) return JSON.parse(stored);
	const keyPair = await generateKeyPair();
	const keys = {
		publicKey: await exportPublicKey(keyPair.publicKey),
		privateKeyJwk: await crypto.subtle.exportKey("jwk", keyPair.privateKey),
		publicKeyJwk: await crypto.subtle.exportKey("jwk", keyPair.publicKey)
	};
	localStorage.setItem(KEY_STORAGE, JSON.stringify(keys));
	return keys;
}
function isE2EEEnabled() {
	const set = localStorage.getItem(ENCRYPTION_ENABLED_KEY);
	if (set === null || set === void 0) return true;
	return set !== "false";
}
function setE2EEEnabled(enabled) {
	localStorage.setItem(ENCRYPTION_ENABLED_KEY, String(enabled));
}
async function getMyPublicKey() {
	return (await initializeE2EE()).publicKey;
}
var peerPublicKeys = /* @__PURE__ */ new Map();
async function getChatKey(chatId, context) {
	const selfId = context?.selfMemberId || context?.selfId || "me";
	const peerId = context?.peerMemberId || context?.peerId;
	if (selfId && peerId && selfId !== peerId) return deriveDirectChatKey(chatId, selfId, peerId);
	const keys = await initializeE2EE();
	const privateKey = await crypto.subtle.importKey("jwk", keys.privateKeyJwk, {
		name: "ECDH",
		namedCurve: "P-256"
	}, true, ["deriveKey"]);
	let peerKey = peerPublicKeys.get(chatId);
	if (!peerKey) {
		peerKey = keys.publicKey;
		peerPublicKeys.set(chatId, peerKey);
	}
	return deriveSharedKey(privateKey, await importPublicKey(peerKey));
}
async function encryptMessage(chatId, plaintext, context) {
	if (!isE2EEEnabled()) return {
		encrypted: false,
		content: plaintext
	};
	const key = await getChatKey(chatId, context || {});
	const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
	const encoded = new TextEncoder().encode(String(plaintext ?? ""));
	const ciphertext = await crypto.subtle.encrypt({
		name: "AES-GCM",
		iv
	}, key, encoded);
	return {
		encrypted: true,
		content: JSON.stringify({
			iv: toBase64(iv),
			data: toBase64(ciphertext)
		})
	};
}
async function decryptMessage(chatId, content, isEncrypted, context) {
	if (!isEncrypted || !isE2EEEnabled()) return content;
	try {
		const { iv, data } = typeof content === "string" ? JSON.parse(content) : content;
		const key = await getChatKey(chatId, context || {});
		const decrypted = await crypto.subtle.decrypt({
			name: "AES-GCM",
			iv: fromBase64(iv)
		}, key, fromBase64(data));
		return new TextDecoder().decode(decrypted);
	} catch {
		return "[Encrypted message — unable to decrypt]";
	}
}
function generateSecurityCode(chatId) {
	const code = String(chatId || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) * 7919 % 9e5 + 1e5;
	return String(code).match(/.{1,3}/g).join(" ");
}
//#endregion
export { getMyPublicKey as a, isE2EEEnabled as c, generateSecurityCode as i, setE2EEEnabled as l, decryptMessage as n, getWallpaperById as o, encryptMessage as r, initializeE2EE as s, WALLPAPERS as t, useSetting as u };
