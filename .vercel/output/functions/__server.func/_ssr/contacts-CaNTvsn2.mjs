import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, a as ForwardRef, f as ForwardRef$1, j as ForwardRef$2, n as ForwardRef$4, o as ForwardRef$3 } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1 } from "./router-compat-NKRH5b0P.mjs";
import { t as Avatar } from "./Avatar-DbRwqPd6.mjs";
import { i as parseNexusId, t as formatNexusId } from "./nexusId-CU7anTOa.mjs";
import { a as deleteContact, c as getChats, i as createChat, l as getContacts, o as findMemberByNexusId, t as addContact } from "./persistence-DsYk-QoD.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacts-CaNTvsn2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactsPanel() {
	const navigate = useNavigate$1();
	const { user } = useAuth();
	const [contacts, setContacts] = (0, import_react.useState)([]);
	const [showAddModal, setShowAddModal] = (0, import_react.useState)(false);
	const [newContactNexusId, setNewContactNexusId] = (0, import_react.useState)("");
	const [lookupResult, setLookupResult] = (0, import_react.useState)({
		status: "partial_match",
		member: null
	});
	const [lookupLoading, setLookupLoading] = (0, import_react.useState)(false);
	const parsedNexusId = parseNexusId(newContactNexusId);
	const formatNexusInput = (value) => {
		const parsed = parseNexusId(value);
		if (parsed.status === "invalid") return value.slice(0, 20);
		return formatNexusId(parsed.value || value);
	};
	(0, import_react.useEffect)(() => {
		setLookupResult({
			status: parsedNexusId.status,
			member: null,
			nexusId: parsedNexusId.value
		});
		if (parsedNexusId.status !== "exact_match") {
			setLookupLoading(false);
			return;
		}
		let active = true;
		setLookupLoading(true);
		findMemberByNexusId(newContactNexusId, user).then((result) => {
			if (active) setLookupResult(result);
		}).finally(() => {
			if (active) setLookupLoading(false);
		});
		return () => {
			active = false;
		};
	}, [newContactNexusId, user]);
	(0, import_react.useEffect)(() => {
		const loadContacts = async () => {
			const data = await getContacts(user?.id || user?.nexusId);
			setContacts(data);
		};
		loadContacts();
		const handleUpdate = () => loadContacts();
		window.addEventListener("nexus-contacts:updated", handleUpdate);
		return () => window.removeEventListener("nexus-contacts:updated", handleUpdate);
	}, [user?.id, user?.nexusId]);
	const handleStartChat = async (contact) => {
		const existing = (await getChats()).find((c) => c.title === contact.name);
		if (existing) navigate(`/app/chat/${existing.id}`);
		else {
			const newChat = await createChat({
				title: contact.name,
				type: "private",
				avatar_url: contact.avatarUrl || null
			});
			navigate(`/app/chat/${newChat.id}`);
		}
	};
	const handleAddContact = async (e) => {
		e.preventDefault();
		const matchedMember = lookupResult.member;
		if (lookupResult.status !== "exact_match" || !matchedMember) return;
		const contactData = {
			name: matchedMember.full_name || `${matchedMember.first_name || ""} ${matchedMember.last_name || ""}`.trim(),
			nexusId: formatNexusId(lookupResult.nexusId),
			avatarUrl: matchedMember.avatar_url || matchedMember.avatarUrl || null
		};
		await addContact(user?.id || user?.nexusId, contactData);
		const chat = (await getChats()).find((item) => item.type === "private" && item.title === contactData.name) || await createChat({
			title: contactData.name,
			type: "private",
			avatar_url: contactData.avatarUrl
		});
		setNewContactNexusId("");
		setLookupResult({
			status: "partial_match",
			member: null
		});
		setShowAddModal(false);
		navigate(`/app/chat/${chat.id}`);
	};
	const handleDeleteContact = async (contactId) => {
		if (confirm("Are you sure you want to delete this contact?")) await deleteContact(user?.id || user?.nexusId, contactId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col bg-background h-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6 border-b border-border bg-card shadow-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-2xl font-bold text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-7 h-7 text-primary" }), "Contacts"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Your existing secure contacts on Nexus Network"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowAddModal(true),
						className: "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "w-4 h-4" }), "Add Contact"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto p-6 max-w-4xl w-full mx-auto",
				children: contacts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-8 h-8 text-muted-foreground" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground font-medium text-center",
							children: "No contacts yet"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground mt-1 text-center",
							children: "Add contacts to start messaging"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
								src: contact.avatarUrl,
								alt: contact.name,
								size: "md"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-foreground leading-tight",
								children: contact.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: ["ID: ", contact.nexusId]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => handleStartChat(contact),
								className: "flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition duration-200",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "w-4 h-4" }), "Chat"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleDeleteContact(contact.id),
								className: "p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition duration-200",
								title: "Delete Contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "w-4 h-4" })
							})]
						})]
					}, contact.id))
				})
			}),
			showAddModal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 cursor-default",
					onClick: () => setShowAddModal(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative bg-card w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-border z-10 animate-in fade-in zoom-in-95 duration-200",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 border-b border-border flex items-center justify-between bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-foreground text-lg",
							children: "Add New Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setShowAddModal(false),
							className: "p-2 hover:bg-muted rounded-full transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "w-5 h-5 text-muted-foreground" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleAddContact,
						className: "p-6 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-sm font-medium text-foreground mb-1",
									children: "Nexus ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									value: newContactNexusId,
									onChange: (e) => setNewContactNexusId(formatNexusInput(e.target.value)),
									inputMode: "numeric",
									pattern: "10-[0-9]{4}-[0-9]{4}",
									maxLength: 12,
									placeholder: "1012345678",
									className: "w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: "Enter the 10-digit Nexus ID. The member name is detected automatically."
								})
							] }),
							lookupLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Looking up member..."
							}),
							!lookupLoading && parsedNexusId.status === "invalid" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-500",
								children: "Enter a valid 10-digit Nexus ID."
							}),
							!lookupLoading && parsedNexusId.status === "partial_match" && parsedNexusId.value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted-foreground",
								children: [
									"Enter ",
									10 - parsedNexusId.value.length,
									" more digits."
								]
							}),
							!lookupLoading && lookupResult.status === "self_match" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-amber-600",
								children: "You cannot add your own Nexus ID."
							}),
							!lookupLoading && lookupResult.status === "inactive" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-500",
								children: "This member account is inactive."
							}),
							!lookupLoading && lookupResult.status === "not_found" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-red-500",
								children: "No member found for this Nexus ID."
							}),
							!lookupLoading && lookupResult.status === "exact_match" && lookupResult.member && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 rounded-lg bg-emerald-500/10 px-3 py-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									src: lookupResult.member.avatar_url || lookupResult.member.avatarUrl,
									alt: lookupResult.member.full_name || "Member",
									size: "sm"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm text-emerald-700",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: lookupResult.member.full_name || `${lookupResult.member.first_name || ""} ${lookupResult.member.last_name || ""}`.trim()
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [formatNexusId(lookupResult.nexusId), " · Confirmed member"] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setShowAddModal(false),
									className: "flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition duration-200",
									children: "Cancel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: lookupResult.status !== "exact_match" || !lookupResult.member || lookupLoading,
									className: "flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition duration-200",
									children: "Add Contact"
								})]
							})
						]
					})]
				})]
			})
		]
	});
}
var SplitComponent = ContactsPanel;
//#endregion
export { SplitComponent as component };
