import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as redirect, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLocation$1 } from "./router-compat-NKRH5b0P.mjs";
import { t as AuthProvider } from "./AuthContext-Ct0yscfA.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CVanYHCR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D6_l5fdr.css";
function ScrollToTop() {
	const { pathname } = useLocation$1();
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$22 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Nexus Chat" },
			{
				name: "description",
				content: "Nexus Chat — privacy-first, end-to-end encrypted messaging."
			},
			{
				property: "og:title",
				content: "Nexus Chat"
			},
			{
				property: "og:description",
				content: "Nexus Chat — privacy-first, end-to-end encrypted messaging."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			type: "image/png",
			href: "/favicon.png"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$22.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AuthProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToTop, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})] })
	});
}
var $$splitComponentImporter$21 = () => import("./routes-C_19e_yL.mjs");
var Route$21 = createFileRoute("/")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Nexus Chat — Private, encrypted messaging" },
		{
			name: "description",
			content: "Nexus Chat is a privacy-first messenger with end-to-end encrypted chats, voice calls, stories and feeds."
		},
		{
			property: "og:title",
			content: "Nexus Chat — Private, encrypted messaging"
		},
		{
			property: "og:description",
			content: "Join Nexus Chat with your unique Nexus number and message friends privately across Android, iOS and the web."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$21, "component")
});
var $$splitComponentImporter$20 = () => import("./route-B8qq-3RS.mjs");
var Route$20 = createFileRoute("/admin")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Admin console — Nexus Chat" },
		{
			name: "description",
			content: "Administrator console for managing Nexus Chat members and support."
		},
		{
			property: "og:title",
			content: "Admin console — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Administrator console for managing Nexus Chat members and support."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$20, "component")
});
var $$splitComponentImporter$19 = () => import("./route-DGVyG09S.mjs");
var Route$19 = createFileRoute("/app")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Your chats — Nexus Chat" },
		{
			name: "description",
			content: "Your private Nexus Chat conversations, contacts, feeds and settings."
		},
		{
			property: "og:title",
			content: "Your chats — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Your private Nexus Chat conversations, contacts, feeds and settings."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$19, "component")
});
var $$splitComponentImporter$18 = () => import("./forgot-password-D1TLw84c.mjs");
var Route$18 = createFileRoute("/forgot-password")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Reset your password — Nexus Chat" },
		{
			name: "description",
			content: "Request a password reset link for your Nexus Chat account."
		},
		{
			property: "og:title",
			content: "Reset your password — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Request a password reset link for your Nexus Chat account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$18, "component")
});
var $$splitComponentImporter$17 = () => import("./login-ZHGY3RNp.mjs");
var Route$17 = createFileRoute("/login")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Sign in — Nexus Chat" },
		{
			name: "description",
			content: "Sign in to Nexus Chat with your Nexus number and password."
		},
		{
			property: "og:title",
			content: "Sign in — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Sign in to Nexus Chat with your Nexus number and password."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$17, "component")
});
var $$splitComponentImporter$16 = () => import("./register-B5t5EeN2.mjs");
var Route$16 = createFileRoute("/register")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Create account — Nexus Chat" },
		{
			name: "description",
			content: "Create a Nexus Chat account and get your own Nexus number in seconds."
		},
		{
			property: "og:title",
			content: "Create account — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Create a Nexus Chat account and get your own Nexus number in seconds."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$16, "component")
});
var $$splitComponentImporter$15 = () => import("./reset-password-DB_t42QG.mjs");
var Route$15 = createFileRoute("/reset-password")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Choose a new password — Nexus Chat" },
		{
			name: "description",
			content: "Set a new password for your Nexus Chat account."
		},
		{
			property: "og:title",
			content: "Choose a new password — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Set a new password for your Nexus Chat account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$15, "component")
});
var $$splitComponentImporter$14 = () => import("./verify-Bs3Z0tEk.mjs");
var Route$14 = createFileRoute("/verify")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Verify your email — Nexus Chat" },
		{
			name: "description",
			content: "Enter the 4 or 6-digit verification code sent to your email to activate your Nexus Chat account."
		},
		{
			property: "og:title",
			content: "Verify your email — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Enter the 4 or 6-digit verification code sent to your email to activate your Nexus Chat account."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$14, "component")
});
var $$splitComponentImporter$13 = () => import("./admin-DICXuC2o.mjs");
var Route$13 = createFileRoute("/admin/")({
	ssr: false,
	beforeLoad: () => {
		throw redirect({ to: "/admin/dashboard" });
	},
	component: lazyRouteComponent($$splitComponentImporter$13, "component")
});
var $$splitComponentImporter$12 = () => import("./dashboard-NptOzNwE.mjs");
var Route$12 = createFileRoute("/admin/dashboard")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Dashboard — Nexus Chat admin" },
		{
			name: "description",
			content: "Overview of Nexus Chat members, messages and activity."
		},
		{
			property: "og:title",
			content: "Dashboard — Nexus Chat admin"
		},
		{
			property: "og:description",
			content: "Overview of Nexus Chat members, messages and activity."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./feeds-Cbsetp5X.mjs");
var Route$11 = createFileRoute("/admin/feeds")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Live Feed — Nexus Chat admin" },
		{
			name: "description",
			content: "Manage announcements, news, and community events on the Nexus live feed."
		},
		{
			property: "og:title",
			content: "Live Feed — Nexus Chat admin"
		},
		{
			property: "og:description",
			content: "Manage announcements, news, and community events on the Nexus live feed."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./login-CiQbKnmC.mjs");
var Route$10 = createFileRoute("/admin/login")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Admin sign in — Nexus Chat" },
		{
			name: "description",
			content: "Administrator sign in for the Nexus Chat console."
		},
		{
			property: "og:title",
			content: "Admin sign in — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Administrator sign in for the Nexus Chat console."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./settings-CHjlKmSm.mjs");
var Route$9 = createFileRoute("/admin/settings")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Settings — Nexus Chat admin" },
		{
			name: "description",
			content: "Configure the Nexus Chat admin console."
		},
		{
			property: "og:title",
			content: "Settings — Nexus Chat admin"
		},
		{
			property: "og:description",
			content: "Configure the Nexus Chat admin console."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./support-D0apwZTi.mjs");
var Route$8 = createFileRoute("/admin/support")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Support inbox — Nexus Chat admin" },
		{
			name: "description",
			content: "Answer member support conversations from the Nexus Chat admin console."
		},
		{
			property: "og:title",
			content: "Support inbox — Nexus Chat admin"
		},
		{
			property: "og:description",
			content: "Answer member support conversations from the Nexus Chat admin console."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./users-BTtJNz_6.mjs");
var Route$7 = createFileRoute("/admin/users")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Members — Nexus Chat admin" },
		{
			name: "description",
			content: "Browse and manage registered Nexus Chat members."
		},
		{
			property: "og:title",
			content: "Members — Nexus Chat admin"
		},
		{
			property: "og:description",
			content: "Browse and manage registered Nexus Chat members."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./app-BsjX0i6s.mjs");
var Route$6 = createFileRoute("/app/")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Chats — Nexus Chat" },
		{
			name: "description",
			content: "Pick up where you left off in your Nexus Chat conversations."
		},
		{
			property: "og:title",
			content: "Chats — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Pick up where you left off in your Nexus Chat conversations."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contacts-CaNTvsn2.mjs");
var Route$5 = createFileRoute("/app/contacts")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Contacts — Nexus Chat" },
		{
			name: "description",
			content: "Find people by Nexus number and start a private conversation."
		},
		{
			property: "og:title",
			content: "Contacts — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Find people by Nexus number and start a private conversation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./feeds-Y_gSlC78.mjs");
var Route$4 = createFileRoute("/app/feeds")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Feeds — Nexus Chat" },
		{
			name: "description",
			content: "Community posts and updates from the Nexus Chat feed."
		},
		{
			property: "og:title",
			content: "Feeds — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Community posts and updates from the Nexus Chat feed."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./support-DuH86-JX.mjs");
var Route$3 = createFileRoute("/app/support")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Support — Nexus Chat" },
		{
			name: "description",
			content: "Chat directly with the Nexus Chat support team."
		},
		{
			property: "og:title",
			content: "Support — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Chat directly with the Nexus Chat support team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./chat._chatId-CFuLpyPF.mjs");
var Route$2 = createFileRoute("/app/chat/$chatId")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Conversation — Nexus Chat" },
		{
			name: "description",
			content: "An encrypted Nexus Chat conversation."
		},
		{
			property: "og:title",
			content: "Conversation — Nexus Chat"
		},
		{
			property: "og:description",
			content: "An encrypted Nexus Chat conversation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./settings.index-CvteurFo.mjs");
var Route$1 = createFileRoute("/app/settings/")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Settings — Nexus Chat" },
		{
			name: "description",
			content: "Manage your Nexus Chat profile, appearance and privacy settings."
		},
		{
			property: "og:title",
			content: "Settings — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Manage your Nexus Chat profile, appearance and privacy settings."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./settings._section-YRUoX18Y.mjs");
var Route = createFileRoute("/app/settings/$section")({
	ssr: false,
	head: () => ({ meta: [
		{ title: "Settings — Nexus Chat" },
		{
			name: "description",
			content: "Manage your Nexus Chat profile, appearance and privacy settings."
		},
		{
			property: "og:title",
			content: "Settings — Nexus Chat"
		},
		{
			property: "og:description",
			content: "Manage your Nexus Chat profile, appearance and privacy settings."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$21.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$22
});
var AdminRouteRoute = Route$20.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$22
});
var AppRouteRoute = Route$19.update({
	id: "/app",
	path: "/app",
	getParentRoute: () => Route$22
});
var ForgotPasswordRoute = Route$18.update({
	id: "/forgot-password",
	path: "/forgot-password",
	getParentRoute: () => Route$22
});
var LoginRoute = Route$17.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$22
});
var RegisterRoute = Route$16.update({
	id: "/register",
	path: "/register",
	getParentRoute: () => Route$22
});
var ResetPasswordRoute = Route$15.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$22
});
var VerifyRoute = Route$14.update({
	id: "/verify",
	path: "/verify",
	getParentRoute: () => Route$22
});
var AdminIndexRoute = Route$13.update({
	id: "/",
	path: "/",
	getParentRoute: () => AdminRouteRoute
});
var AdminDashboardRoute = Route$12.update({
	id: "/dashboard",
	path: "/dashboard",
	getParentRoute: () => AdminRouteRoute
});
var AdminFeedsRoute = Route$11.update({
	id: "/feeds",
	path: "/feeds",
	getParentRoute: () => AdminRouteRoute
});
var AdminLoginRoute = Route$10.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => AdminRouteRoute
});
var AdminSettingsRoute = Route$9.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AdminRouteRoute
});
var AdminSupportRoute = Route$8.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => AdminRouteRoute
});
var AdminUsersRoute = Route$7.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => AdminRouteRoute
});
var AppIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => AppRouteRoute
});
var AppContactsRoute = Route$5.update({
	id: "/contacts",
	path: "/contacts",
	getParentRoute: () => AppRouteRoute
});
var AppFeedsRoute = Route$4.update({
	id: "/feeds",
	path: "/feeds",
	getParentRoute: () => AppRouteRoute
});
var AppSupportRoute = Route$3.update({
	id: "/support",
	path: "/support",
	getParentRoute: () => AppRouteRoute
});
var AppChatChatIdRoute = Route$2.update({
	id: "/chat/$chatId",
	path: "/chat/$chatId",
	getParentRoute: () => AppRouteRoute
});
var AppSettingsIndexRoute = Route$1.update({
	id: "/settings/",
	path: "/settings/",
	getParentRoute: () => AppRouteRoute
});
var AppSettingsSectionRoute = Route.update({
	id: "/settings/$section",
	path: "/settings/$section",
	getParentRoute: () => AppRouteRoute
});
var AdminRouteRouteChildren = {
	AdminDashboardRoute,
	AdminFeedsRoute,
	AdminLoginRoute,
	AdminSettingsRoute,
	AdminSupportRoute,
	AdminUsersRoute,
	AdminIndexRoute
};
var AdminRouteRouteWithChildren = AdminRouteRoute._addFileChildren(AdminRouteRouteChildren);
var AppRouteRouteChildren = {
	AppContactsRoute,
	AppFeedsRoute,
	AppSupportRoute,
	AppIndexRoute,
	AppChatChatIdRoute,
	AppSettingsSectionRoute,
	AppSettingsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AdminRouteRoute: AdminRouteRouteWithChildren,
	AppRouteRoute: AppRouteRoute._addFileChildren(AppRouteRouteChildren),
	ForgotPasswordRoute,
	LoginRoute,
	RegisterRoute,
	ResetPasswordRoute,
	VerifyRoute
};
var routeTree = Route$22._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
