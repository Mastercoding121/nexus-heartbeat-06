import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { _ as useNavigate, g as Link, l as useLocation, v as useParams } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-compat-NKRH5b0P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Thin compatibility layer so the original Nexus Chat pages/components can keep
* using the familiar router API while the app runs on TanStack Router.
*/
function useNavigate$1() {
	const navigate = useNavigate();
	return (0, import_react.useCallback)((to, options = {}) => {
		if (typeof to === "number") {
			if (typeof window !== "undefined") window.history.go(to);
			return;
		}
		navigate({
			to,
			replace: Boolean(options.replace),
			...options.state ? { state: options.state } : {}
		});
	}, [navigate]);
}
function Link$1({ to, replace, state, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		replace,
		state,
		...rest,
		children
	});
}
function Navigate({ to, replace = false }) {
	const navigate = useNavigate$1();
	(0, import_react.useEffect)(() => {
		navigate(to, { replace });
	}, [to, replace]);
	return null;
}
function useLocation$1() {
	const location = useLocation();
	return {
		pathname: location.pathname,
		search: location.searchStr ?? "",
		hash: location.hash ?? "",
		state: location.state ?? {},
		key: location.href
	};
}
function useParams$1() {
	return useParams({ strict: false });
}
//#endregion
export { useParams$1 as a, useNavigate$1 as i, Navigate as n, useLocation$1 as r, Link$1 as t };
