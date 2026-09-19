import { f as Outlet } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Navigate, r as useLocation$1 } from "./router-compat-NKRH5b0P.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-B8qq-3RS.js
var import_jsx_runtime = require_jsx_runtime();
function AdminGuard({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation$1();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" })
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		replace: true,
		state: { from: location.pathname }
	});
	if (user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/app",
		replace: true
	});
	if (!user.adminAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		replace: true,
		state: { from: location.pathname }
	});
	return children;
}
function AdminLayoutRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
export { AdminLayoutRoute as component };
