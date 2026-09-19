import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1, t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { n as useTheme } from "./Header-mkmxu_Kb.mjs";
import { t as AuthShell } from "./AuthShell-xWwhMHR1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/forgot-password-D1TLw84c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ForgotPassword() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { theme } = useTheme();
	const { forgotPassword } = useAuth();
	const navigate = useNavigate$1();
	const themeClasses = (0, import_react.useMemo)(() => theme === "dark" ? {
		muted: "text-slate-300",
		card: "border-white/10 bg-slate-900/80 text-slate-100",
		input: "border-slate-700 bg-slate-800 text-white focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500"
	} : {
		muted: "text-slate-600",
		card: "border-slate-200 bg-white/80 text-slate-900",
		input: "border-slate-300 bg-white text-slate-900 focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500"
	}, [theme]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setMessage("");
		setLoading(true);
		try {
			await forgotPassword({ email });
			const targetEmail = encodeURIComponent(String(email || "").trim().toLowerCase());
			navigate(`/reset-password${targetEmail ? `?email=${targetEmail}` : ""}`, { replace: true });
		} catch (err) {
			setError(err.message || "Failed to send reset email");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Forgot your password?",
		subtitle: "Enter the email connected to your account and we’ll send you a 4 or 6-digit reset code to secure your account.",
		compact: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: `rounded-[24px] border p-6 shadow-lg ${themeClasses.card} space-y-6`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Reset your password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-sm ${themeClasses.muted}`,
						children: "We’ll send a 4 or 6-digit reset code to the email on file. Use it on the next screen to pick a new password."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
						children: "Email address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true,
						className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
						placeholder: "you@example.com"
					})] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-rose-400",
						children: error
					}),
					message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-green-500",
						children: message
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: `w-full rounded-xl px-4 py-3 font-semibold transition-colors disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`,
						children: loading ? "Sending code..." : "Send reset code"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: `mt-6 text-center text-sm ${themeClasses.muted}`,
				children: [
					"Remember your password?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/login",
						className: "font-semibold text-blue-500 hover:underline",
						children: "Sign in"
					})
				]
			})]
		})
	});
}
var SplitComponent = ForgotPassword;
//#endregion
export { SplitComponent as component };
