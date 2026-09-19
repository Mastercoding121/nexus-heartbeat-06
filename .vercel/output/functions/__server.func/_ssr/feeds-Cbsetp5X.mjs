import { r as __toESM } from "../_runtime.mjs";
import { L as require_react } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-NKRH5b0P.mjs";
import { n as supabase } from "./supabase-BMwQYxkE.mjs";
import { T as Heart, b as MessageCircle, c as Search, d as Plus, h as Pencil, o as Trash2, s as ShieldCheck, t as X, u as RefreshCw } from "../_libs/lucide-react.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/feeds-Cbsetp5X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var emptyForm = {
	id: "",
	type: "text",
	status: "active",
	user_name: "Nexus",
	user_avatar_url: "",
	is_admin_post: true,
	content: ""
};
var typeBadgeColors = {
	text: "bg-slate-700 text-slate-300",
	news: "bg-orange-500/15 text-orange-400",
	event: "bg-emerald-500/15 text-emerald-400",
	announcement: "bg-purple-500/15 text-purple-400"
};
var statusBadgeColors = {
	active: "bg-emerald-500/15 text-emerald-400",
	draft: "bg-amber-500/15 text-amber-400",
	inactive: "bg-slate-700 text-slate-400"
};
function AdminFeeds() {
	const { user } = useAuth();
	const [feeds, setFeeds] = (0, import_react.useState)([]);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [query, setQuery] = (0, import_react.useState)("");
	const [statusFilter, setStatusFilter] = (0, import_react.useState)("all");
	const [typeFilter, setTypeFilter] = (0, import_react.useState)("all");
	const [message, setMessage] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const request = async (method, body) => {
		const { data: { session } } = await supabase.auth.getSession();
		if (!session) throw new Error("Your Admin session has expired. Please sign in again.");
		const response = await fetch("/api/admin/feeds", {
			method,
			headers: {
				Authorization: `Bearer ${session.access_token}`,
				"Content-Type": "application/json"
			},
			body: method === "GET" ? void 0 : JSON.stringify(body)
		});
		const result = await response.json();
		if (!response.ok) throw new Error(result.error || "Unable to complete request.");
		return result;
	};
	const loadFeeds = async () => {
		setLoading(true);
		try {
			const result = await request("GET");
			setFeeds(result.feeds || result.posts || []);
			setMessage("Feeds refreshed.");
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to load feeds.");
		} finally {
			setLoading(false);
		}
	};
	(0, import_react.useEffect)(() => {
		loadFeeds();
	}, []);
	const visibleFeeds = (0, import_react.useMemo)(() => feeds.filter((post) => {
		const matchesQuery = `${post.user_name || ""} ${post.content || ""}`.toLowerCase().includes(query.toLowerCase());
		const matchesStatus = statusFilter === "all" || post.status === statusFilter;
		const matchesType = typeFilter === "all" || post.type === typeFilter;
		return matchesQuery && matchesStatus && matchesType;
	}), [
		feeds,
		query,
		statusFilter,
		typeFilter
	]);
	const savePost = async (event) => {
		event.preventDefault();
		try {
			await request(form.id ? "PATCH" : "POST", { post: form });
			setForm(emptyForm);
			setMessage(form.id ? "Post updated." : "Post created.");
			await loadFeeds();
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to save post.");
		}
	};
	const removePost = async (post) => {
		if (!window.confirm(`Delete this post?`)) return;
		try {
			await request("DELETE", { id: post.id });
			setMessage("Post deleted.");
			await loadFeeds();
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to delete post.");
		}
	};
	const toggleStatus = async (post) => {
		try {
			const newStatus = post.status === "active" ? "inactive" : "active";
			await request("PATCH", { post: {
				...post,
				status: newStatus
			} });
			setMessage(post.status === "active" ? "Post unpublished." : "Post published.");
			await loadFeeds();
		} catch (error) {
			setMessage(error instanceof Error ? error.message : "Unable to update status.");
		}
	};
	const truncateContent = (content, max = 200) => {
		if (!content) return "";
		return content.length > max ? `${content.slice(0, max)}...` : content;
	};
	const formatDate = (dateStr) => {
		if (!dateStr) return "";
		try {
			return new Date(dateStr).toLocaleDateString(void 0, {
				year: "numeric",
				month: "short",
				day: "numeric"
			});
		} catch {
			return dateStr;
		}
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
							className: "text-slate-400 hover:text-white",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/admin/feeds",
							className: "font-semibold text-blue-400",
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
							children: "Communication"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 text-3xl font-semibold",
							children: "Live Feed — News & Events"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-slate-400",
							children: "Broadcast announcements, share news, and post community events to the Nexus feed."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mr-1 inline h-3.5 w-3.5" }), "Admin only"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: loadFeeds,
							disabled: loading,
							title: "Refresh feeds",
							className: "rounded-xl border border-slate-700 p-3 text-slate-300 hover:border-blue-500 disabled:opacity-50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: `h-4 w-4 ${loading ? "animate-spin" : ""}` })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 xl:grid-cols-[360px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: savePost,
						className: "h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold",
									children: form.id ? "Edit post" : "New post"
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Type", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: form.type,
												onChange: (event) => setForm({
													...form,
													type: event.target.value
												}),
												className: "flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "text",
														children: "Text"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "news",
														children: "News"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "event",
														children: "Event"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "announcement",
														children: "Announcement"
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `rounded-full px-2.5 py-1 text-xs font-medium capitalize whitespace-nowrap ${typeBadgeColors[form.type]}`,
												children: form.type
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Status", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: form.status,
											onChange: (event) => setForm({
												...form,
												status: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "active",
													children: "Active — Publish immediately"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "draft",
													children: "Draft"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "inactive",
													children: "Inactive"
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Author name", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: form.user_name,
											onChange: (event) => setForm({
												...form,
												user_name: event.target.value
											}),
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Avatar URL (optional)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											value: form.user_avatar_url,
											onChange: (event) => setForm({
												...form,
												user_avatar_url: event.target.value
											}),
											placeholder: "https://...",
											className: "mt-1 block w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-3 flex items-center gap-2 text-sm text-slate-300",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: form.is_admin_post,
											onChange: (event) => setForm({
												...form,
												is_admin_post: event.target.checked
											}),
											className: "rounded border-slate-600 bg-slate-950 text-blue-600 focus:ring-blue-500"
										}), "Mark as official Nexus post (Nexus Badge)"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm text-slate-300",
										children: ["Content", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											rows: 6,
											value: form.content,
											onChange: (event) => setForm({
												...form,
												content: event.target.value
											}),
											placeholder: "Write your announcement, news, or event details...",
											className: "mt-1 block w-full resize-y rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-white outline-none placeholder:text-slate-600 focus:border-blue-500"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500",
								children: [form.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), form.id ? "Save changes" : "Publish post"]
							}),
							message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-slate-400",
								children: message
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-xl font-semibold",
							children: ["All posts ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-sm font-normal text-slate-500",
								children: [visibleFeeds.length, " shown"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center rounded-xl border border-slate-800 bg-slate-900 px-3 text-slate-400",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: query,
										onChange: (event) => setQuery(event.target.value),
										placeholder: "Search posts",
										className: "w-36 bg-transparent px-2 py-2 text-sm text-white outline-none"
									})]
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
											value: "draft",
											children: "Draft"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "inactive",
											children: "Inactive"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: typeFilter,
									onChange: (event) => setTypeFilter(event.target.value),
									className: "rounded-xl border border-slate-800 bg-slate-900 px-3 text-sm text-slate-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "all",
											children: "All types"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "text",
											children: "Text"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "news",
											children: "News"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "event",
											children: "Event"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "announcement",
											children: "Announcement"
										})
									]
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [visibleFeeds.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-slate-800 bg-slate-900 p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-semibold",
													children: post.user_name || "Anonymous"
												}),
												post.is_admin_post && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary-foreground",
													children: "Nexus Badge"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize ${typeBadgeColors[post.type] || typeBadgeColors.text}`,
													children: post.type || "text"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `rounded-full px-2.5 py-0.5 text-[11px] font-medium capitalize ${statusBadgeColors[post.status] || statusBadgeColors.inactive}`,
													children: post.status || "inactive"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-slate-300",
											children: truncateContent(post.content)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3.5 w-3.5" }), post.likes_count ?? post.likes ?? 0]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "inline-flex items-center gap-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }), post.comments_count ?? post.comments ?? 0]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDate(post.created_at) })
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setForm({
												...emptyForm,
												...post
											}),
											title: "Edit post",
											className: "rounded-lg border border-slate-700 p-2 text-slate-300 hover:border-blue-500",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => toggleStatus(post),
											title: post.status === "active" ? "Unpublish" : "Publish",
											className: `rounded-lg border px-3 py-2 text-xs font-medium ${post.status === "active" ? "border-amber-700 text-amber-300 hover:bg-amber-950" : "border-emerald-700 text-emerald-300 hover:bg-emerald-950"}`,
											children: post.status === "active" ? "Unpublish" : "Publish"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => removePost(post),
											title: "Delete post",
											className: "rounded-lg border border-rose-900 p-2 text-rose-300 hover:bg-rose-950",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})
									]
								})]
							})
						}, post.id)), !visibleFeeds.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-400",
							children: "No posts match the current filters."
						})]
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
var SplitComponent = AdminFeeds;
//#endregion
export { SplitComponent as component };
