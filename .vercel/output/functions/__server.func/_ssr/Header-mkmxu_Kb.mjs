import { r as __toESM } from "../_runtime.mjs";
import { L as require_react, g as ForwardRef$1, s as ForwardRef } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { t as Avatar } from "./Avatar-DbRwqPd6.mjs";
import { x as LogOut } from "../_libs/lucide-react.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Header-mkmxu_Kb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var THEME_STORAGE_KEY = "nexus-theme";
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const resolvedTheme = (typeof window !== "undefined" ? localStorage.getItem(THEME_STORAGE_KEY) : null) || "light";
		setTheme(resolvedTheme);
		applyTheme(resolvedTheme);
		const handleStorageChange = (e) => {
			if (e.key === THEME_STORAGE_KEY && e.newValue) {
				setTheme(e.newValue);
				applyTheme(e.newValue);
			}
		};
		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, []);
	const applyTheme = (themeToApply) => {
		if (typeof window !== "undefined") {
			document.documentElement.classList.toggle("dark", themeToApply === "dark");
			document.documentElement.style.colorScheme = themeToApply;
		}
	};
	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);
		if (typeof window !== "undefined") {
			localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
			applyTheme(nextTheme);
			window.dispatchEvent(new StorageEvent("storage", {
				key: THEME_STORAGE_KEY,
				newValue: nextTheme
			}));
		}
	};
	return {
		theme,
		toggleTheme
	};
}
function randomChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function Header({ showSignIn = true }) {
	const { theme, toggleTheme } = useTheme();
	const { user, switchAccount } = useAuth();
	const [logoStyle, setLogoStyle] = (0, import_react.useState)("brand-float");
	(0, import_react.useEffect)(() => {
		setLogoStyle(randomChoice([
			"brand-float",
			"brand-spin",
			"brand-wiggle",
			"brand-pulse"
		]));
	}, []);
	const isNative = typeof window !== "undefined" && window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-border bg-card/80 text-foreground shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl px-4 py-4 transition-all sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-badge flex h-13 w-13 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-600 p-1 shadow-[0_18px_45px_rgba(59,130,246,0.30)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950/90 shadow-[inset_0_1px_15px_rgba(255,255,255,0.18)] ${logoStyle}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "Nexus logo",
						className: "h-8 w-8 rounded-lg object-contain"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground",
					children: "Nexus"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-sm font-semibold sm:text-base",
					children: "Privacy-first encrypted messaging"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-end gap-2 sm:gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggleTheme,
				className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground hover:bg-muted/80 transition animate-in fade-in duration-200",
				"aria-label": "Toggle theme",
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "h-4 w-4" })
			}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: user.role === "admin" ? "/admin/dashboard" : "/app/settings/profile",
					className: "flex items-center gap-2 transition duration-200 hover:opacity-85 active:scale-95",
					title: "View Profile Settings",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						src: user.avatarUrl,
						alt: user.fullName || "User",
						size: "sm"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => switchAccount(),
					className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition hover:bg-muted/80",
					"aria-label": "Switch account",
					title: "Switch account",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
				})]
			}) : !isNative && showSignIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
				to: "/login",
				className: "rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition sm:px-4",
				children: "Sign in"
			})]
		})]
	});
}
//#endregion
export { useTheme as n, Header as t };
