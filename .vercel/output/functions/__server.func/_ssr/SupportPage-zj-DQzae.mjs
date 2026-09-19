import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-BMwQYxkE.mjs";
import { d as startRealtimeListeners, f as stopRealtimeListeners, i as createChat, s as getChatById, u as getSupportMessages } from "./persistence-DsYk-QoD.mjs";
import { t as ChatView } from "./ChatView-BkcecLPQ.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SupportPage-zj-DQzae.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var LOCAL_USERS_KEY = "nexus-chat-users";
function supportChatId(userId) {
	return `support-${userId}`;
}
function displayName(user) {
	return user?.full_name || user?.fullName || `${user?.first_name || user?.firstName || ""} ${user?.last_name || user?.lastName || ""}`.trim() || user?.member_id || user?.nexusId || "User";
}
function SupportPage({ adminMode = false }) {
	const { user } = useAuth();
	const [users, setUsers] = (0, import_react.useState)([]);
	const [selectedUser, setSelectedUser] = (0, import_react.useState)(adminMode ? null : user);
	const [chat, setChat] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!adminMode) return void 0;
		const channel = startRealtimeListeners();
		return () => stopRealtimeListeners(channel);
	}, [adminMode]);
	(0, import_react.useEffect)(() => {
		if (!adminMode) {
			setSelectedUser(user);
			return;
		}
		const loadUsers = async () => {
			if (isSupabaseConfigured() && supabase) {
				const { data } = await supabase.from("members").select("id, member_id, full_name, first_name, last_name, avatar_url").order("created_at", { ascending: false });
				if (data) {
					setUsers(data);
					if (data[0]) setSelectedUser(data[0]);
					return;
				}
			}
			try {
				const localUsers = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || "[]");
				setUsers(localUsers);
				if (localUsers[0]) setSelectedUser(localUsers[0]);
			} catch {
				setUsers([]);
			}
		};
		loadUsers();
	}, [adminMode, user]);
	(0, import_react.useEffect)(() => {
		if (!selectedUser) return;
		let active = true;
		const loadChat = async () => {
			const id = supportChatId(selectedUser.id || selectedUser.member_id || selectedUser.nexusId);
			let nextChat = await getChatById(id);
			if (!nextChat) nextChat = await createChat({
				id,
				title: `Nexus Support · ${displayName(selectedUser)}`,
				type: "support",
				avatar_url: selectedUser.avatar_url || selectedUser.avatarUrl || null
			});
			if (!nextChat.avatar_url && (selectedUser.avatar_url || selectedUser.avatarUrl)) nextChat = {
				...nextChat,
				avatar_url: selectedUser.avatar_url || selectedUser.avatarUrl
			};
			nextChat = {
				...nextChat,
				messages: await getSupportMessages(id)
			};
			if (active) setChat(nextChat);
		};
		loadChat();
		const refresh = () => loadChat();
		window.addEventListener("nexus-chat:updated", refresh);
		return () => {
			active = false;
			window.removeEventListener("nexus-chat:updated", refresh);
		};
	}, [selectedUser]);
	if (adminMode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-950 px-3 py-4 text-slate-100 sm:px-8 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col sm:min-h-[calc(100vh-4rem)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-4 flex shrink-0 gap-4 overflow-x-auto whitespace-nowrap text-sm sm:mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/dashboard",
							className: "text-slate-400 hover:text-white",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/users",
							className: "text-slate-400 hover:text-white",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/support",
							className: "font-semibold text-blue-400",
							children: "Support"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "shrink-0 text-xl font-semibold sm:text-2xl",
					children: "Support conversations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 sm:mt-6 sm:rounded-2xl lg:grid-cols-[280px_minmax(0,1fr)] lg:grid-rows-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "flex max-h-36 overflow-x-auto overflow-y-hidden border-b border-slate-800 lg:block lg:max-h-none lg:overflow-y-auto lg:border-b-0 lg:border-r",
						children: [users.map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedUser(candidate),
							className: `min-w-[170px] border-r border-slate-800 px-4 py-3 text-left hover:bg-slate-800 lg:block lg:w-full lg:border-b lg:border-r-0 lg:py-4 ${selectedUser?.id === candidate.id ? "bg-slate-800" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium",
								children: displayName(candidate)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-slate-400",
								children: candidate.member_id || candidate.nexus_id
							})]
						}, candidate.id)), !users.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-4 text-sm text-slate-400",
							children: "No users found."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0",
						children: chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {
							chat,
							currentUserId: user?.id || "admin",
							supportConversationId: supportChatId(selectedUser.id || selectedUser.member_id || selectedUser.nexusId)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-6 text-slate-400",
							children: "Select a user to open support chat."
						})
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-0 flex-1 bg-background",
		children: chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {
			chat,
			currentUserId: user?.id || "me",
			supportConversationId: supportChatId(user?.id || user?.nexusId),
			onBack: () => window.history.back()
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-6 text-muted-foreground sm:p-8",
			children: "Loading support chat..."
		})
	});
}
//#endregion
export { SupportPage as t };
