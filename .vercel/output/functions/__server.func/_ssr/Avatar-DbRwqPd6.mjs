import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Avatar-DbRwqPd6.js
var import_jsx_runtime = require_jsx_runtime();
function Avatar({ src, alt, size = "md" }) {
	const sizeClasses = {
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-12 h-12",
		xl: "w-20 h-20",
		"2xl": "w-28 h-28"
	};
	const getInitials = (name) => {
		return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${sizeClasses[size]} rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold`,
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full h-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: size === "2xl" ? "text-2xl" : size === "xl" ? "text-lg" : "text-sm",
			children: getInitials(alt || "User")
		})
	});
}
//#endregion
export { Avatar as t };
