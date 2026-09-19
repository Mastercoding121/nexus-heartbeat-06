import { D as ForwardRef$4, E as ForwardRef$3, I as ForwardRef$6, P as ForwardRef$5, _ as ForwardRef$2, l as ForwardRef, r as ForwardRef$7, u as ForwardRef$1 } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { F as Apple } from "../_libs/lucide-react.mjs";
import { n as useTheme, t as Header } from "./Header-mkmxu_Kb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C_19e_yL.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		title: "Instant conversations",
		description: "Fast, lightweight chats that feel fluid on desktop and mobile alike.",
		icon: ForwardRef
	},
	{
		title: "Protected by design",
		description: "Encrypted rooms, secure sign-in, and protected media sharing for everyday use.",
		icon: ForwardRef$1
	},
	{
		title: "Voice and video ready",
		description: "Crystal-clear voice calls and a modern interface built for nonstop communication.",
		icon: ForwardRef$2
	}
];
var platforms = [
	{
		label: "Android",
		icon: ForwardRef$3
	},
	{
		label: "iOS/iPad",
		icon: Apple
	},
	{
		label: "Windows/Tablet",
		icon: ForwardRef$4
	}
];
function AuthLanding() {
	const { theme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background text-foreground transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-3 py-1 text-sm text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "h-4 w-4" }), "Privacy-first encrypted messaging experience"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
							children: "Connect with private conversations and a privacy-first messaging hub."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg leading-8 text-muted-foreground",
							children: "Launch secure chats, share media, make voice calls, and keep your conversations encrypted across desktop and mobile."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								to: "/register",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition",
								children: ["Create account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								to: "/login",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-5 py-3 font-semibold text-foreground hover:bg-muted/80 transition",
								children: ["Open app ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-3",
							children: features.map((feature, index) => {
								const Icon = feature.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "float-card rounded-2xl border border-border bg-card p-4 shadow-sm backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mb-3 h-6 w-6 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold",
											children: feature.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: feature.description
										})
									]
								}, feature.title);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-[28px] border border-border bg-card p-6 shadow-2xl backdrop-blur-xl sm:p-7 lg:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/20 bg-primary/10 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-primary",
									children: "Ready-made app download"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl font-semibold",
									children: "Get Nexus for Android, PC, tablets, Mac and iPhone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Download the ready-made app package for your device and install it. If your device shows an “Unknown Source” warning, it is safe to proceed and continue the installation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-3",
									children: [
										typeof navigator !== "undefined" && (() => {
											return /Android/i.test(navigator.userAgent) && !(typeof window !== "undefined" && window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://nexus-chat-sandy-alpha.vercel.app/app-release.apk",
												download: true,
												className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "h-4 w-4" }), " Android app"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://developer.android.com/studio",
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "h-4 w-4" }), " Android app"]
											});
										})(),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://developer.apple.com/xcode/",
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 font-semibold text-foreground hover:bg-muted/80 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "h-4 w-4" }), " iOS app"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
											to: "/login",
											className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 font-semibold text-foreground hover:bg-muted/80 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "h-4 w-4" }), " Open app"]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-border bg-muted p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-medium text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$7, { className: "h-4 w-4 text-primary" }), "Included experiences"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Secure sign-in with member number" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Voice, media and chat support" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Wallpaper and settings customization" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Cross-device messaging and privacy controls" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: platforms.map((platform) => {
								const Icon = platform.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "float-card flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-sm text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }),
										" ",
										platform.label
									]
								}, platform.label);
							})
						})
					]
				})]
			})]
		})
	});
}
var SplitComponent = AuthLanding;
//#endregion
export { SplitComponent as component };
