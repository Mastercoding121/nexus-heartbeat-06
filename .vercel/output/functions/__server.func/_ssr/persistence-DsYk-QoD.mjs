import { n as supabase, t as isSupabaseConfigured } from "./supabase-BMwQYxkE.mjs";
import { i as parseNexusId, n as getMemberNexusId } from "./nexusId-CU7anTOa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/persistence-DsYk-QoD.js
var STORAGE_KEY = "nexus-chat-state-v1";
var CONTACTS_STORAGE_KEY = "nexus-contacts-state-v1";
var USERS_STORAGE_KEY = "nexus-chat-users";
var SUPPORT_MESSAGES_STORAGE_KEY = "nexus-support-messages-v1";
function getContactOwnerKey(ownerId) {
	return String(ownerId || "anonymous");
}
function readLocalContacts(ownerId) {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(CONTACTS_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed)) {
			const migrated = { [getContactOwnerKey(ownerId)]: parsed };
			window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(migrated));
			return parsed;
		}
		const ownerKey = getContactOwnerKey(ownerId);
		if (parsed[ownerKey]) return parsed[ownerKey];
		if (ownerKey !== "anonymous" && parsed.anonymous) {
			parsed[ownerKey] = parsed.anonymous;
			delete parsed.anonymous;
			window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(parsed));
			return parsed[ownerKey];
		}
		return [];
	} catch {
		return [];
	}
}
function writeLocalContacts(ownerId, contacts) {
	if (typeof window === "undefined") return contacts;
	try {
		const raw = window.localStorage.getItem(CONTACTS_STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : {};
		const contactsByOwner = Array.isArray(parsed) ? { [getContactOwnerKey(ownerId)]: parsed } : parsed;
		contactsByOwner[getContactOwnerKey(ownerId)] = contacts;
		window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contactsByOwner));
	} catch {}
	return contacts;
}
function notifyContactsUpdate() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus-contacts:updated"));
}
function notifyChange() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus-chat:updated"));
}
function readLocalChats() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function writeLocalChats(chats) {
	if (typeof window === "undefined") return chats;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
	} catch {}
	return chats;
}
function notifyChatUpdate() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus-chat:updated"));
}
function startRealtimeListeners() {
	if (!supabase || !isSupabaseConfigured()) return null;
	const channel = supabase.channel("public-realtime");
	channel.on("postgres_changes", {
		event: "INSERT",
		schema: "public",
		table: "messages"
	}, async (payload) => {
		const msg = payload.new;
		if (!msg || !msg.chat_id) return;
		await appendMessage(String(msg.chat_id), {
			id: String(msg.id),
			sender_id: String(msg.sender_id || "other"),
			content: msg.content,
			type: msg.type || "text",
			file_url: msg.file_url || null,
			file_name: msg.file_name || null,
			encrypted: Boolean(msg.encrypted),
			created_at: msg.created_at || (/* @__PURE__ */ new Date()).toISOString()
		});
		if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus:incoming-notification", { detail: {
			title: "New message",
			preview: msg.type === "text" ? msg.content : "New attachment received",
			avatarUrl: "/logo.png",
			type: "message"
		} }));
	});
	channel.on("postgres_changes", {
		event: "INSERT",
		schema: "public",
		table: "support_messages"
	}, () => {
		notifyChange();
	});
	const chatChanged = async () => {
		await readChats();
		notifyChatUpdate();
	};
	channel.on("postgres_changes", {
		event: "INSERT",
		schema: "public",
		table: "chats"
	}, chatChanged);
	channel.on("postgres_changes", {
		event: "UPDATE",
		schema: "public",
		table: "chats"
	}, chatChanged);
	channel.on("postgres_changes", {
		event: "DELETE",
		schema: "public",
		table: "chats"
	}, chatChanged);
	channel.subscribe();
	return channel;
}
function stopRealtimeListeners(channel) {
	if (channel && typeof channel.unsubscribe === "function") channel.unsubscribe();
}
var UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var isUUID = (str) => UUID_REGEX.test(str);
async function readChats() {
	let supabaseChats = [];
	if (supabase && isSupabaseConfigured()) try {
		const { data, error } = await supabase.from("chats").select("*").order("created_at", { ascending: false });
		if (!error && Array.isArray(data)) supabaseChats = data.map((chat) => ({
			...chat,
			id: String(chat.id),
			messages: []
		}));
	} catch {}
	const localChats = readLocalChats();
	const mergedMap = /* @__PURE__ */ new Map();
	localChats.forEach((chat) => {
		mergedMap.set(chat.id, chat);
	});
	supabaseChats.forEach((chat) => {
		const existing = mergedMap.get(chat.id);
		mergedMap.set(chat.id, {
			...existing,
			...chat,
			messages: existing?.messages || chat.messages || []
		});
	});
	return Array.from(mergedMap.values());
}
async function writeChats(chats) {
	const localChats = writeLocalChats(chats);
	if (supabase && isSupabaseConfigured()) try {
		const chatsToUpsert = localChats.filter((chat) => isUUID(chat.id)).map((chat) => ({
			id: chat.id,
			title: chat.title,
			type: chat.type || "private",
			created_at: chat.created_at || (/* @__PURE__ */ new Date()).toISOString()
		}));
		if (chatsToUpsert.length > 0) await supabase.from("chats").upsert(chatsToUpsert);
	} catch {}
	notifyChange();
	return localChats;
}
async function getChats() {
	return readChats();
}
async function appendMessage(chatId, message) {
	const chats = await getChats();
	const chat = chats.find((item) => item.id === chatId);
	if (!chat) return null;
	const nextMessage = {
		id: message.id || `${Date.now()}`,
		sender_id: message.sender_id || "me",
		content: message.content || "",
		type: message.type || "text",
		encrypted: Boolean(message.encrypted),
		file_url: message.file_url || null,
		file_name: message.file_name || null,
		duration: message.duration || null,
		created_at: message.created_at || (/* @__PURE__ */ new Date()).toISOString()
	};
	const existingMessages = Array.isArray(chat.messages) ? chat.messages : [];
	if (existingMessages.some((m) => m.id === nextMessage.id)) return chat;
	const updatedChat = {
		...chat,
		messages: [...existingMessages, nextMessage],
		last_message: nextMessage.content,
		last_message_time: nextMessage.created_at,
		unread_count: 0
	};
	await writeChats(chats.map((item) => item.id === chatId ? updatedChat : item));
	return updatedChat;
}
async function getChatById(chatId) {
	if (supabase && isSupabaseConfigured()) try {
		const { data: chatData, error: chatError } = await supabase.from("chats").select("*").eq("id", chatId).single();
		if (!chatError && chatData) {
			const { data: messageData, error: messageError } = await supabase.from("messages").select("*").eq("chat_id", chatId).order("created_at", { ascending: true });
			if (!messageError && Array.isArray(messageData)) return {
				...chatData,
				id: String(chatData.id),
				messages: messageData.map((msg) => ({
					...msg,
					id: String(msg.id)
				}))
			};
			return {
				...chatData,
				id: String(chatData.id),
				messages: []
			};
		}
	} catch {}
	return (await getChats()).find((chat) => chat.id === chatId) || null;
}
async function createChat(chatData) {
	const chats = await getChats();
	const newChat = {
		id: chatData.id || `${Date.now()}`,
		title: chatData.title || "New Chat",
		type: chatData.type || "private",
		avatar_url: chatData.avatar_url || null,
		last_message: chatData.last_message || "New conversation",
		last_message_time: (/* @__PURE__ */ new Date()).toISOString(),
		unread_count: 0,
		encrypted: Boolean(chatData.encrypted),
		messages: chatData.messages || []
	};
	await writeChats([newChat, ...chats]);
	return newChat;
}
async function getContacts(ownerId) {
	return readLocalContacts(ownerId);
}
async function findMemberByNexusId(rawNexusId, currentUser) {
	const parsed = parseNexusId(rawNexusId);
	if (parsed.status !== "exact_match") return {
		status: parsed.status,
		member: null,
		nexusId: parsed.value
	};
	const nexusId = parsed.value;
	if (getMemberNexusId(currentUser) === nexusId) return {
		status: "self_match",
		member: null,
		nexusId
	};
	if (supabase && isSupabaseConfigured()) try {
		const { data, error } = await supabase.rpc("search_member_by_nexus_id", { search_nexus_id: nexusId }).maybeSingle();
		if (!error && data) return {
			status: "exact_match",
			member: {
				...data,
				profile: data.profile_id ? {
					id: data.profile_id,
					email: data.profile_email
				} : null
			},
			nexusId
		};
	} catch {}
	try {
		const member = JSON.parse(window.localStorage.getItem(USERS_STORAGE_KEY) || "[]").find((user) => getMemberNexusId(user) === nexusId);
		if (!member) return {
			status: "not_found",
			member: null,
			nexusId
		};
		if (member.is_active === false || member.isActive === false) return {
			status: "inactive",
			member: null,
			nexusId
		};
		return {
			status: "exact_match",
			member,
			nexusId
		};
	} catch {
		return {
			status: "not_found",
			member: null,
			nexusId
		};
	}
}
async function getSupportMessages(conversationId) {
	if (supabase && isSupabaseConfigured()) try {
		const { data, error } = await supabase.from("support_messages").select("*").eq("conversation_id", conversationId).order("created_at", { ascending: true });
		if (!error && data) return data;
	} catch {}
	try {
		return JSON.parse(window.localStorage.getItem(SUPPORT_MESSAGES_STORAGE_KEY) || "{}")[conversationId] || [];
	} catch {
		return [];
	}
}
async function appendSupportMessage(conversationId, message) {
	const supportMessage = {
		id: message.id || `${Date.now()}`,
		conversation_id: conversationId,
		sender_id: String(message.sender_id || "me"),
		content: message.content || "",
		type: message.type || "text",
		file_url: message.file_url || null,
		file_name: message.file_name || null,
		created_at: message.created_at || (/* @__PURE__ */ new Date()).toISOString()
	};
	if (supabase && isSupabaseConfigured()) {
		const { id, ...supportMessageData } = supportMessage;
		const { data, error } = await supabase.from("support_messages").insert(supportMessageData).select().single();
		if (!error && data) {
			notifyChange();
			return data;
		}
	}
	try {
		const messages = JSON.parse(window.localStorage.getItem(SUPPORT_MESSAGES_STORAGE_KEY) || "{}");
		messages[conversationId] = [...messages[conversationId] || [], supportMessage];
		window.localStorage.setItem(SUPPORT_MESSAGES_STORAGE_KEY, JSON.stringify(messages));
	} catch {}
	notifyChange();
	return supportMessage;
}
async function addContact(ownerId, contactData) {
	const contacts = await getContacts(ownerId);
	const newContact = {
		id: `${Date.now()}`,
		name: contactData.name,
		nexusId: contactData.nexusId,
		avatarUrl: contactData.avatarUrl || null,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	await writeLocalContacts(ownerId, [newContact, ...contacts]);
	notifyContactsUpdate();
	return newContact;
}
async function deleteContact(ownerId, contactId) {
	const updatedContacts = (await getContacts(ownerId)).filter((c) => c.id !== contactId);
	await writeLocalContacts(ownerId, updatedContacts);
	notifyContactsUpdate();
	return updatedContacts;
}
//#endregion
export { deleteContact as a, getChats as c, startRealtimeListeners as d, stopRealtimeListeners as f, createChat as i, getContacts as l, appendMessage as n, findMemberByNexusId as o, appendSupportMessage as r, getChatById as s, addContact as t, getSupportMessages as u };
