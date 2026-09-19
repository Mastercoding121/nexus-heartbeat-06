import { r as __toESM } from "../_runtime.mjs";
import { L as require_react, M as ForwardRef$1, N as ForwardRef$5, O as ForwardRef$4, a as ForwardRef$3, i as ForwardRef$2, v as ForwardRef } from "../_libs/heroicons__react+react.mjs";
import { f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as useParams$1, i as useNavigate$1, n as Navigate, r as useLocation$1 } from "./router-compat-NKRH5b0P.mjs";
import { t as Avatar } from "./Avatar-DbRwqPd6.mjs";
import { c as getChats, d as startRealtimeListeners, f as stopRealtimeListeners } from "./persistence-DsYk-QoD.mjs";
import { r as showSystemNotification, t as requestNotificationPermission } from "./notifications-BtYuyrl6.mjs";
import { S as Lock } from "../_libs/lucide-react.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { t as Header } from "./Header-mkmxu_Kb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-DGVyG09S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" })
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		replace: true
	});
	if (user.role === "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin",
		replace: true
	});
	return children;
}
function ChatListItem({ chat, selected, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		className: `flex items-center p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${selected ? "bg-gray-100 dark:bg-gray-800" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
			src: chat.avatar_url,
			alt: chat.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ml-3 flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-baseline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-gray-900 dark:text-white truncate",
						children: chat.title
					}), chat.encrypted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3 text-green-500 flex-shrink-0" })]
				}), chat.last_message_time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0",
					children: format(new Date(chat.last_message_time), "h:mm a")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-gray-500 dark:text-gray-400 truncate",
					children: chat.last_message || "No messages yet"
				}), chat.unread_count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0",
					children: chat.unread_count
				})]
			})]
		})]
	});
}
function ChatSidebar({ activeTab, onTabChange }) {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [chats, setChats] = (0, import_react.useState)([]);
	const { logout } = useAuth();
	const navigate = useNavigate$1();
	const { chatId } = useParams$1();
	(0, import_react.useEffect)(() => {
		const refreshChats = async () => {
			const nextChats = await getChats();
			setChats(Array.isArray(nextChats) ? nextChats : []);
		};
		refreshChats();
		window.addEventListener("nexus-chat:updated", refreshChats);
		return () => window.removeEventListener("nexus-chat:updated", refreshChats);
	}, []);
	const filteredChats = chats.filter((chat) => chat.title.toLowerCase().includes(searchQuery.toLowerCase()));
	const handleChatSelect = (chat) => {
		navigate(`/app/chat/${chat.id}`);
	};
	const showChatList = activeTab === "chats";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-full md:w-96 bg-card border-r border-border flex flex-col ${chatId ? "hidden md:flex" : showChatList ? "flex" : "hidden md:flex"}`,
		children: [showChatList && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					placeholder: "Search or start new chat",
					value: searchQuery,
					onChange: (e) => setSearchQuery(e.target.value),
					className: "w-full pl-10 pr-4 py-2 bg-muted border-none rounded-lg text-foreground focus:ring-2 focus:ring-ring"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto",
			children: filteredChats.length > 0 ? filteredChats.map((chat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatListItem, {
				chat,
				selected: chatId === chat.id,
				onClick: () => handleChatSelect(chat)
			}, chat.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-12 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "w-8 h-8 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground font-medium text-center",
						children: "No conversations yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1 text-center",
						children: "Start a new chat to begin messaging"
					})
				]
			})
		})] }), !showChatList && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 flex items-center justify-center p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					onTabChange("chats");
					navigate("/app");
				},
				className: "text-primary text-sm hover:underline",
				children: "← Back to Chats"
			})
		})]
	});
}
var TABS = [
	{
		id: "chats",
		label: "Chats",
		icon: ForwardRef$1,
		path: "/app"
	},
	{
		id: "feeds",
		label: "Feeds",
		icon: ForwardRef$2,
		path: "/app/feeds"
	},
	{
		id: "contacts",
		label: "Contacts",
		icon: ForwardRef$3,
		path: "/app/contacts"
	},
	{
		id: "settings",
		label: "Settings",
		icon: ForwardRef$4,
		path: "/app/settings"
	}
];
function BottomNav({ activeTab, onTabChange }) {
	const navigate = useNavigate$1();
	const handleTabClick = (tab) => {
		onTabChange(tab.id);
		navigate(tab.path);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky bottom-0 z-30 w-full md:hidden border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.05)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-around",
			children: TABS.map((tab) => {
				const Icon = tab.icon;
				const isActive = activeTab === tab.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => handleTabClick(tab),
					className: `flex flex-col items-center py-3 px-2 flex-1 ${isActive ? "text-primary" : "text-muted-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs mt-1",
						children: tab.label
					})]
				}, tab.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:hidden h-[env(safe-area-inset-bottom)] bg-card" })]
	});
}
function NotificationStack() {
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const handleNotification = (event) => {
			const detail = event.detail || {};
			const id = detail.id || `${Date.now()}-${Math.random()}`;
			const next = {
				id,
				title: detail.title || "New activity",
				preview: detail.preview || detail.body || "You received a new update.",
				avatarUrl: detail.avatarUrl || "/logo.png",
				type: detail.type || "message"
			};
			setNotifications((prev) => [...prev, next].slice(-4));
			window.setTimeout(() => {
				setNotifications((prev) => prev.filter((item) => item.id !== id));
			}, 3500);
		};
		window.addEventListener("nexus:incoming-notification", handleNotification);
		window.addEventListener("nexus:system-notification", handleNotification);
		return () => {
			window.removeEventListener("nexus:incoming-notification", handleNotification);
			window.removeEventListener("nexus:system-notification", handleNotification);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-y-0 right-0 z-[70] flex items-center justify-end pr-3 sm:pr-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-80 flex-col gap-3",
			children: notifications.map((notification, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-[slide-in_320ms_ease-out] rounded-[20px] border border-slate-800/70 bg-slate-950/95 p-3 text-slate-100 shadow-[0_24px_70px_rgba(2,6,23,0.42)] backdrop-blur",
				style: { animationDelay: `${index * 40}ms` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800",
						children: notification.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: notification.avatarUrl,
							alt: notification.title,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "h-5 w-5 text-sky-400" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: notification.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.24em] text-slate-400",
								children: notification.type
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-6 text-slate-300",
							children: notification.preview
						})]
					})]
				})
			}, notification.id))
		})
	});
}
function ChatLayout() {
	const location = useLocation$1();
	const navigate = useNavigate$1();
	const { user } = useAuth();
	(0, import_react.useEffect)(() => {
		async function initNotifications() {
			if (await requestNotificationPermission() !== "granted") showSystemNotification({
				title: "Notification permissions needed",
				preview: "Enable browser notifications to stay informed of new messages and chat activity."
			});
		}
		initNotifications();
		const channel = startRealtimeListeners();
		return () => stopRealtimeListeners(channel);
	}, []);
	const getActiveTab = () => {
		if (location.pathname.startsWith("/app/settings")) return "settings";
		if (location.pathname.startsWith("/app/contacts")) return "contacts";
		if (location.pathname.startsWith("/app/feeds")) return "feeds";
		return "chats";
	};
	const handleTabChange = (tab) => {
		navigate({
			chats: "/app",
			feeds: "/app/feeds",
			contacts: "/app/contacts",
			settings: "/app/settings"
		}[tab] || "/app");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { showSignIn: false }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatSidebar, {
					activeTab: getActiveTab(),
					onTabChange: handleTabChange
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 min-w-0 flex-col overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {
				activeTab: getActiveTab(),
				onTabChange: handleTabChange
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationStack, {})
		]
	});
}
function AppLayoutRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatLayout, {}) });
}
//#endregion
export { AppLayoutRoute as component };
