import { i as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as useTheme, t as Header } from "./Header-mkmxu_Kb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthShell-xWwhMHR1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthShell({ children, title, subtitle, compact = false }) {
	const { theme } = useTheme();
	const themeClasses = (0, import_react.useMemo)(() => ({ muted: theme === "dark" ? "text-slate-300" : "text-slate-600" }), [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8 ${compact ? "max-w-5xl py-8" : "py-10"}`,
			children: [(title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 max-w-2xl",
				children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold sm:text-4xl",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-3 text-base leading-7 ${themeClasses.muted}`,
					children: subtitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[32px] border p-6 shadow-2xl backdrop-blur-xl lg:p-10 bg-white/80 dark:bg-slate-900/80 border-slate-200/70 dark:border-white/10",
				children
			})]
		})]
	});
}
//#endregion
export { AuthShell as t };
