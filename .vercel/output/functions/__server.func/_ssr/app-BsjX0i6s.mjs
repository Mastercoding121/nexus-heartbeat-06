import { f as ForwardRef } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1 } from "./router-compat-NKRH5b0P.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-BsjX0i6s.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	useNavigate$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center bg-background p-4 md:p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-8 h-8 text-primary" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-semibold text-card-foreground",
					children: "Start a new chat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm mt-2 text-muted-foreground",
					children: "Create a new conversation to begin messaging with friends and groups."
				})
			]
		})
	});
}
var SplitComponent = Home;
//#endregion
export { SplitComponent as component };
