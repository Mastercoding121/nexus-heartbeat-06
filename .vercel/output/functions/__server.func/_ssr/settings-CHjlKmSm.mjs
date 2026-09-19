import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as supabase } from "./supabase-BMwQYxkE.mjs";
import { C as LoaderCircle, f as Play, k as Database } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CHjlKmSm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminSettings() {
	const [status, setStatus] = (0, import_react.useState)("");
	const [output, setOutput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const runDatabaseSync = async (event) => {
		event.preventDefault();
		setLoading(true);
		setStatus("");
		setOutput("");
		try {
			const { data: { session } } = await supabase.auth.getSession();
			if (!session) throw new Error("Your Admin session has expired. Please sign in again.");
			const response = await fetch("/api/admin/db-sync", {
				method: "POST",
				headers: { Authorization: `Bearer ${session.access_token}` }
			});
			const responseText = await response.text();
			let result = {};
			try {
				result = responseText ? JSON.parse(responseText) : {};
			} catch {
				throw new Error(`Database sync failed (HTTP ${response.status}).`);
			}
			if (!response.ok) throw new Error(result.error || "Database sync failed.");
			setStatus("Database sync completed successfully.");
			setOutput(result.output || "Schema applied and verification completed.");
		} catch (error) {
			setStatus(error instanceof Error ? error.message : "Database sync failed.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.28em] text-blue-600",
					children: "Admin settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold",
					children: "Workspace controls"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/admin/dashboard",
					className: "text-sm font-medium text-blue-600 hover:text-blue-500",
					children: "Back to dashboard"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-8 flex flex-wrap gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/admin/dashboard",
						className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
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
						className: "font-semibold text-blue-600",
						children: "Settings"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-950/40 dark:text-blue-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "Database schema sync"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400",
							children: "Apply missing tables, columns, policies, functions, and realtime configuration, then run the database verification checks."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: runDatabaseSync,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), loading ? "Syncing database..." : "Run database sync"]
						})
					}),
					status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-5 text-sm ${status.includes("successfully") ? "text-emerald-600" : "text-rose-600"}`,
						children: status
					}),
					output && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-4 max-h-80 overflow-auto rounded-xl bg-slate-950 p-4 text-xs leading-5 text-slate-200",
						children: output
					})
				]
			})]
		})]
	});
}
var SplitComponent = AdminSettings;
//#endregion
export { SplitComponent as component };
