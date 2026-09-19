import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as supabase, t as isSupabaseConfigured } from "./supabase-BMwQYxkE.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { t as Header } from "./Header-mkmxu_Kb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-NptOzNwE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const { user } = useAuth();
	const [activeUsers, setActiveUsers] = (0, import_react.useState)([]);
	const [recentMessages, setRecentMessages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const loadAdminData = async () => {
			if (!isSupabaseConfigured() || !supabase) {
				setError("Add VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY to .env, then run `npm run bootstrap` to create the dashboard tables.");
				setLoading(false);
				return;
			}
			try {
				const [{ data: users }, { data: messages }] = await Promise.all([supabase.from("members").select("id, member_id, full_name, created_at").order("created_at", { ascending: false }).limit(20), supabase.from("messages").select("id, chat_id, sender_id, content, type, created_at").order("created_at", { ascending: false }).limit(20)]);
				setActiveUsers(users || []);
				setRecentMessages(messages || []);
			} catch (err) {
				setError(err?.message || "Failed to load admin data.");
			} finally {
				setLoading(false);
			}
		};
		loadAdminData();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { showSignIn: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-8 flex flex-wrap gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/dashboard",
							className: "font-semibold text-blue-600",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/users",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/feeds",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Feeds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/support",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/settings",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Settings"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-[0.27em] text-blue-600",
							children: "Admin dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-3xl font-semibold",
							children: "Workspace administration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300",
							children: "Monitor active members, review recent messages, and protect the encrypted messaging experience."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-slate-500 dark:text-slate-400",
							children: ["Signed in as ", user?.fullName || user?.nexusId]
						})
					]
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900",
					children: "Loading admin data..."
				}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[24px] border border-rose-200 bg-rose-50 p-8 text-center text-rose-700 shadow-sm dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200",
					children: error
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: "Active members"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
								children: "Latest registered members and account details."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: activeUsers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-slate-900 dark:text-slate-100",
											children: member.full_name || member.member_id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-slate-500 dark:text-slate-400",
											children: ["Member #", member.member_id]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-slate-500 dark:text-slate-400",
											children: new Date(member.created_at).toLocaleString()
										})]
									})
								}, member.id))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: "Recent messages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
								children: "Most recent chat activity across the workspace."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: recentMessages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-slate-500 dark:text-slate-400",
											children: new Date(msg.created_at).toLocaleString()
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-semibold text-slate-900 dark:text-slate-100",
											children: msg.type === "text" ? msg.content : `(${msg.type}) ${msg.content}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-slate-500 dark:text-slate-400",
											children: ["Chat ID: ", msg.chat_id]
										})
									]
								}, msg.id))
							})
						]
					})]
				})
			]
		})]
	});
}
var SplitComponent = AdminDashboard;
//#endregion
export { SplitComponent as component };
