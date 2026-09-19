import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as supabase } from "./supabase-BMwQYxkE.mjs";
import { a as UserRoundCheck, c as Search, d as Plus, h as Pencil, i as UserRoundX, n as Wallet, o as Trash2, r as UserRound, s as ShieldCheck, t as X, u as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-BTtJNz_6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	id: "",
	member_id: "",
	nexus_id: "",
	first_name: "",
	last_name: "",
	email: "",
	user_password: "",
	role: "user",
	wallet_balance: 0,
	avatar_url: "",
	is_active: true
};
var formatCurrency = (value) => {
	return `$${(Number(value) || 0).toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})}`;
};
var formatDate = (value) => {
	if (!value) return "—";
	try {
		return new Date(value).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: "numeric"
		});
	} catch {
		return "—";
	}
};
var isRecentlyOnline = (value) => {
	if (!value) return false;
	try {
		return Date.now() - new Date(value).getTime() <= 3e5;
	} catch {
		return false;
	}
};
var formatLastSeen = (value) => {
	if (!value) return "—";
	if (isRecentlyOnline(value)) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1 text-emerald-300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-emerald-400" }), "Online"]
	});
	return formatDate(value);
};
var generateNexusId = () => {
	return `10${Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join("")}`;
};
var roleBadgeClass = (role) => {
	switch (role) {
		case "admin": return "bg-blue-500/15 text-blue-300";
		case "moderator": return "bg-purple-500/15 text-purple-300";
		default: return "bg-slate-700 text-slate-300";
	}
};
function AdminUsers() {
	const { user } = useAuth();
	const [users, setUsers] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [query, setQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("all");
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [visibleLimit, setVisibleLimit] = (0, import_react.useState)(50);
	const request = async (method, selectedUser) => {
		const { data: { session } } = await supabase.auth.getSession();
		if (!session) throw new Error("Your Admin session has expired. Please sign in again.");
		const response = await fetch("/api/admin/users", {
			method,
			headers: {
				Authorization: `Bearer ${session.access_token}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ user: selectedUser })
		});
		const result = await response.json();
		if (!response.ok) throw new Error(result.error || "Unable to complete request.");
		return result;
	};
	const loadUsers = async () => {
		setLoading(true);
		try {
			const result = await request("GET");
			setUsers(result.users || []);
			setVisibleLimit(50);
			setMessage("Users refreshed.");
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to load users.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadUsers();
	}, []);
	const visibleUsers = (0, import_react.useMemo)(() => users.filter((candidate) => {
		const textMatch = `${candidate.full_name || `${candidate.first_name || ""} ${candidate.last_name || ""}`.trim() || ""} ${candidate.member_id || ""} ${candidate.nexus_id || ""} ${candidate.email || ""}`.toLowerCase().includes(query.toLowerCase());
		const statusMatch = statusFilter === "all" || statusFilter === "active" === candidate.is_active;
		const roleMatch = roleFilter === "all" || candidate.role === roleFilter;
		return textMatch && statusMatch && roleMatch;
	}), [
		users,
		query,
		statusFilter,
		roleFilter
	]);
	const paginatedUsers = (0, import_react.useMemo)(() => visibleUsers.slice(0, visibleLimit), [visibleUsers, visibleLimit]);
	const hasMore = visibleUsers.length > visibleLimit;
	const saveUser = async (event) => {
		event.preventDefault();
		try {
			await request(form.id ? "PATCH" : "POST", form);
			setForm(emptyForm);
			setMessage(form.id ? "User updated." : "User created.");
			await loadUsers();
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to save user.");
		}
	};
	const removeUser = async (candidate) => {
		const displayName = candidate.full_name || `${candidate.first_name || ""} ${candidate.last_name || ""}`.trim() || candidate.member_id || candidate.nexus_id;
		if (!window.confirm(`Delete ${displayName}?`)) return;
		try {
			await request("DELETE", { id: candidate.id });
			setMessage("User deleted.");
			await loadUsers();
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to delete user.");
		}
	};
	const toggleStatus = async (candidate) => {
		try {
			await request("PATCH", {
				...candidate,
				user_password: "",
				is_active: !candidate.is_active
			});
			setMessage(candidate.is_active ? "User deactivated." : "User activated.");
			await loadUsers();
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to update status.");
		}
	};
	const adjustWallet = (delta) => {
		setForm((prev) => ({
			...prev,
			wallet_balance: Number(((Number(prev.wallet_balance) || 0) + delta).toFixed(2))
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-8 flex flex-wrap items-center gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/dashboard",
							className: "text-slate-400 hover:text-white",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/users",
							className: "font-semibold text-blue-400",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/feeds",
							className: "text-slate-400 hover:text-white",
							children: "Feeds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/support",
							className: "text-slate-400 hover:text-white",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/settings",
							className: "text-slate-400 hover:text-white",
							children: "Settings"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 flex flex-col gap-5 rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-2xl shadow-black/20 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.28em] text-blue-400",
							children: "People and access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl font-semibold",
							children: "User control center"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-400",
							children: "Create accounts, manage access, and keep inactive users out of the workspace."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-1 inline h-3.5 w-3.5" }), "Admin only"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: loadUsers,
							disabled: loading,
							title: "Refresh users",
							className: "rounded-xl border border-slate-700 p-3 text-slate-300 hover:border-blue-500 disabled:opacity-50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${loading ? "animate-spin" : ""}` })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 xl:grid-cols-[360px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: saveUser,
						className: "h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold",
									children: form.id ? "Modify user" : "Create user"
								}), form.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setForm(emptyForm),
									title: "Cancel editing",
									className: "text-slate-400 hover:text-white",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-sm text-slate-300",
										children: "Nexus ID"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: form.nexus_id || form.member_id,
											onChange: (event) => setForm({
												...form,
												nexus_id: event.target.value,
												member_id: event.target.value
											}),
											className: "block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												const id = generateNexusId();
												setForm({
													...form,
													nexus_id: id,
													member_id: id
												});
											},
											className: "shrink-0 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white",
											children: "Auto-generate"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["First name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: form.first_name,
											onChange: (event) => setForm({
												...form,
												first_name: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Last name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: form.last_name,
											onChange: (event) => setForm({
												...form,
												last_name: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											type: "email",
											value: form.email,
											onChange: (event) => setForm({
												...form,
												email: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: [form.id ? "New password (optional)" : "Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: !form.id,
											type: "password",
											value: form.user_password,
											onChange: (event) => setForm({
												...form,
												user_password: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Role", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: form.role,
											onChange: (event) => setForm({
												...form,
												role: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "user",
													children: "User"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "moderator",
													children: "Moderator"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "admin",
													children: "Admin"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "block text-sm text-slate-300",
											children: "Wallet balance"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4 shrink-0 text-slate-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "number",
												step: "0.01",
												value: form.wallet_balance,
												onChange: (event) => setForm({
													...form,
													wallet_balance: Number(event.target.value) || 0
												}),
												className: "block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2 flex flex-wrap gap-1",
											children: [[
												{
													label: "+10",
													onClick: () => adjustWallet(10)
												},
												{
													label: "+50",
													onClick: () => adjustWallet(50)
												},
												{
													label: "+100",
													onClick: () => adjustWallet(100)
												},
												{
													label: "-10",
													onClick: () => adjustWallet(-10)
												},
												{
													label: "-50",
													onClick: () => adjustWallet(-50)
												}
											].map((btn) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: btn.onClick,
												className: "rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300 hover:border-blue-500 hover:text-white",
												children: btn.label
											}, btn.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setForm((prev) => ({
													...prev,
													wallet_balance: 0
												})),
												className: "rounded-md border border-slate-700 px-2 py-1 text-xs text-slate-300 hover:border-amber-500 hover:text-white",
												children: "Reset"
											})]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Avatar URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: form.avatar_url,
											onChange: (event) => setForm({
												...form,
												avatar_url: event.target.value
											}),
											placeholder: "https://...",
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-3 flex items-center gap-2 text-sm text-slate-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: form.is_active,
											onChange: (event) => setForm({
												...form,
												is_active: event.target.checked
											})
										}), "Active account"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500",
								children: [form.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), form.id ? "Save changes" : "Create user"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xl font-semibold",
							children: ["All users ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-normal text-slate-500",
								children: [visibleUsers.length, " shown"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center rounded-xl border border-slate-800 bg-slate-900 px-3 text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Search users",
										className: "w-36 bg-transparent px-2 py-2 text-sm text-white outline-none"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: roleFilter,
									onChange: (event) => setRoleFilter(event.target.value),
									className: "rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All roles"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "admin",
											children: "Admin"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "moderator",
											children: "Moderator"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "user",
											children: "User"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: statusFilter,
									onChange: (event) => setStatusFilter(event.target.value),
									className: "rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All status"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "active",
											children: "Active"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "inactive",
											children: "Inactive"
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "overflow-hidden rounded-2xl border border-slate-800 bg-slate-900",
						children: [
							loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-center p-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-6 w-6 animate-spin text-blue-400" })
							}),
							!loading && paginatedUsers.map((candidate) => {
								const displayName = candidate.full_name || `${candidate.first_name || ""} ${candidate.last_name || ""}`.trim() || "Unnamed user";
								const displayId = candidate.nexus_id || candidate.member_id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 p-4 last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [candidate.avatar_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: candidate.avatar_url,
											alt: displayName,
											className: "h-12 w-12 shrink-0 rounded-full object-cover border border-slate-700",
											onError: (e) => {
												e.currentTarget.style.display = "none";
											}
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-slate-400",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "h-6 w-6" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-medium truncate",
															children: displayName
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2 py-0.5 text-[11px] capitalize ${roleBadgeClass(candidate.role)}`,
															children: candidate.role || "user"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2 py-0.5 text-[11px] ${candidate.is_active ? "bg-emerald-400/10 text-emerald-300" : "bg-slate-700 text-slate-400"}`,
															children: candidate.is_active ? "Active" : "Inactive"
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400",
													children: [
														displayId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["ID: ", displayId] }),
														candidate.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "truncate",
															children: candidate.email
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1 text-amber-300",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-3.5 w-3.5" }), formatCurrency(candidate.wallet_balance)]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Joined ", formatDate(candidate.created_at)] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Last seen ", formatLastSeen(candidate.last_seen_at)] })]
												})
											]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setForm({
													...emptyForm,
													...candidate,
													nexus_id: candidate.nexus_id || candidate.member_id || "",
													member_id: candidate.member_id || candidate.nexus_id || "",
													wallet_balance: Number(candidate.wallet_balance) || 0,
													user_password: ""
												}),
												title: "Edit user",
												className: "rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-blue-500",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => toggleStatus(candidate),
												title: candidate.is_active ? "Deactivate user" : "Activate user",
												className: "rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-amber-500",
												children: candidate.is_active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundX, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRoundCheck, { className: "h-4 w-4" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => removeUser(candidate),
												title: "Delete user",
												className: "rounded-lg border border-rose-900 p-2 text-rose-300 hover:bg-rose-950",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
											})
										]
									})]
								}, candidate.id);
							}),
							!loading && hasMore && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-slate-800 p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setVisibleLimit((prev) => prev + 50),
									className: "w-full rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white",
									children: [
										"Load more (",
										visibleUsers.length - visibleLimit,
										" remaining)"
									]
								})
							}),
							!loading && !visibleUsers.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "p-6 text-sm text-slate-400",
								children: "No users match the current filters."
							})
						]
					})] })]
				}),
				message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-slate-400",
					children: message
				})
			]
		})
	});
}
var SplitComponent = AdminUsers;
//#endregion
export { SplitComponent as component };
