import { r as __toESM } from "../_runtime.mjs";
import { L as require_react, T as ForwardRef$3, k as ForwardRef$2, u as ForwardRef, x as ForwardRef$1 } from "../_libs/heroicons__react+react.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as useNavigate$1, r as useLocation$1 } from "./router-compat-NKRH5b0P.mjs";
import { t as Avatar } from "./Avatar-DbRwqPd6.mjs";
import { a as getMyPublicKey, c as isE2EEEnabled, i as generateSecurityCode, l as setE2EEEnabled, s as initializeE2EE, t as WALLPAPERS, u as useSetting } from "./e2ee-DbFyp_Pm.mjs";
import { A as Copy, M as Check, N as Camera, P as ArrowLeft, j as ChevronRight, l as Save, w as Image } from "../_libs/lucide-react.mjs";
import { r as useAuth } from "./AuthContext-Ct0yscfA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SettingsPage-CVJfsFP8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SettingsShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-4",
		children
	});
}
function SettingsRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gray-900 dark:text-white",
			children: label
		}), children]
	});
}
function AppearanceSettings() {
	const [chatWallpaper, setChatWallpaper] = useSetting("chatWallpaper", "default");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "w-5 h-5 text-gray-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold text-gray-900 dark:text-white",
					children: "Change Chat Wallpaper"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-gray-500 dark:text-gray-400 mb-4",
				children: "Choose from open-source wallpapers. All patterns are CC0 licensed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
				children: WALLPAPERS.map((wallpaper) => {
					const isSelected = chatWallpaper === wallpaper.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setChatWallpaper(wallpaper.id),
						className: `relative rounded-xl overflow-hidden border-2 transition-all aspect-square ${isSelected ? "border-blue-600 ring-2 ring-blue-200 dark:ring-blue-800" : "border-gray-200 dark:border-gray-700 hover:border-gray-300"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full h-full",
								style: wallpaper.url ? {
									backgroundImage: `url(${wallpaper.url})`,
									backgroundSize: "cover",
									backgroundPosition: "center"
								} : { background: wallpaper.preview }
							}),
							isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-2 right-2 bg-blue-600 rounded-full p-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3 h-3 text-white" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute bottom-0 left-0 right-0 bg-black/50 px-2 py-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white truncate",
									children: wallpaper.name
								})
							})
						]
					}, wallpaper.id);
				})
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsRow, {
			label: "Selected Wallpaper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-gray-500 dark:text-gray-400",
				children: WALLPAPERS.find((w) => w.id === chatWallpaper)?.name || "Default"
			})
		})]
	});
}
function PrivacySettings() {
	const [e2eeEnabled, setE2ee] = (0, import_react.useState)(isE2EEEnabled());
	const [publicKey, setPublicKey] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const { user } = useAuth();
	const [securityCode] = (0, import_react.useState)(() => generateSecurityCode(user?.nexusId || user?.id || "account"));
	(0, import_react.useEffect)(() => {
		initializeE2EE().then(() => getMyPublicKey()).then(setPublicKey);
	}, []);
	const handleToggleE2EE = (enabled) => {
		setE2EEEnabled(enabled);
		setE2ee(enabled);
	};
	const copyPublicKey = () => {
		navigator.clipboard.writeText(publicKey);
		setCopied(true);
		setTimeout(() => setCopied(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-semibold text-foreground",
					children: "End-to-End Encryption"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Messages are encrypted on your device using AES-256-GCM before being sent. Only you and the recipient can read them."
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsRow, {
				label: "Enable E2EE",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => handleToggleE2EE(!e2eeEnabled),
					className: `relative w-12 h-6 rounded-full transition-colors ${e2eeEnabled ? "bg-green-500" : "bg-muted"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${e2eeEnabled ? "translate-x-6" : "translate-x-0.5"}` })
				})
			}),
			e2eeEnabled && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 bg-muted/40 rounded-xl border border-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 mb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm font-medium text-foreground",
						children: "Your Public Key"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
						className: "flex-1 text-xs text-muted-foreground break-all font-mono bg-muted p-2 rounded",
						children: publicKey ? `${publicKey.slice(0, 32)}...` : "Generating..."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: copyPublicKey,
						className: "p-2 hover:bg-muted rounded-lg transition-colors",
						children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "w-4 h-4 text-green-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "w-4 h-4 text-muted-foreground" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 bg-muted/40 rounded-xl border border-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-foreground mb-1",
						children: "Security Code"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-mono tracking-widest text-foreground",
						children: securityCode
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-2",
						children: "Compare this code with your contact to verify encryption."
					})
				]
			})] })
		]
	});
}
function ProfileEdit() {
	const { user, updateProfile } = useAuth();
	const [firstName, setFirstName] = (0, import_react.useState)(user?.firstName || "");
	const [lastName, setLastName] = (0, import_react.useState)(user?.lastName || "");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [avatarPreview, setAvatarPreview] = (0, import_react.useState)(user?.avatarUrl || null);
	const fileInputRef = (0, import_react.useRef)(null);
	const nexusId = user?.nexusIdDisplay || user?.nexusId || user?.memberId || "10-XXXX-XXXX";
	(0, import_react.useEffect)(() => {
		if (user) {
			setFirstName(user.firstName || "");
			setLastName(user.lastName || "");
			setAvatarPreview(user.avatarUrl || null);
		}
	}, [user]);
	const handleAvatarClick = () => {
		fileInputRef.current?.click();
	};
	const handleFileChange = (e) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				const base64Url = event.target?.result;
				if (typeof base64Url === "string") setAvatarPreview(base64Url);
			};
			reader.readAsDataURL(file);
		}
	};
	const handleCopyNexusId = async () => {
		if (nexusId === "10-XXXX-XXXX") return;
		try {
			await navigator.clipboard.writeText(nexusId);
			setCopied(true);
			setTimeout(() => setCopied(false), 2e3);
		} catch {
			setCopied(false);
		}
	};
	const handleSave = async (e) => {
		e.preventDefault();
		const updates = {
			firstName,
			lastName,
			fullName: `${firstName} ${lastName}`.trim()
		};
		if (avatarPreview && avatarPreview !== user?.avatarUrl) updates.avatarUrl = avatarPreview;
		await updateProfile(updates);
		setSaved(true);
		setTimeout(() => setSaved(false), 2e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 max-w-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: handleAvatarClick,
						className: "relative group cursor-pointer rounded-full overflow-hidden hover:opacity-90 transition duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							src: avatarPreview || user?.avatarUrl,
							alt: user?.fullName || "User",
							size: "2xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 bg-black/45 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-8 h-8 text-white animate-pulse" })
						})]
					}),
					avatarPreview && avatarPreview !== user?.avatarUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white rounded-full shadow-sm animate-pulse",
						children: "Unsaved Preview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleAvatarClick,
						className: "text-xs font-semibold text-primary hover:underline",
						children: "Change Profile Photo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "file",
						ref: fileInputRef,
						onChange: handleFileChange,
						accept: "image/*",
						className: "hidden"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
						children: "Your Nexus ID (Unique Member ID)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 bg-muted/50 p-3 rounded-xl border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-mono font-medium tracking-wide flex-1",
							children: nexusId
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: handleCopyNexusId,
							className: `p-2 rounded-lg transition duration-200 ${copied ? "bg-green-500 text-white" : "bg-secondary text-secondary-foreground hover:bg-muted"}`,
							title: "Copy Nexus ID",
							children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-4 h-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: "Provide this secure Nexus number to contacts so they can add and message you end-to-end encrypted."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSave,
				className: "space-y-4 pt-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
							children: "First Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: firstName,
							onChange: (e) => setFirstName(e.target.value),
							className: "w-full bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition",
							required: true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider",
							children: "Last Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: lastName,
							onChange: (e) => setLastName(e.target.value),
							className: "w-full bg-card border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition",
							required: true
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:opacity-90 active:scale-[0.99] transition duration-200",
					children: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4" }), "Saved!"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-4 h-4" }), "Save Changes"] })
				})]
			})
		]
	});
}
function SettingsMenu() {
	const navigate = useNavigate$1();
	const { user, switchAccount } = useAuth();
	const [logoutError, setLogoutError] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold text-foreground mb-6",
			children: "Settings"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => navigate("/app/settings/profile"),
			className: "w-full flex items-center gap-4 p-4 bg-muted/40 hover:bg-muted/75 rounded-2xl border border-border mb-6 transition duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					src: user?.avatarUrl,
					alt: user?.fullName || "User",
					size: "lg"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-foreground text-lg leading-tight",
						children: user?.fullName || "Anonymous User"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: ["Nexus ID: ", user?.nexusIdDisplay || "10-XXXX-XXXX"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-muted-foreground" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => navigate("/app/support"),
					className: "w-full flex items-center justify-between py-4 border-b border-border hover:bg-muted transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground font-medium",
							children: "Contact Support"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Chat directly with the Nexus team"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-muted-foreground" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => navigate("/app/settings/appearance"),
					className: "w-full flex items-center justify-between py-4 border-b border-border hover:bg-muted transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground font-medium",
							children: "Change Chat Wallpaper"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Pick an open-source wallpaper for your chat view"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-muted-foreground" })]
				}),
				[{
					id: "appearance",
					label: "Appearance",
					description: "Wallpaper, theme"
				}, {
					id: "privacy",
					label: "Privacy & Security",
					description: "Encryption, security code"
				}].map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => navigate(`/app/settings/${section.id}`),
					className: "w-full flex items-center justify-between py-4 border-b border-border hover:bg-muted transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground font-medium",
							children: section.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: section.description
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-5 h-5 text-muted-foreground" })]
				}, section.id)),
				logoutError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm text-red-500",
					children: logoutError
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: async () => {
						setLogoutError("");
						try {
							await switchAccount();
							navigate("/login", { replace: true });
						} catch {
							setLogoutError("Unable to switch accounts. Please try again.");
						}
					},
					className: "mt-5 w-full rounded-xl border border-red-200 px-4 py-3 text-left font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-950/20",
					children: "Switch account"
				})
			]
		})
	] });
}
function SettingsSubPage({ title, children }) {
	const navigate = useNavigate$1();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SettingsShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => navigate("/app/settings"),
			className: "flex items-center gap-2 text-primary mb-4 hover:underline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "w-4 h-4" }), "Back to Settings"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-2xl font-bold text-foreground mb-6",
			children: title
		}),
		children
	] });
}
function SettingsPage() {
	const subPath = useLocation$1().pathname.split("/app/settings/")[1];
	if (subPath === "profile") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 overflow-y-auto bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubPage, {
			title: "Profile",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileEdit, {})
		})
	});
	if (subPath === "appearance") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 overflow-y-auto bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubPage, {
			title: "Appearance",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearanceSettings, {})
		})
	});
	if (subPath === "privacy") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 overflow-y-auto bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsSubPage, {
			title: "Privacy & Security",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacySettings, {})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 overflow-y-auto bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SettingsMenu, {})
	});
}
//#endregion
export { SettingsPage as t };
