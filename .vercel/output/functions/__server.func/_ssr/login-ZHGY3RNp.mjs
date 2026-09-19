import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, u as ForwardRef } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1, t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { n as useTheme } from "./Header-mkmxu_Kb.mjs";
import { t as AuthShell } from "./AuthShell-xWwhMHR1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-ZHGY3RNp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PREFIX = "10";
function getNumericDigits(raw) {
	return String(raw || "").replace(/\D/g, "");
}
function formatSuffixForDisplay(raw) {
	const digits = getNumericDigits(raw);
	const trimmed = (digits.startsWith(PREFIX) ? digits.slice(2) : digits).slice(0, 8);
	const firstGroup = trimmed.slice(0, 4);
	const secondGroup = trimmed.slice(4);
	return secondGroup ? `${firstGroup}-${secondGroup}` : firstGroup;
}
function NexusNumberInput({ value, onChange, className, placeholder = "2345-6789" }) {
	const suffixValue = formatSuffixForDisplay(value);
	const handleChange = (e) => {
		const rawDigits = getNumericDigits(e.target.value);
		onChange(`${PREFIX}${(rawDigits.startsWith(PREFIX) ? rawDigits.slice(2) : rawDigits).slice(0, 8)}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "select-none text-slate-500",
			children: [PREFIX, "-"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type: "tel",
			inputMode: "numeric",
			pattern: "[0-9-]*",
			maxLength: 9,
			value: suffixValue,
			onChange: handleChange,
			placeholder,
			className
		})]
	});
}
function Login() {
	const [nexusId, setNexusId] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { theme } = useTheme();
	const { login, user } = useAuth();
	const navigate = useNavigate$1();
	(0, import_react.useEffect)(() => {
		if (user) navigate("/app", { replace: true });
	}, [user, navigate]);
	const themeClasses = (0, import_react.useMemo)(() => theme === "dark" ? {
		shell: "border-white/10 bg-slate-950/80 text-slate-100",
		card: "border-white/10 bg-slate-900/80 text-slate-100",
		muted: "text-slate-300",
		input: "border-slate-700 bg-slate-800 text-white focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500"
	} : {
		shell: "border-slate-200 bg-white/80 text-slate-900",
		card: "border-slate-200 bg-white/80 text-slate-900",
		muted: "text-slate-600",
		input: "border-slate-300 bg-white text-slate-900 focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500"
	}, [theme]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setLoading(true);
		try {
			const destination = (await login(nexusId, password))?.user?.role === "admin" ? "/admin" : "/app";
			navigate(destination);
		} catch (err) {
			setError(err.message || "Login failed");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Welcome back to Nexus",
		subtitle: "Sign in using your unique Nexus number and password. Enter only the eight digits after the fixed 10- prefix.",
		compact: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-8 lg:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex-1 rounded-[24px] border p-8 ${theme === "dark" ? "border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-slate-900" : "border-blue-200 bg-gradient-to-br from-blue-50 to-white"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-full border px-3 py-1 text-sm ${theme === "dark" ? "border-blue-400/30 bg-blue-500/10 text-blue-200" : "border-blue-200 bg-blue-50 text-blue-700"}`,
					children: "Secure access"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `mt-6 rounded-2xl border p-4 text-sm ${theme === "dark" ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-100" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "h-4 w-4" }), " Protected by end-to-end encryption"]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `w-full max-w-md rounded-[24px] border p-6 shadow-lg ${themeClasses.card}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Nexus login"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-2 text-sm ${themeClasses.muted}`,
						children: "Use your Nexus number issued during registration."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
								children: "Nexus number"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NexusNumberInput, {
								value: nexusId,
								onChange: setNexusId,
								className: `w-full rounded-xl border px-4 py-3 text-sm outline-none ring-0 transition ${themeClasses.input}`,
								placeholder: "2345-6789"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
								children: "Password"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
								placeholder: "••••••••"
							})] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-rose-400",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: `w-full rounded-xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`,
								children: loading ? "Signing in..." : "Sign in"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 text-center space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/forgot-password",
							className: "text-sm text-blue-500 hover:underline",
							children: "Forgot password?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-slate-400",
							children: [
								"New here?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
									to: "/register",
									className: "font-semibold text-blue-500 hover:underline",
									children: "Create account"
								})
							]
						})]
					})
				]
			})]
		})
	});
}
var SplitComponent = Login;
//#endregion
export { SplitComponent as component };
