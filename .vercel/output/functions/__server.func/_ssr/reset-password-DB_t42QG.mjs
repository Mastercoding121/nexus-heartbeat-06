import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1, r as useLocation$1, t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { n as useTheme } from "./Header-mkmxu_Kb.mjs";
import { t as AuthShell } from "./AuthShell-xWwhMHR1.mjs";
import { r as Qt } from "../_libs/input-otp.mjs";
import { n as InputOTPGroup, r as InputOTPSlot, t as InputOTP } from "./input-otp-q7uTzVYK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-DB_t42QG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useQueryEmail() {
	const match = (useLocation$1().search || "").match(/[?&]email=([^&]+)/);
	return match ? decodeURIComponent(match[1]) : "";
}
function ResetPassword() {
	const queryEmail = useQueryEmail();
	const [email, setEmail] = (0, import_react.useState)(queryEmail);
	const [token, setToken] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [info, setInfo] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const navigate = useNavigate$1();
	const { theme } = useTheme();
	const { resetPasswordWithOtp } = useAuth();
	(0, import_react.useEffect)(() => {
		if (queryEmail) setEmail(queryEmail);
	}, [queryEmail]);
	const themeClasses = (0, import_react.useMemo)(() => theme === "dark" ? {
		muted: "text-slate-300",
		card: "border-white/10 bg-slate-900/80 text-slate-100",
		input: "border-slate-700 bg-slate-800 text-white focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500",
		slot: "border-slate-700 bg-slate-800 text-white"
	} : {
		muted: "text-slate-600",
		card: "border-slate-200 bg-white/80 text-slate-900",
		input: "border-slate-300 bg-white text-slate-900 focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500",
		slot: "border-slate-300 bg-white text-slate-900"
	}, [theme]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setInfo("");
		if (password !== confirmPassword) {
			setError("Passwords do not match. Please re-enter your new password.");
			return;
		}
		if (!password || password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		if (!token || token.length < 4 || token.length > 6 || !/^\d+$/.test(token)) {
			setError("Please enter the 4 or 6 digit reset code sent to your email.");
			return;
		}
		setLoading(true);
		try {
			await resetPasswordWithOtp({
				email,
				token,
				newPassword: password
			});
			setDone(true);
		} catch (err) {
			setError(err.message || "Failed to reset password");
		} finally {
			setLoading(false);
		}
	};
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Password reset complete",
		subtitle: "Your Nexus account password has been updated. Sign in with your new password to continue.",
		compact: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-md flex-col gap-5 rounded-[24px] border p-8 shadow-lg ${themeClasses.card}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm ${theme === "dark" ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`,
					children: "Password updated"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `text-sm ${themeClasses.muted}`,
					children: "Use your new password the next time you sign in with your Nexus number or email."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => navigate("/login", { replace: true }),
						className: `rounded-xl px-4 py-3 text-sm font-semibold transition ${themeClasses.button}`,
						children: "Sign in now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/",
						className: `rounded-xl border px-4 py-3 text-sm font-semibold transition ${theme === "dark" ? "border-white/10 text-slate-200 hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`,
						children: "Back to home"
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Reset your password",
		subtitle: "Enter the reset code we emailed you (4 or 6 digits), then choose a new secure password for your Nexus account.",
		compact: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-md",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: `rounded-[24px] border p-6 shadow-lg ${themeClasses.card} space-y-6`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Choose a new password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `text-sm ${themeClasses.muted}`,
						children: "Paste or type the 4 or 6 digit code from your password reset email, then enter a new password that’s at least 6 characters long."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						required: true,
						className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
						placeholder: "you@example.com"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `block text-sm font-medium ${themeClasses.muted}`,
								children: "Reset code (4 or 6 digits)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex rounded-lg border p-0.5 text-xs font-medium",
								children: [4, 6].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setToken(""),
									className: `rounded-md px-3 py-1 transition ${token.length > 0 && token.length === n ? theme === "dark" ? "bg-blue-500/20 text-blue-200" : "bg-blue-100 text-blue-700" : themeClasses.muted}`,
									children: [n, " digits"]
								}, n))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
								maxLength: 6,
								value: token,
								onChange: (next) => setToken(next.replace(/\D/g, "").slice(0, 6)),
								pattern: Qt,
								inputMode: "numeric",
								containerClassName: "w-full justify-start gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPGroup, { children: [
									0,
									1,
									2,
									3,
									4,
									5
								].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTPSlot, {
									index: i,
									className: `h-12 w-11 text-lg font-semibold rounded-md ${themeClasses.slot} border`
								}, i)) })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-xs ${themeClasses.muted}`,
							children: "If you got a 4-digit code, fill only the first 4 boxes and submit."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
						children: "New password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						required: true,
						minLength: 6,
						className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
						placeholder: "At least 6 characters"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
						children: "Confirm new password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: confirmPassword,
						onChange: (e) => setConfirmPassword(e.target.value),
						required: true,
						minLength: 6,
						className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
						placeholder: "Re-type the new password"
					})] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-rose-400",
						children: error
					}),
					info && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-emerald-500 dark:text-emerald-400",
						children: info
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: loading,
						className: `w-full rounded-xl px-4 py-3 font-semibold transition-colors disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`,
						children: loading ? "Resetting password..." : "Reset password"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center justify-between gap-3 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/forgot-password",
					className: `${themeClasses.muted} hover:underline`,
					children: "Need a new code?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/login",
					className: "font-semibold text-blue-500 hover:underline",
					children: "Back to sign in"
				})]
			})]
		})
	});
}
var SplitComponent = ResetPassword;
//#endregion
export { SplitComponent as component };
