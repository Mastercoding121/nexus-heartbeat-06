import { i as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1, t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
import { n as useTheme } from "./Header-mkmxu_Kb.mjs";
import { t as AuthShell } from "./AuthShell-xWwhMHR1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/register-B5t5EeN2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Register() {
	const [firstName, setFirstName] = (0, import_react.useState)("");
	const [lastName, setLastName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [memberDetails, setMemberDetails] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const { theme } = useTheme();
	const { register, user } = useAuth();
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
		setCopied(false);
		try {
			const result = await register({
				firstName,
				lastName,
				email,
				password
			});
			if (result?.requiresEmailConfirmation) {
				const targetEmail = encodeURIComponent(result.user?.email || email || "");
				navigate(`/verify${targetEmail ? `?email=${targetEmail}` : ""}`, { replace: true });
				return;
			}
			setMemberDetails(result);
		} catch (err) {
			setError(err.message || "Registration failed");
		} finally {
			setLoading(false);
		}
	};
	if (memberDetails) {
		const memberNumber = memberDetails.user?.nexusIdDisplay || memberDetails.user?.nexusId || memberDetails.nexusId;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthShell, {
			title: "Your secure Nexus account is ready",
			subtitle: memberDetails.requiresEmailConfirmation ? "Confirm your email, then sign in with your Nexus number and password." : "Your account is active and you're logged in automatically. Copy your Nexus number for quick sign-in.",
			compact: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex flex-col rounded-[24px] border p-8 ${theme === "dark" ? "border-emerald-500/20 bg-slate-900/60" : "border-emerald-200 bg-white/80"}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-sm ${theme === "dark" ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`,
						children: "Nexus account created"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mt-6 rounded-2xl border p-5 ${theme === "dark" ? "border-blue-500/20 bg-blue-500/10" : "border-blue-200 bg-blue-50"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-sm ${themeClasses.muted}`,
								children: "Nexus number"
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
											await navigator.clipboard.writeText(memberNumber);
											setCopied(true);
										} catch {
											setCopied(false);
										}
									},
									className: "rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800",
									children: copied ? "Copied" : "Copy"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-4 text-sm ${themeClasses.muted}`,
								children: "Keep this number safe to sign in from another device."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-2 text-sm ${themeClasses.muted}`,
								children: "Your password is shown below for convenience."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-lg font-semibold",
								children: memberDetails.password
							})
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
		title: "Create your secure Nexus account",
		subtitle: "Start with your first and last name. Add a password if you want one, or leave it blank for a generated secure one. Your Nexus number will be issued as 10-xxxx-xxxx; you’ll enter only the final 8 digits on login.",
		compact: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-8 lg:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex-1 rounded-[24px] border p-8 ${theme === "dark" ? "border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-slate-900" : "border-blue-200 bg-gradient-to-br from-blue-50 to-white"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-2xl border p-4 text-sm ${theme === "dark" ? "border-white/10 bg-white/5 text-slate-300" : "border-slate-200 bg-slate-50 text-slate-600"}`,
					children: [
						"• Fast onboarding",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"• Private Nexus number sign-in",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"• Syncs into the protected chat experience"
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `w-full max-w-md rounded-[24px] border p-6 shadow-lg ${themeClasses.card}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold",
						children: "Register"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-2 text-sm ${themeClasses.muted}`,
						children: "You will receive a 10-digit member number instantly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "mt-6 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
									children: "First name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: firstName,
									onChange: (e) => setFirstName(e.target.value),
									required: true,
									className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
									placeholder: "Ava"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
									children: "Last name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: lastName,
									onChange: (e) => setLastName(e.target.value),
									required: true,
									className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
									placeholder: "Stone"
								})] })]
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `mb-2 block text-sm font-medium ${themeClasses.muted}`,
								children: ["Password ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: theme === "dark" ? "text-slate-500" : "text-slate-400",
									children: "(optional)"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: `w-full rounded-xl border px-4 py-3 text-sm outline-none transition ${themeClasses.input}`,
								placeholder: "Leave blank for a generated password"
							})] }),
							error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-rose-400",
								children: error
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: loading,
								className: `w-full rounded-xl px-4 py-3 text-sm font-semibold transition disabled:cursor-not-allowed ${themeClasses.button} disabled:bg-slate-600`,
								children: loading ? "Creating account..." : "Create account"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center text-sm text-slate-400",
						children: [
							"Already a member?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/login",
								className: "font-semibold text-blue-500 hover:underline",
								children: "Sign in"
							})
						]
					})
				]
			})]
		})
	});
}
var SplitComponent = Register;
//#endregion
export { SplitComponent as component };
