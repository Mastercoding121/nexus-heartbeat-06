import { i as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1, r as useLocation$1, t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as formatNexusIdForDisplay, r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { n as useTheme } from "./Header-mkmxu_Kb.mjs";
import { t as AuthShell } from "./AuthShell-xWwhMHR1.mjs";
import { r as Qt } from "../_libs/input-otp.mjs";
import { n as InputOTPGroup, r as InputOTPSlot, t as InputOTP } from "./input-otp-q7uTzVYK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/verify-Bs3Z0tEk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useQueryEmail() {
	const match = (useLocation$1().search || "").match(/[?&]email=([^&]+)/);
	return match ? decodeURIComponent(match[1]) : "";
}
function VerifyEmail() {
	const queryEmail = useQueryEmail();
	const [email, setEmail] = (0, import_react.useState)(queryEmail);
	const [code, setCode] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [info, setInfo] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [resendLoading, setResendLoading] = (0, import_react.useState)(false);
	const [resendDisabled, setResendDisabled] = (0, import_react.useState)(true);
	const [countdown, setCountdown] = (0, import_react.useState)(30);
	const [verified, setVerified] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const { theme } = useTheme();
	const { verifyEmail, resendVerificationEmail, user } = useAuth();
	const navigate = useNavigate$1();
	const countdownRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (user && !verified) navigate("/app", { replace: true });
	}, [
		user,
		navigate,
		verified
	]);
	(0, import_react.useEffect)(() => {
		if (!queryEmail) return;
		setCountdown(30);
		setResendDisabled(true);
	}, [queryEmail]);
	(0, import_react.useEffect)(() => {
		if (!resendDisabled) return void 0;
		countdownRef.current = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					setResendDisabled(false);
					clearInterval(countdownRef.current);
					return 0;
				}
				return prev - 1;
			});
		}, 1e3);
		return () => {
			if (countdownRef.current) clearInterval(countdownRef.current);
		};
	}, [resendDisabled]);
	const themeClasses = (0, import_react.useMemo)(() => theme === "dark" ? {
		muted: "text-slate-300",
		card: "border-white/10 bg-slate-900/80 text-slate-100",
		input: "border-slate-700 bg-slate-800 text-white focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500",
		slot: "border-slate-700 bg-slate-800 text-white first:border-l-slate-700 last:border-r-slate-700"
	} : {
		muted: "text-slate-600",
		card: "border-slate-200 bg-white/80 text-slate-900",
		input: "border-slate-300 bg-white text-slate-900 focus:border-blue-500",
		button: "bg-blue-600 text-white hover:bg-blue-500",
		slot: "border-slate-300 bg-white text-slate-900 first:border-l-slate-300 last:border-r-slate-300"
	}, [theme]);
	const handleResend = async (e) => {
		e?.preventDefault?.();
		setError("");
		setInfo("");
		const normalizedEmail = String(email || "").trim().toLowerCase();
		if (!normalizedEmail) {
			setError("Please enter your email address.");
			return;
		}
		setResendLoading(true);
		try {
			await resendVerificationEmail({ email: normalizedEmail });
			setInfo("New verification code sent. Check your inbox and spam folder.");
			setCountdown(30);
			setResendDisabled(true);
		} catch (err) {
			setError(err.message || "Failed to resend verification code.");
		} finally {
			setResendLoading(false);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setInfo("");
		const normalizedEmail = String(email || "").trim().toLowerCase();
		if (!normalizedEmail) {
			setError("Please enter the email address you registered with.");
			return;
		}
		if (!code || code.length < 4 || code.length > 6 || !/^\d+$/.test(code)) {
			setError("Please enter the 4 or 6 digit verification code sent to your email.");
			return;
		}
		setLoading(true);
		try {
			const result = await verifyEmail({
				email: normalizedEmail,
				token: code
			});
			setVerified(result);
		} catch (err) {
			setError(err.message || "Verification failed. Please try again.");
		} finally {
			setLoading(false);
		}
	};
	if (verified) {
		const memberNumber = verified.user?.nexusIdDisplay || verified.nexusId ? formatNexusIdForDisplay(verified.nexusId) : null;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
			title: "Email verified — your Nexus account is ready",
			subtitle: "Your email has been confirmed and your Nexus membership is now active.",
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col rounded-[24px] border p-8 ${theme === "dark" ? "border-emerald-500/20 bg-slate-900/60" : "border-emerald-200 bg-white/80"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm ${theme === "dark" ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`,
						children: "Verification complete"
					}),
					memberNumber && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mt-6 rounded-2xl border p-5 ${theme === "dark" ? "border-blue-500/20 bg-blue-500/10" : "border-blue-200 bg-blue-50"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-sm ${themeClasses.muted}`,
								children: "Your Nexus number"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-2xl font-semibold tracking-[0.25em] text-blue-500 dark:text-blue-400",
									children: memberNumber
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: async () => {
										try {
											await navigator.clipboard.writeText(memberNumber.replace(/[^0-9]/g, ""));
											setCopied(true);
											setTimeout(() => setCopied(false), 2e3);
										} catch {
											setCopied(false);
										}
									},
									className: `rounded-xl border px-4 py-2 text-sm font-semibold transition ${theme === "dark" ? "border-white/10 text-slate-200 hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`,
									children: copied ? "Copied" : "Copy"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-4 text-sm ${themeClasses.muted}`,
								children: "Keep this number safe. You’ll use it to sign in from any device."
							}),
							verified.password && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-2 text-sm ${themeClasses.muted}`,
								children: "Your password is shown below for convenience."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg font-semibold",
								children: verified.password
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navigate("/app"),
							className: `rounded-xl px-4 py-3 text-sm font-semibold transition ${themeClasses.button}`,
							children: "Continue to app"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/login",
							className: `rounded-xl border px-4 py-3 text-sm font-semibold transition ${theme === "dark" ? "border-white/10 text-slate-200 hover:bg-white/10" : "border-slate-300 text-slate-700 hover:bg-slate-100"}`,
							children: "Sign in later"
						})]
					})
				]
			})
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
		title: "Verify your email",
		subtitle: "Enter the 4 or 6 digit code we just sent to your email to activate your Nexus account.",
		compact: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto w-full max-w-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: `rounded-[24px] border p-6 shadow-lg ${themeClasses.card}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Email verification"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-2 text-sm ${themeClasses.muted}`,
						children: "We sent a verification code to your email. It expires after a few minutes — use 4 digits or 6 digits, whichever arrived."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
								children: "Registered email"
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
										children: "Verification code"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inline-flex rounded-lg border p-0.5 text-xs font-medium",
										children: [4, 6].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setCode(""),
											className: `rounded-md px-3 py-1 transition ${code.length > 0 && code.length === n ? theme === "dark" ? "bg-blue-500/20 text-blue-200" : "bg-blue-100 text-blue-700" : themeClasses.muted}`,
											children: [n, " digits"]
										}, n))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputOTP, {
										maxLength: 6,
										value: code,
										onChange: (next) => setCode(next.replace(/\D/g, "").slice(0, 6)),
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
									children: "Tip: paste the whole code into any slot. If your email shows a 4-digit code, fill only the first 4 boxes and submit."
								})
							] }),
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
								className: `w-full rounded-xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`,
								children: loading ? "Verifying..." : "Verify & activate account"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: handleResend,
									disabled: resendLoading || resendDisabled,
									className: `font-medium text-blue-500 hover:underline disabled:cursor-not-allowed disabled:text-slate-500 disabled:no-underline`,
									children: resendLoading ? "Sending..." : resendDisabled ? `Resend code (${countdown}s)` : "Resend code"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
									to: "/login",
									className: `font-medium ${themeClasses.muted} hover:underline`,
									children: "Back to sign in"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `rounded-2xl border p-4 text-sm ${theme === "dark" ? "border-white/10 bg-white/5 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`,
								children: "Tip: Didn’t get the email? Check your spam/junk folder or promotions tab, then click “Resend code”."
							})
						]
					})
				]
			})
		})
	});
}
var SplitComponent = VerifyEmail;
//#endregion
export { SplitComponent as component };
