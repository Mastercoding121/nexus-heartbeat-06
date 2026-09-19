import { i as __toESM } from "../_runtime.mjs";
import { A as ForwardRef$30, C as ForwardRef$17, D as ForwardRef$6, E as ForwardRef$5, F as ForwardRef$20, I as ForwardRef$8, L as require_react, M as ForwardRef$11, N as ForwardRef$15, O as ForwardRef$14, P as ForwardRef$7, S as ForwardRef$28, T as ForwardRef$35, _ as ForwardRef$4, a as ForwardRef$13, b as ForwardRef$32, c as ForwardRef$16, d as ForwardRef$31, f as ForwardRef$24, g as ForwardRef$1, h as ForwardRef$19, i as ForwardRef$12, j as ForwardRef$25, k as ForwardRef$33, l as ForwardRef$2, m as ForwardRef$18, n as ForwardRef$27, o as ForwardRef$26, p as ForwardRef$22, r as ForwardRef$9, s as ForwardRef, t as ForwardRef$29, u as ForwardRef$3, v as ForwardRef$10, w as ForwardRef$23, x as ForwardRef$34, y as ForwardRef$21 } from "../_libs/heroicons__react+react.mjs";
import { _ as useNavigate$1, c as HeadContent, d as createRouter, f as Outlet, g as Link$1, h as createRootRouteWithContext, j as redirect, l as useLocation$1, m as createFileRoute, s as Scripts, v as useParams$1, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { A as Copy, C as LoaderCircle, D as FileText, E as Film, F as Apple, M as Check, N as Camera, O as Download, P as ArrowLeft, S as Lock, T as Heart, _ as Minus, a as UserRoundCheck, b as MessageCircle, c as Search, d as Plus, f as Play, g as Music, h as Pencil, i as UserRoundX, j as ChevronRight, k as Database, l as Save, m as PhoneOff, n as Wallet, o as Trash2, p as Phone, r as UserRound, s as ShieldCheck, t as X, u as RefreshCw, v as Mic, w as Image, x as LogOut, y as MicOff } from "../_libs/lucide-react.mjs";
import { t as format } from "../_libs/date-fns.mjs";
import { n as Nt, r as Qt, t as $t } from "../_libs/input-otp.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region src/styles.css?url
var styles_default = "/assets/styles-D6_l5fdr.css";
//#endregion
//#region src/lib/supabase.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
/**
* Browser Supabase client for the external (self-managed) Supabase project.
* Configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or
* VITE_SUPABASE_PUBLISHABLE_KEY) for the app to talk to your database.
*/
var DEFAULT_SUPABASE_URL = "https://ozmakhxeotvqvuaytnic.supabase.co";
var DEFAULT_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_teYLzCRnc1adcwBcv8XdIQ_Xf80ZGt6";
var supabaseUrl = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_URL": "https://cmfwgghuybmogugstaud.supabase.co"
}["VITE_SUPABASE_URL"] || {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_URL": "https://cmfwgghuybmogugstaud.supabase.co"
}["NEXT_PUBLIC_SUPABASE_URL"] || DEFAULT_SUPABASE_URL;
var supabaseAnonKey = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_URL": "https://cmfwgghuybmogugstaud.supabase.co"
}["VITE_SUPABASE_ANON_KEY"] || {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_URL": "https://cmfwgghuybmogugstaud.supabase.co"
}["VITE_SUPABASE_PUBLISHABLE_KEY"] || {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_URL": "https://cmfwgghuybmogugstaud.supabase.co"
}["NEXT_PUBLIC_SUPABASE_ANON_KEY"] || {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_nALD_hyVGE9WbOufsV8_Gg_AAi0FT4a",
	"VITE_SUPABASE_URL": "https://cmfwgghuybmogugstaud.supabase.co"
}["NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"] || DEFAULT_SUPABASE_PUBLISHABLE_KEY;
var supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey, { auth: {
	persistSession: true,
	autoRefreshToken: true
} }) : null;
function isSupabaseConfigured() {
	return Boolean(supabaseUrl && supabaseAnonKey);
}
//#endregion
//#region src/utils/nexusId.js
var NEXUS_ID_PATTERN = /^10\d{8}$/;
function stripPrefix(value) {
	return String(value || "").trim().replace(/^#\s*/, "").replace(/^NEXUS(?:\s*[-:]?\s*)/i, "");
}
function parseNexusId(value) {
	const source = stripPrefix(value);
	if (!source) return {
		status: "partial_match",
		value: "",
		displayValue: ""
	};
	if (!/^[0-9\s-]+$/.test(source)) return {
		status: "invalid",
		value: "",
		displayValue: source
	};
	const digits = source.replace(/[\s-]/g, "").replace(/^0+(?=\d)/, "");
	if (digits.length < 10) return {
		status: "partial_match",
		value: digits,
		displayValue: formatNexusId(digits)
	};
	if (!NEXUS_ID_PATTERN.test(digits)) return {
		status: "invalid",
		value: digits,
		displayValue: formatNexusId(digits)
	};
	return {
		status: "exact_match",
		value: digits,
		displayValue: formatNexusId(digits)
	};
}
function normalizeNexusId(value) {
	return cleanNexusId(value);
}
function cleanNexusId(input) {
	const parsed = parseNexusId(input);
	return parsed.status === "exact_match" ? parsed.value : null;
}
function getMemberNexusId(member) {
	return normalizeNexusId(member?.nexus_id || member?.member_id || member?.nexusId || member?.memberId);
}
function formatNexusId(value) {
	const digits = String(value || "").replace(/\D/g, "").slice(0, 10);
	if (digits.length <= 2) return digits;
	if (digits.length <= 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
	return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
}
//#endregion
//#region src/lib/AuthContext.jsx
var import_jsx_runtime = require_jsx_runtime();
var AuthContext = (0, import_react.createContext)();
var SESSION_STORAGE_KEY = "nexus-chat-session";
var USER_STORAGE_KEY = "nexus-chat-users";
var PENDING_REG_KEY = "nexus-chat-pending-reg";
var VOLATILE_SESSION_KEYS = [
	SESSION_STORAGE_KEY,
	"nexus-chat-state-v1",
	"nexus_e2ee_keys",
	"nexus_e2ee_enabled"
];
function normalizeUser(user) {
	return {
		id: user.id,
		nexusId: user.nexus_id || user.nexusId || user.member_id || user.memberId,
		nexusIdDisplay: user.nexusIdDisplay || user.memberIdDisplay || formatNexusIdForDisplay(user.nexus_id || user.nexusId || user.member_id || user.memberId),
		firstName: user.first_name || user.firstName,
		lastName: user.last_name || user.lastName,
		fullName: user.full_name || user.fullName || `${user.first_name || user.firstName || ""} ${user.last_name || user.lastName || ""}`.trim(),
		email: user.email,
		emailVerified: user.email_verified || user.emailVerified || false,
		role: user.role || user.user_role || user.profile_role || "user",
		adminAuthenticated: Boolean(user.adminAuthenticated),
		avatarUrl: user.avatar_url || user.avatarUrl || null,
		createdAt: user.created_at || user.createdAt
	};
}
function getUserNexusId(user) {
	return String(user?.nexus_id || user?.nexusId || user?.member_id || user?.memberId || "").replace(/\D/g, "");
}
function generateNexusId$1(existingUsers) {
	const usedIds = new Set(existingUsers.map(getUserNexusId));
	let candidate = "";
	do
		candidate = `10${String(Math.floor(Math.random() * 1e8)).padStart(8, "0")}`;
	while (usedIds.has(candidate));
	return candidate;
}
function formatNexusIdForDisplay(raw) {
	const s = String(raw || "").replace(/\D/g, "");
	if (s.length >= 2) {
		let formatted = s.slice(0, 2);
		if (s.length >= 6) {
			formatted += "-" + s.slice(2, 6);
			if (s.length >= 10) formatted += "-" + s.slice(6, 10);
		}
		return formatted;
	}
	return s;
}
function readStoredUsers() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(USER_STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function writeStoredUsers(users) {
	if (typeof window === "undefined") return;
	localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
}
function readPendingReg(email) {
	if (typeof window === "undefined") return null;
	try {
		const raw = sessionStorage.getItem(PENDING_REG_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		if (email && parsed.email !== String(email).trim().toLowerCase()) return null;
		return parsed;
	} catch {
		return null;
	}
}
function writePendingReg(data) {
	if (typeof window === "undefined") return;
	sessionStorage.setItem(PENDING_REG_KEY, JSON.stringify(data));
}
function clearPendingReg() {
	if (typeof window === "undefined") return;
	sessionStorage.removeItem(PENDING_REG_KEY);
}
function getAuthErrorMessage(error, fallback = "Unable to sign in.") {
	if (error?.code === "email_not_confirmed") return "Please confirm your email address before signing in.";
	if (error?.code === "invalid_credentials" || error?.status === 400) return "Invalid email or password.";
	if (error?.code === "weak_password") return error?.message || "Please use a stronger password (at least 6 characters).";
	if (error?.code === "user_already_confirmed") return "This email has already been confirmed. Please sign in.";
	if (error?.code === "otp_expired") return "This verification code has expired. Please request a new one.";
	if (error?.code === "invalid_otp") return "The verification code is invalid. Please check and try again.";
	if (error?.code === "over_email_send_rate_limit") return "Too many emails sent recently. Please wait a moment and try again.";
	return error?.message || fallback;
}
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const checkAuth = async () => {
			try {
				const cachedSession = typeof window !== "undefined" ? localStorage.getItem(SESSION_STORAGE_KEY) : null;
				if (cachedSession) {
					if (JSON.parse(cachedSession).adminAuthenticated) localStorage.removeItem(SESSION_STORAGE_KEY);
				}
				if (isSupabaseConfigured() && supabase) {
					const { data: { session } } = await supabase.auth.getSession();
					if (session) try {
						const { data, error } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", session.user.id).maybeSingle();
						if (!error && data) setUser(normalizeUser({
							...data,
							email_verified: Boolean(session.user.email_confirmed_at)
						}));
						else {
							const cachedSession = typeof window !== "undefined" ? localStorage.getItem(SESSION_STORAGE_KEY) : null;
							if (cachedSession) setUser(normalizeUser(JSON.parse(cachedSession)));
						}
					} catch {
						const cachedSession = typeof window !== "undefined" ? localStorage.getItem(SESSION_STORAGE_KEY) : null;
						if (cachedSession) setUser(normalizeUser(JSON.parse(cachedSession)));
					}
				}
			} catch {
				const cachedSession = typeof window !== "undefined" ? localStorage.getItem(SESSION_STORAGE_KEY) : null;
				if (cachedSession) setUser(normalizeUser(JSON.parse(cachedSession)));
				else setUser(null);
			} finally {
				setLoading(false);
			}
		};
		checkAuth();
	}, []);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let intervalId = null;
		const PROBE_TABLES = [
			"members",
			"profiles",
			"chats",
			"messages",
			"feed_posts"
		];
		const DB_STATUS_KEY = "nexus-db-status-v1";
		const RECHECK_MS = 36e5;
		async function probeDatabase() {
			if (typeof window === "undefined") return;
			if (!isSupabaseConfigured() || !supabase) return;
			try {
				const { error } = await supabase.from("members").select("id").limit(1).maybeSingle();
				if (!error) {
					const status = {
						ok: true,
						tables: "reachable",
						checkedAt: Date.now()
					};
					try {
						localStorage.setItem(DB_STATUS_KEY, JSON.stringify(status));
					} catch {}
					return;
				}
				let allMissing = true;
				for (const table of PROBE_TABLES) try {
					const { error: tblErr } = await supabase.from(table).select("id").limit(1).maybeSingle();
					if (!tblErr || tblErr && tblErr.code && tblErr.code !== "42P01") {
						allMissing = false;
						break;
					}
				} catch {}
				const status = {
					ok: !allMissing,
					tablesMissing: allMissing,
					lastError: error?.message || null,
					checkedAt: Date.now()
				};
				try {
					localStorage.setItem(DB_STATUS_KEY, JSON.stringify(status));
				} catch {}
			} catch {
				const status = {
					ok: false,
					lastError: "network",
					checkedAt: Date.now()
				};
				try {
					localStorage.setItem(DB_STATUS_KEY, JSON.stringify(status));
				} catch {}
			}
		}
		function scheduleNext() {
			if (cancelled) return;
			try {
				const raw = localStorage.getItem(DB_STATUS_KEY);
				if (raw) {
					const parsed = JSON.parse(raw);
					const elapsed = Date.now() - (parsed.checkedAt || 0);
					if (elapsed < RECHECK_MS) {
						intervalId = setTimeout(runOnce, RECHECK_MS - elapsed);
						return;
					}
				}
			} catch {}
			runOnce();
		}
		function runOnce() {
			if (cancelled) return;
			probeDatabase().finally(() => {
				if (!cancelled) intervalId = setTimeout(runOnce, RECHECK_MS);
			});
		}
		scheduleNext();
		const onVisibility = () => {
			if (document.visibilityState === "visible") try {
				const raw = localStorage.getItem(DB_STATUS_KEY);
				if (raw) {
					const parsed = JSON.parse(raw);
					if (Date.now() - (parsed.checkedAt || 0) >= 9e5) runOnce();
				}
			} catch {}
		};
		if (typeof document !== "undefined") document.addEventListener("visibilitychange", onVisibility);
		return () => {
			cancelled = true;
			if (intervalId) clearTimeout(intervalId);
			if (typeof document !== "undefined") document.removeEventListener("visibilitychange", onVisibility);
		};
	}, []);
	const login = async (nexusId, password) => {
		const normalizedId = normalizeNexusId(nexusId);
		if (!normalizedId) throw new Error("Enter a valid 10-digit Nexus number.");
		if (isSupabaseConfigured() && supabase) try {
			const { data: memberEmail, error } = await supabase.rpc("find_member_email_by_nexus_id", { search_nexus_id: normalizedId });
			if (error) throw error;
			const email = memberEmail?.[0]?.email;
			if (!email) throw new Error("Nexus number not found. Please create an account first.");
			const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (authError) throw authError;
			const { data, error: memberError } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", authData.user.id).single();
			if (memberError) throw memberError;
			if (data.is_active === false) throw new Error("This Nexus account is inactive.");
			const sessionUser = normalizeUser({
				...data,
				email_verified: Boolean(authData.user.email_confirmed_at)
			});
			localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
			setUser(sessionUser);
			return {
				user: sessionUser,
				nexusId: sessionUser.nexusId
			};
		} catch (err) {
			throw new Error(getAuthErrorMessage(err, "Unable to sign in. Existing accounts must be migrated to Supabase Auth."));
		}
		const fallbackUser = readStoredUsers().find((candidate) => getUserNexusId(candidate) === normalizedId);
		if (!fallbackUser) throw new Error("Nexus number not found. Please create an account first.");
		if (fallbackUser.is_active === false || fallbackUser.isActive === false) throw new Error("This Nexus account is inactive.");
		if (String(password || "").trim() !== String(fallbackUser.password || "").trim()) throw new Error("Incorrect password for this Nexus number.");
		const sessionUser = normalizeUser(fallbackUser);
		localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
		setUser(sessionUser);
		return {
			user: sessionUser,
			nexusId: sessionUser.nexusId
		};
	};
	const adminLogin = async (email, password) => {
		const normalizedEmail = String(email || "").trim().toLowerCase();
		if (!isSupabaseConfigured() || !supabase) {
			const fallbackAdmin = readStoredUsers().find((c) => String(c.email || "").toLowerCase() === normalizedEmail && c.role === "admin");
			if (fallbackAdmin && String(fallbackAdmin.password || "") === String(password || "")) {
				if (fallbackAdmin.is_active === false || fallbackAdmin.isActive === false) throw new Error("This administrator account is inactive.");
				const adminUser = normalizeUser({
					...fallbackAdmin,
					adminAuthenticated: true
				});
				localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(adminUser));
				setUser(adminUser);
				return { user: adminUser };
			}
			throw new Error("Unable to sign in as administrator. Check your credentials and try again.");
		}
		if (!normalizedEmail || !password) throw new Error("Enter your administrator email and password.");
		const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
			email: normalizedEmail,
			password
		});
		if (authError) throw new Error(getAuthErrorMessage(authError, "Unable to sign in as administrator."));
		if (!authData?.user?.id) throw new Error("Supabase Auth returned no user session.");
		const { data: member, error: memberError } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", authData.user.id).single();
		if (memberError?.code === "PGRST116") throw new Error("Your Auth account is not linked to a member record.");
		if (memberError || member?.role !== "admin") throw new Error("This account is not authorized for administration.");
		if (member.is_active === false) throw new Error("This administrator account is inactive.");
		const adminUser = normalizeUser({
			...member,
			email_verified: Boolean(authData.user.email_confirmed_at),
			adminAuthenticated: true
		});
		localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(adminUser));
		setUser(adminUser);
		return { user: adminUser };
	};
	const switchAccount = async () => {
		if (supabase) await supabase.auth.signOut();
		if (typeof window !== "undefined") {
			VOLATILE_SESSION_KEYS.forEach((key) => localStorage.removeItem(key));
			window.dispatchEvent(new CustomEvent("nexus-auth:account-switched"));
		}
		setUser(null);
	};
	const register = async ({ firstName, lastName, email, password }) => {
		const normalizedFirstName = String(firstName || "").trim();
		const normalizedLastName = String(lastName || "").trim();
		const normalizedEmail = String(email || "").trim().toLowerCase();
		const storedUsers = readStoredUsers();
		const nexusId = generateNexusId$1(storedUsers);
		const generatedPassword = String(password || "").trim() || `${nexusId.slice(-4)}${Math.random().toString(36).slice(-4)}`;
		const fullName = [normalizedFirstName, normalizedLastName].filter(Boolean).join(" ").trim();
		const newUser = {
			id: `${Date.now()}`,
			member_id: nexusId,
			nexus_id: nexusId,
			nexusId,
			nexusIdDisplay: formatNexusIdForDisplay(nexusId),
			first_name: normalizedFirstName,
			firstName: normalizedFirstName,
			last_name: normalizedLastName,
			lastName: normalizedLastName,
			full_name: fullName,
			fullName,
			email: normalizedEmail,
			email_verified: false,
			emailVerified: false,
			role: "user",
			password: generatedPassword,
			avatar_url: null,
			avatarUrl: null,
			created_at: (/* @__PURE__ */ new Date()).toISOString(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (isSupabaseConfigured() && supabase) {
			const { data: authData, error: authError } = await supabase.auth.signUp({
				email: newUser.email,
				password: newUser.password,
				options: {
					data: {
						first_name: normalizedFirstName,
						last_name: normalizedLastName,
						full_name: fullName,
						nexus_id: nexusId
					},
					shouldCreateUser: true
				}
			});
			if (authError) throw new Error(getAuthErrorMessage(authError, "Unable to create your Supabase Auth account."));
			if (!authData.session) {
				writePendingReg({
					email: newUser.email,
					nexusId: newUser.nexus_id,
					firstName: newUser.first_name,
					lastName: newUser.last_name,
					fullName: newUser.full_name,
					password: newUser.password,
					createdAt: newUser.created_at,
					authUserId: authData.user?.id || null
				});
				return {
					user: newUser,
					nexusId,
					password: generatedPassword,
					requiresEmailConfirmation: true
				};
			}
			try {
				const { error: memberInsertErr } = await supabase.from("members").insert({
					member_id: newUser.member_id,
					nexus_id: newUser.nexus_id,
					first_name: newUser.first_name,
					last_name: newUser.last_name,
					full_name: newUser.full_name,
					email: newUser.email,
					password: null,
					auth_user_id: authData.user.id,
					role: newUser.role,
					avatar_url: newUser.avatar_url,
					created_at: newUser.created_at
				});
				if (memberInsertErr) throw memberInsertErr;
				const { data, error: memberError } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", authData.user.id).single();
				const sessionUser = normalizeUser(data || newUser);
				sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId);
				if (typeof window !== "undefined") localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
				setUser(sessionUser);
				return {
					user: sessionUser,
					nexusId,
					password: generatedPassword
				};
			} catch (insertErr) {
				const sessionUser = normalizeUser({
					...newUser,
					email_verified: Boolean(authData.user?.email_confirmed_at)
				});
				sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId);
				if (typeof window !== "undefined") localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
				setUser(sessionUser);
				return {
					user: sessionUser,
					nexusId,
					password: generatedPassword,
					warning: getAuthErrorMessage(insertErr, "Account created but profile sync failed.")
				};
			}
		}
		writeStoredUsers([newUser, ...storedUsers]);
		const sessionUser = normalizeUser(newUser);
		sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId);
		localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
		setUser(sessionUser);
		return {
			user: sessionUser,
			nexusId,
			password: generatedPassword
		};
	};
	const verifyEmail = async ({ email, token }) => {
		const normalizedEmail = String(email || "").trim().toLowerCase();
		const normalizedToken = String(token || "").trim();
		if (!normalizedEmail) throw new Error("Email is required for verification.");
		if (!normalizedToken || normalizedToken.length < 4 || normalizedToken.length > 6 || !/^\d+$/.test(normalizedToken)) throw new Error("Please enter the 4 or 6 digit verification code sent to your email.");
		if (!isSupabaseConfigured() || !supabase) {
			const pending = readPendingReg(normalizedEmail);
			if (pending) {
				const localCode = String(pending.verificationCode || pending.otp || "");
				if (localCode && localCode === normalizedToken) {
					const nexusId = pending.nexusId;
					const firstName = pending.firstName;
					const lastName = pending.lastName;
					const fullName = pending.fullName || [firstName, lastName].filter(Boolean).join(" ").trim();
					const createdAt = pending.createdAt || (/* @__PURE__ */ new Date()).toISOString();
					const rawUser = {
						id: `${Date.now()}`,
						member_id: nexusId,
						nexus_id: nexusId,
						first_name: firstName,
						last_name: lastName,
						full_name: fullName,
						email: normalizedEmail,
						role: "user",
						avatar_url: null,
						created_at: createdAt
					};
					const storedUsers = readStoredUsers();
					if (!storedUsers.find((c) => String(c.email || "").toLowerCase() === normalizedEmail)) writeStoredUsers([rawUser, ...storedUsers]);
					clearPendingReg();
					const sessionUser = normalizeUser({
						...rawUser,
						email_verified: true
					});
					sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId);
					if (typeof window !== "undefined") localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
					setUser(sessionUser);
					return {
						user: sessionUser,
						nexusId: sessionUser.nexusId,
						password: pending?.password || null
					};
				}
			}
			throw new Error("Email verification is currently unavailable. Please try again in a moment or check your code.");
		}
		const pending = readPendingReg(normalizedEmail);
		const { data, error: verifyError } = await supabase.auth.verifyOtp({
			email: normalizedEmail,
			token: normalizedToken,
			type: "signup"
		});
		if (verifyError) throw new Error(getAuthErrorMessage(verifyError, "Verification failed. Please check your code and try again."));
		if (!data?.user?.id) throw new Error("Supabase Auth returned no user after verification.");
		const regInfo = pending || {};
		const nexusId = regInfo.nexusId;
		const firstName = regInfo.firstName;
		const lastName = regInfo.lastName;
		const fullName = regInfo.fullName || [firstName, lastName].filter(Boolean).join(" ").trim();
		const createdAt = regInfo.createdAt || (/* @__PURE__ */ new Date()).toISOString();
		let memberRow = null;
		try {
			const { data: existing, error: findErr } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", data.user.id).maybeSingle();
			if (!findErr && existing) memberRow = existing;
			else if (nexusId && firstName && lastName) {
				const { data: nexusExisting, error: nexusFindErr } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("nexus_id", nexusId).maybeSingle();
				if (!nexusFindErr && nexusExisting) {
					const { error: linkErr } = await supabase.from("members").update({
						auth_user_id: data.user.id,
						email: normalizedEmail
					}).eq("id", nexusExisting.id);
					if (!linkErr) memberRow = {
						...nexusExisting,
						auth_user_id: data.user.id,
						email: normalizedEmail
					};
				}
				if (!memberRow) {
					const { error: insertErr } = await supabase.from("members").insert({
						member_id: nexusId,
						nexus_id: nexusId,
						first_name: firstName,
						last_name: lastName,
						full_name: fullName,
						email: normalizedEmail,
						password: null,
						auth_user_id: data.user.id,
						role: "user",
						avatar_url: null,
						created_at: createdAt
					});
					if (insertErr && /unique|duplicate|violates.*unique/i.test(String(insertErr.message || insertErr))) {
						const { data: retryData, error: retryErr } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", data.user.id).maybeSingle();
						if (!retryErr && retryData) memberRow = retryData;
					} else if (!insertErr) {
						const { data: created, error: fetchErr } = await supabase.from("members").select("id, member_id, nexus_id, first_name, last_name, full_name, email, role, avatar_url, is_active, created_at").eq("auth_user_id", data.user.id).maybeSingle();
						if (!fetchErr && created) memberRow = created;
					}
				}
			}
		} catch {
			memberRow = null;
		}
		clearPendingReg();
		const authUid = data?.user?.id || memberRow?.auth_user_id || null;
		if (authUid && supabase) {
			try {
				const profilePayload = {
					id: authUid,
					first_name: firstName || data.user.user_metadata?.first_name || null,
					last_name: lastName || data.user.user_metadata?.last_name || null,
					full_name: fullName || data.user.user_metadata?.full_name || null,
					email: normalizedEmail,
					avatar_url: null,
					status: "active",
					is_verified: true
				};
				await supabase.from("profiles").upsert(profilePayload, {
					onConflict: "id",
					ignoreDuplicates: false
				});
			} catch {}
			try {
				await supabase.from("user_roles").upsert({
					profile_id: authUid,
					role: "user"
				}, {
					onConflict: "profile_id,role",
					ignoreDuplicates: true
				});
			} catch {}
		}
		const sessionUser = normalizeUser({
			...memberRow || {
				id: authUid || data.user.id,
				auth_user_id: authUid || data.user.id,
				member_id: nexusId,
				nexus_id: nexusId,
				first_name: firstName || data.user.user_metadata?.first_name,
				last_name: lastName || data.user.user_metadata?.last_name,
				full_name: fullName || data.user.user_metadata?.full_name,
				email: normalizedEmail,
				role: "user",
				avatar_url: null,
				created_at: createdAt
			},
			email_verified: true
		});
		sessionUser.nexusIdDisplay = formatNexusIdForDisplay(sessionUser.nexusId);
		if (typeof window !== "undefined") localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionUser));
		setUser(sessionUser);
		return {
			user: sessionUser,
			nexusId: sessionUser.nexusId,
			password: pending?.password || null
		};
	};
	const resendVerificationEmail = async ({ email }) => {
		const normalizedEmail = String(email || "").trim().toLowerCase();
		if (!normalizedEmail) throw new Error("Please enter your email address.");
		if (!isSupabaseConfigured() || !supabase) throw new Error("Unable to resend the verification email right now. Please try again in a moment.");
		const { error } = await supabase.auth.resend({
			type: "signup",
			email: normalizedEmail
		});
		if (error) throw new Error(getAuthErrorMessage(error, "Unable to resend verification email. Please try again."));
		return true;
	};
	const forgotPassword = async ({ email }) => {
		const normalizedEmail = String(email || "").trim().toLowerCase();
		if (!normalizedEmail) throw new Error("Please enter your email address.");
		if (!isSupabaseConfigured() || !supabase) throw new Error("Password reset emails are temporarily unavailable. Please try again in a moment.");
		const redirectTo = typeof window !== "undefined" ? `${window.location.origin}/reset-password?email=${encodeURIComponent(normalizedEmail)}` : void 0;
		const { error } = await supabase.auth.resetPasswordForEmail(normalizedEmail, { ...redirectTo ? { redirectTo } : {} });
		if (error) throw new Error(getAuthErrorMessage(error, "Unable to send password reset email. Please try again."));
		return true;
	};
	const resetPasswordWithOtp = async ({ email, token, newPassword }) => {
		const normalizedEmail = String(email || "").trim().toLowerCase();
		const normalizedToken = String(token || "").trim();
		const password = String(newPassword || "").trim();
		if (!normalizedEmail) throw new Error("Email is required for password reset.");
		if (!normalizedToken || normalizedToken.length < 4 || normalizedToken.length > 6 || !/^\d+$/.test(normalizedToken)) throw new Error("Please enter the 4 or 6 digit reset code sent to your email.");
		if (!password || password.length < 6) throw new Error("Password must be at least 6 characters.");
		if (!isSupabaseConfigured() || !supabase) throw new Error("Password reset is temporarily unavailable. Please try again in a moment.");
		const { error: verifyError } = await supabase.auth.verifyOtp({
			email: normalizedEmail,
			token: normalizedToken,
			type: "recovery"
		});
		if (verifyError) throw new Error(getAuthErrorMessage(verifyError, "Invalid or expired reset code. Please try again."));
		const { error: updateError } = await supabase.auth.updateUser({ password });
		if (updateError) throw new Error(getAuthErrorMessage(updateError, "Unable to update your password. Please try again."));
		return true;
	};
	const updateProfile = async (updates) => {
		if (!user) return;
		const updatedUser = {
			...user,
			...updates
		};
		if (typeof window !== "undefined") localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(updatedUser));
		setUser(updatedUser);
		writeStoredUsers(readStoredUsers().map((candidate) => {
			if (getUserNexusId(candidate) === getUserNexusId(user)) return {
				...candidate,
				...updates
			};
			return candidate;
		}));
		if (isSupabaseConfigured() && supabase) try {
			const supabaseUpdates = {};
			if (updates.firstName !== void 0) supabaseUpdates.first_name = updates.firstName;
			if (updates.lastName !== void 0) supabaseUpdates.last_name = updates.lastName;
			if (updates.fullName !== void 0) supabaseUpdates.full_name = updates.fullName;
			if (updates.avatarUrl !== void 0) supabaseUpdates.avatar_url = updates.avatarUrl;
			const { error } = await supabase.from("members").update(supabaseUpdates).eq("member_id", user.nexusId);
			if (error) throw error;
		} catch (err) {
			console.error("Supabase profile update failed", err);
		}
	};
	const value = {
		user,
		loading,
		login,
		adminLogin,
		switchAccount,
		logout: switchAccount,
		register,
		verifyEmail,
		resendVerificationEmail,
		forgotPassword,
		resetPasswordWithOtp,
		updateProfile
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	return (0, import_react.useContext)(AuthContext);
}
//#endregion
//#region src/lib/router-compat.jsx
/**
* Thin compatibility layer so the original Nexus Chat pages/components can keep
* using the familiar router API while the app runs on TanStack Router.
*/
function useNavigate() {
	const navigate = useNavigate$1();
	return (0, import_react.useCallback)((to, options = {}) => {
		if (typeof to === "number") {
			if (typeof window !== "undefined") window.history.go(to);
			return;
		}
		navigate({
			to,
			replace: Boolean(options.replace),
			...options.state ? { state: options.state } : {}
		});
	}, [navigate]);
}
function Link({ to, replace, state, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
		to,
		replace,
		state,
		...rest,
		children
	});
}
function Navigate({ to, replace = false }) {
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		navigate(to, { replace });
	}, [to, replace]);
	return null;
}
function useLocation() {
	const location = useLocation$1();
	return {
		pathname: location.pathname,
		search: location.searchStr ?? "",
		hash: location.hash ?? "",
		state: location.state ?? {},
		key: location.href
	};
}
function useParams() {
	return useParams$1({ strict: false });
}
//#endregion
//#region src/components/ScrollToTop.jsx
function ScrollToTop() {
	const { pathname } = useLocation();
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
}
//#endregion
//#region src/routes/__root.tsx
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
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
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
//#endregion
//#region src/hooks/useTheme.js
var THEME_STORAGE_KEY = "nexus-theme";
function useTheme() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const resolvedTheme = (typeof window !== "undefined" ? localStorage.getItem(THEME_STORAGE_KEY) : null) || "light";
		setTheme(resolvedTheme);
		applyTheme(resolvedTheme);
		const handleStorageChange = (e) => {
			if (e.key === THEME_STORAGE_KEY && e.newValue) {
				setTheme(e.newValue);
				applyTheme(e.newValue);
			}
		};
		window.addEventListener("storage", handleStorageChange);
		return () => window.removeEventListener("storage", handleStorageChange);
	}, []);
	const applyTheme = (themeToApply) => {
		if (typeof window !== "undefined") {
			document.documentElement.classList.toggle("dark", themeToApply === "dark");
			document.documentElement.style.colorScheme = themeToApply;
		}
	};
	const toggleTheme = () => {
		const nextTheme = theme === "dark" ? "light" : "dark";
		setTheme(nextTheme);
		if (typeof window !== "undefined") {
			localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
			applyTheme(nextTheme);
			window.dispatchEvent(new StorageEvent("storage", {
				key: THEME_STORAGE_KEY,
				newValue: nextTheme
			}));
		}
	};
	return {
		theme,
		toggleTheme
	};
}
//#endregion
//#region src/components/chat/Avatar.jsx
function Avatar({ src, alt, size = "md" }) {
	const sizeClasses = {
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-12 h-12",
		xl: "w-20 h-20",
		"2xl": "w-28 h-28"
	};
	const getInitials = (name) => {
		return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${sizeClasses[size]} rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold`,
		children: src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "w-full h-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: size === "2xl" ? "text-2xl" : size === "xl" ? "text-lg" : "text-sm",
			children: getInitials(alt || "User")
		})
	});
}
//#endregion
//#region src/components/Header.jsx
function randomChoice(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function Header({ showSignIn = true }) {
	const { theme, toggleTheme } = useTheme();
	const { user, switchAccount } = useAuth();
	const [logoStyle, setLogoStyle] = (0, import_react.useState)("brand-float");
	(0, import_react.useEffect)(() => {
		setLogoStyle(randomChoice([
			"brand-float",
			"brand-spin",
			"brand-wiggle",
			"brand-pulse"
		]));
	}, []);
	const isNative = typeof window !== "undefined" && window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-3 border-b border-border bg-card/80 text-foreground shadow-[0_18px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl px-4 py-4 transition-all sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-w-0 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "brand-badge flex h-13 w-13 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-600 p-1 shadow-[0_18px_45px_rgba(59,130,246,0.30)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950/90 shadow-[inset_0_1px_15px_rgba(255,255,255,0.18)] ${logoStyle}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo.png",
						alt: "Nexus logo",
						className: "h-8 w-8 rounded-lg object-contain"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground",
					children: "Nexus"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-sm font-semibold sm:text-base",
					children: "Privacy-first encrypted messaging"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-end gap-2 sm:gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggleTheme,
				className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground hover:bg-muted/80 transition animate-in fade-in duration-200",
				"aria-label": "Toggle theme",
				children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "h-4 w-4" })
			}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: user.role === "admin" ? "/admin/dashboard" : "/app/settings/profile",
					className: "flex items-center gap-2 transition duration-200 hover:opacity-85 active:scale-95",
					title: "View Profile Settings",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
						src: user.avatarUrl,
						alt: user.fullName || "User",
						size: "sm"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => switchAccount(),
					className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-foreground transition hover:bg-muted/80",
					"aria-label": "Switch account",
					title: "Switch account",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
				})]
			}) : !isNative && showSignIn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/login",
				className: "rounded-full bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition sm:px-4",
				children: "Sign in"
			})]
		})]
	});
}
//#endregion
//#region src/pages/AuthLanding.jsx
var features = [
	{
		title: "Instant conversations",
		description: "Fast, lightweight chats that feel fluid on desktop and mobile alike.",
		icon: ForwardRef$2
	},
	{
		title: "Protected by design",
		description: "Encrypted rooms, secure sign-in, and protected media sharing for everyday use.",
		icon: ForwardRef$3
	},
	{
		title: "Voice and video ready",
		description: "Crystal-clear voice calls and a modern interface built for nonstop communication.",
		icon: ForwardRef$4
	}
];
var platforms = [
	{
		label: "Android",
		icon: ForwardRef$5
	},
	{
		label: "iOS/iPad",
		icon: Apple
	},
	{
		label: "Windows/Tablet",
		icon: ForwardRef$6
	}
];
function AuthLanding() {
	const { theme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background text-foreground transition-all",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "grid flex-1 items-center gap-10 py-8 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:py-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-primary/10 px-3 py-1 text-sm text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "h-4 w-4" }), "Privacy-first encrypted messaging experience"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
							children: "Connect with private conversations and a privacy-first messaging hub."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-lg leading-8 text-muted-foreground",
							children: "Launch secure chats, share media, make voice calls, and keep your conversations encrypted across desktop and mobile."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/register",
								className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition",
								children: ["Create account ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$7, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/login",
								className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-5 py-3 font-semibold text-foreground hover:bg-muted/80 transition",
								children: ["Open app ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$7, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10 grid gap-4 sm:grid-cols-3",
							children: features.map((feature, index) => {
								const Icon = feature.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "float-card rounded-2xl border border-border bg-card p-4 shadow-sm backdrop-blur",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "mb-3 h-6 w-6 text-primary" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold",
											children: feature.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 text-sm text-muted-foreground",
											children: feature.description
										})
									]
								}, feature.title);
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-[28px] border border-border bg-card p-6 shadow-2xl backdrop-blur-xl sm:p-7 lg:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-primary/20 bg-primary/10 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-primary",
									children: "Ready-made app download"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 text-xl font-semibold",
									children: "Get Nexus for Android, PC, tablets, Mac and iPhone"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Download the ready-made app package for your device and install it. If your device shows an “Unknown Source” warning, it is safe to proceed and continue the installation."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex flex-wrap gap-3",
									children: [
										typeof navigator !== "undefined" && (() => {
											return /Android/i.test(navigator.userAgent) && !(typeof window !== "undefined" && window.Capacitor && typeof window.Capacitor.isNativePlatform === "function" && window.Capacitor.isNativePlatform()) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://nexus-chat-sandy-alpha.vercel.app/app-release.apk",
												download: true,
												className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$8, { className: "h-4 w-4" }), " Android app"]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "https://developer.android.com/studio",
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90 transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$8, { className: "h-4 w-4" }), " Android app"]
											});
										})(),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "https://developer.apple.com/xcode/",
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 font-semibold text-foreground hover:bg-muted/80 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Apple, { className: "h-4 w-4" }), " iOS app"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/login",
											className: "inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-2 font-semibold text-foreground hover:bg-muted/80 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$7, { className: "h-4 w-4" }), " Open app"]
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-border bg-muted p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-sm font-medium text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$9, { className: "h-4 w-4 text-primary" }), "Included experiences"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Secure sign-in with member number" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Voice, media and chat support" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Wallpaper and settings customization" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Cross-device messaging and privacy controls" })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: platforms.map((platform) => {
								const Icon = platform.icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "float-card flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 text-sm text-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-primary" }),
										" ",
										platform.label
									]
								}, platform.label);
							})
						})
					]
				})]
			})]
		})
	});
}
//#endregion
//#region src/routes/index.tsx
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
	component: AuthLanding
});
//#endregion
//#region src/components/AdminGuard.jsx
function AdminGuard({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" })
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		replace: true,
		state: { from: location.pathname }
	});
	if (user.role !== "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/app",
		replace: true
	});
	if (!user.adminAuthenticated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin/login",
		replace: true,
		state: { from: location.pathname }
	});
	return children;
}
//#endregion
//#region src/routes/admin/route.tsx
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
	component: AdminLayoutRoute
});
function AdminLayoutRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminGuard, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) });
}
//#endregion
//#region src/components/ProtectedRoute.jsx
function ProtectedRoute({ children }) {
	const { user, loading } = useAuth();
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center justify-center min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" })
	});
	if (!user) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/login",
		replace: true
	});
	if (user.role === "admin") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigate, {
		to: "/admin",
		replace: true
	});
	return children;
}
//#endregion
//#region src/components/chat/ChatListItem.jsx
function ChatListItem({ chat, selected, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		className: `flex items-center p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${selected ? "bg-gray-100 dark:bg-gray-800" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
			src: chat.avatar_url,
			alt: chat.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ml-3 flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-baseline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-bold text-gray-900 dark:text-white truncate",
						children: chat.title
					}), chat.encrypted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-3 h-3 text-green-500 flex-shrink-0" })]
				}), chat.last_message_time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0",
					children: format(new Date(chat.last_message_time), "h:mm a")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex justify-between items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-gray-500 dark:text-gray-400 truncate",
					children: chat.last_message || "No messages yet"
				}), chat.unread_count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0",
					children: chat.unread_count
				})]
			})]
		})]
	});
}
//#endregion
//#region src/lib/persistence.js
var STORAGE_KEY = "nexus-chat-state-v1";
var CONTACTS_STORAGE_KEY = "nexus-contacts-state-v1";
var USERS_STORAGE_KEY = "nexus-chat-users";
var SUPPORT_MESSAGES_STORAGE_KEY = "nexus-support-messages-v1";
function getContactOwnerKey(ownerId) {
	return String(ownerId || "anonymous");
}
function readLocalContacts(ownerId) {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(CONTACTS_STORAGE_KEY);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		if (Array.isArray(parsed)) {
			const migrated = { [getContactOwnerKey(ownerId)]: parsed };
			window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(migrated));
			return parsed;
		}
		const ownerKey = getContactOwnerKey(ownerId);
		if (parsed[ownerKey]) return parsed[ownerKey];
		if (ownerKey !== "anonymous" && parsed.anonymous) {
			parsed[ownerKey] = parsed.anonymous;
			delete parsed.anonymous;
			window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(parsed));
			return parsed[ownerKey];
		}
		return [];
	} catch {
		return [];
	}
}
function writeLocalContacts(ownerId, contacts) {
	if (typeof window === "undefined") return contacts;
	try {
		const raw = window.localStorage.getItem(CONTACTS_STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : {};
		const contactsByOwner = Array.isArray(parsed) ? { [getContactOwnerKey(ownerId)]: parsed } : parsed;
		contactsByOwner[getContactOwnerKey(ownerId)] = contacts;
		window.localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify(contactsByOwner));
	} catch {}
	return contacts;
}
function notifyContactsUpdate() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus-contacts:updated"));
}
function notifyChange() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus-chat:updated"));
}
function readLocalChats() {
	if (typeof window === "undefined") return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function writeLocalChats(chats) {
	if (typeof window === "undefined") return chats;
	try {
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(chats));
	} catch {}
	return chats;
}
function notifyChatUpdate() {
	if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus-chat:updated"));
}
function startRealtimeListeners() {
	if (!supabase || !isSupabaseConfigured()) return null;
	const channel = supabase.channel("public-realtime");
	channel.on("postgres_changes", {
		event: "INSERT",
		schema: "public",
		table: "messages"
	}, async (payload) => {
		const msg = payload.new;
		if (!msg || !msg.chat_id) return;
		await appendMessage(String(msg.chat_id), {
			id: String(msg.id),
			sender_id: String(msg.sender_id || "other"),
			content: msg.content,
			type: msg.type || "text",
			file_url: msg.file_url || null,
			file_name: msg.file_name || null,
			encrypted: Boolean(msg.encrypted),
			created_at: msg.created_at || (/* @__PURE__ */ new Date()).toISOString()
		});
		if (typeof window !== "undefined") window.dispatchEvent(new CustomEvent("nexus:incoming-notification", { detail: {
			title: "New message",
			preview: msg.type === "text" ? msg.content : "New attachment received",
			avatarUrl: "/logo.png",
			type: "message"
		} }));
	});
	channel.on("postgres_changes", {
		event: "INSERT",
		schema: "public",
		table: "support_messages"
	}, () => {
		notifyChange();
	});
	const chatChanged = async () => {
		await readChats();
		notifyChatUpdate();
	};
	channel.on("postgres_changes", {
		event: "INSERT",
		schema: "public",
		table: "chats"
	}, chatChanged);
	channel.on("postgres_changes", {
		event: "UPDATE",
		schema: "public",
		table: "chats"
	}, chatChanged);
	channel.on("postgres_changes", {
		event: "DELETE",
		schema: "public",
		table: "chats"
	}, chatChanged);
	channel.subscribe();
	return channel;
}
function stopRealtimeListeners(channel) {
	if (channel && typeof channel.unsubscribe === "function") channel.unsubscribe();
}
var UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
var isUUID = (str) => UUID_REGEX.test(str);
async function readChats() {
	let supabaseChats = [];
	if (supabase && isSupabaseConfigured()) try {
		const { data, error } = await supabase.from("chats").select("*").order("created_at", { ascending: false });
		if (!error && Array.isArray(data)) supabaseChats = data.map((chat) => ({
			...chat,
			id: String(chat.id),
			messages: []
		}));
	} catch {}
	const localChats = readLocalChats();
	const mergedMap = /* @__PURE__ */ new Map();
	localChats.forEach((chat) => {
		mergedMap.set(chat.id, chat);
	});
	supabaseChats.forEach((chat) => {
		const existing = mergedMap.get(chat.id);
		mergedMap.set(chat.id, {
			...existing,
			...chat,
			messages: existing?.messages || chat.messages || []
		});
	});
	return Array.from(mergedMap.values());
}
async function writeChats(chats) {
	const localChats = writeLocalChats(chats);
	if (supabase && isSupabaseConfigured()) try {
		const chatsToUpsert = localChats.filter((chat) => isUUID(chat.id)).map((chat) => ({
			id: chat.id,
			title: chat.title,
			type: chat.type || "private",
			created_at: chat.created_at || (/* @__PURE__ */ new Date()).toISOString()
		}));
		if (chatsToUpsert.length > 0) await supabase.from("chats").upsert(chatsToUpsert);
	} catch {}
	notifyChange();
	return localChats;
}
async function getChats() {
	return readChats();
}
async function appendMessage(chatId, message) {
	const chats = await getChats();
	const chat = chats.find((item) => item.id === chatId);
	if (!chat) return null;
	const nextMessage = {
		id: message.id || `${Date.now()}`,
		sender_id: message.sender_id || "me",
		content: message.content || "",
		type: message.type || "text",
		encrypted: Boolean(message.encrypted),
		file_url: message.file_url || null,
		file_name: message.file_name || null,
		duration: message.duration || null,
		created_at: message.created_at || (/* @__PURE__ */ new Date()).toISOString()
	};
	const existingMessages = Array.isArray(chat.messages) ? chat.messages : [];
	if (existingMessages.some((m) => m.id === nextMessage.id)) return chat;
	const updatedChat = {
		...chat,
		messages: [...existingMessages, nextMessage],
		last_message: nextMessage.content,
		last_message_time: nextMessage.created_at,
		unread_count: 0
	};
	await writeChats(chats.map((item) => item.id === chatId ? updatedChat : item));
	return updatedChat;
}
async function getChatById(chatId) {
	if (supabase && isSupabaseConfigured()) try {
		const { data: chatData, error: chatError } = await supabase.from("chats").select("*").eq("id", chatId).single();
		if (!chatError && chatData) {
			const { data: messageData, error: messageError } = await supabase.from("messages").select("*").eq("chat_id", chatId).order("created_at", { ascending: true });
			if (!messageError && Array.isArray(messageData)) return {
				...chatData,
				id: String(chatData.id),
				messages: messageData.map((msg) => ({
					...msg,
					id: String(msg.id)
				}))
			};
			return {
				...chatData,
				id: String(chatData.id),
				messages: []
			};
		}
	} catch {}
	return (await getChats()).find((chat) => chat.id === chatId) || null;
}
async function createChat(chatData) {
	const chats = await getChats();
	const newChat = {
		id: chatData.id || `${Date.now()}`,
		title: chatData.title || "New Chat",
		type: chatData.type || "private",
		avatar_url: chatData.avatar_url || null,
		last_message: chatData.last_message || "New conversation",
		last_message_time: (/* @__PURE__ */ new Date()).toISOString(),
		unread_count: 0,
		encrypted: Boolean(chatData.encrypted),
		messages: chatData.messages || []
	};
	await writeChats([newChat, ...chats]);
	return newChat;
}
async function getContacts(ownerId) {
	return readLocalContacts(ownerId);
}
async function findMemberByNexusId(rawNexusId, currentUser) {
	const parsed = parseNexusId(rawNexusId);
	if (parsed.status !== "exact_match") return {
		status: parsed.status,
		member: null,
		nexusId: parsed.value
	};
	const nexusId = parsed.value;
	if (getMemberNexusId(currentUser) === nexusId) return {
		status: "self_match",
		member: null,
		nexusId
	};
	if (supabase && isSupabaseConfigured()) try {
		const { data, error } = await supabase.rpc("search_member_by_nexus_id", { search_nexus_id: nexusId }).maybeSingle();
		if (!error && data) return {
			status: "exact_match",
			member: {
				...data,
				profile: data.profile_id ? {
					id: data.profile_id,
					email: data.profile_email
				} : null
			},
			nexusId
		};
	} catch {}
	try {
		const member = JSON.parse(window.localStorage.getItem(USERS_STORAGE_KEY) || "[]").find((user) => getMemberNexusId(user) === nexusId);
		if (!member) return {
			status: "not_found",
			member: null,
			nexusId
		};
		if (member.is_active === false || member.isActive === false) return {
			status: "inactive",
			member: null,
			nexusId
		};
		return {
			status: "exact_match",
			member,
			nexusId
		};
	} catch {
		return {
			status: "not_found",
			member: null,
			nexusId
		};
	}
}
async function getSupportMessages(conversationId) {
	if (supabase && isSupabaseConfigured()) try {
		const { data, error } = await supabase.from("support_messages").select("*").eq("conversation_id", conversationId).order("created_at", { ascending: true });
		if (!error && data) return data;
	} catch {}
	try {
		return JSON.parse(window.localStorage.getItem(SUPPORT_MESSAGES_STORAGE_KEY) || "{}")[conversationId] || [];
	} catch {
		return [];
	}
}
async function appendSupportMessage(conversationId, message) {
	const supportMessage = {
		id: message.id || `${Date.now()}`,
		conversation_id: conversationId,
		sender_id: String(message.sender_id || "me"),
		content: message.content || "",
		type: message.type || "text",
		file_url: message.file_url || null,
		file_name: message.file_name || null,
		created_at: message.created_at || (/* @__PURE__ */ new Date()).toISOString()
	};
	if (supabase && isSupabaseConfigured()) {
		const { id, ...supportMessageData } = supportMessage;
		const { data, error } = await supabase.from("support_messages").insert(supportMessageData).select().single();
		if (!error && data) {
			notifyChange();
			return data;
		}
	}
	try {
		const messages = JSON.parse(window.localStorage.getItem(SUPPORT_MESSAGES_STORAGE_KEY) || "{}");
		messages[conversationId] = [...messages[conversationId] || [], supportMessage];
		window.localStorage.setItem(SUPPORT_MESSAGES_STORAGE_KEY, JSON.stringify(messages));
	} catch {}
	notifyChange();
	return supportMessage;
}
async function addContact(ownerId, contactData) {
	const contacts = await getContacts(ownerId);
	const newContact = {
		id: `${Date.now()}`,
		name: contactData.name,
		nexusId: contactData.nexusId,
		avatarUrl: contactData.avatarUrl || null,
		createdAt: (/* @__PURE__ */ new Date()).toISOString()
	};
	await writeLocalContacts(ownerId, [newContact, ...contacts]);
	notifyContactsUpdate();
	return newContact;
}
async function deleteContact(ownerId, contactId) {
	const updatedContacts = (await getContacts(ownerId)).filter((c) => c.id !== contactId);
	await writeLocalContacts(ownerId, updatedContacts);
	notifyContactsUpdate();
	return updatedContacts;
}
//#endregion
//#region src/components/chat/ChatSidebar.jsx
function ChatSidebar({ activeTab, onTabChange }) {
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [chats, setChats] = (0, import_react.useState)([]);
	const { logout } = useAuth();
	const navigate = useNavigate();
	const { chatId } = useParams();
	(0, import_react.useEffect)(() => {
		const refreshChats = async () => {
			const nextChats = await getChats();
			setChats(Array.isArray(nextChats) ? nextChats : []);
		};
		refreshChats();
		window.addEventListener("nexus-chat:updated", refreshChats);
		return () => window.removeEventListener("nexus-chat:updated", refreshChats);
	}, []);
	const filteredChats = chats.filter((chat) => chat.title.toLowerCase().includes(searchQuery.toLowerCase()));
	const handleChatSelect = (chat) => {
		navigate(`/app/chat/${chat.id}`);
	};
	const showChatList = activeTab === "chats";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `w-full md:w-96 bg-card border-r border-border flex flex-col ${chatId ? "hidden md:flex" : showChatList ? "flex" : "hidden md:flex"}`,
		children: [showChatList && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$10, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					placeholder: "Search or start new chat",
					value: searchQuery,
					onChange: (e) => setSearchQuery(e.target.value),
					className: "w-full pl-10 pr-4 py-2 bg-muted border-none rounded-lg text-foreground focus:ring-2 focus:ring-ring"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto",
			children: filteredChats.length > 0 ? filteredChats.map((chat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatListItem, {
				chat,
				selected: chatId === chat.id,
				onClick: () => handleChatSelect(chat)
			}, chat.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center justify-center py-12 px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$11, { className: "w-8 h-8 text-muted-foreground" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground font-medium text-center",
						children: "No conversations yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1 text-center",
						children: "Start a new chat to begin messaging"
					})
				]
			})
		})] }), !showChatList && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 flex items-center justify-center p-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					onTabChange("chats");
					navigate("/app");
				},
				className: "text-primary text-sm hover:underline",
				children: "← Back to Chats"
			})
		})]
	});
}
//#endregion
//#region src/components/chat/BottomNav.jsx
var TABS = [
	{
		id: "chats",
		label: "Chats",
		icon: ForwardRef$11,
		path: "/app"
	},
	{
		id: "feeds",
		label: "Feeds",
		icon: ForwardRef$12,
		path: "/app/feeds"
	},
	{
		id: "contacts",
		label: "Contacts",
		icon: ForwardRef$13,
		path: "/app/contacts"
	},
	{
		id: "settings",
		label: "Settings",
		icon: ForwardRef$14,
		path: "/app/settings"
	}
];
function BottomNav({ activeTab, onTabChange }) {
	const navigate = useNavigate();
	const handleTabClick = (tab) => {
		onTabChange(tab.id);
		navigate(tab.path);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "sticky bottom-0 z-30 w-full md:hidden border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.05)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-around",
			children: TABS.map((tab) => {
				const Icon = tab.icon;
				const isActive = activeTab === tab.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => handleTabClick(tab),
					className: `flex flex-col items-center py-3 px-2 flex-1 ${isActive ? "text-primary" : "text-muted-foreground"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-6 h-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs mt-1",
						children: tab.label
					})]
				}, tab.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "md:hidden h-[env(safe-area-inset-bottom)] bg-card" })]
	});
}
//#endregion
//#region src/components/chat/NotificationStack.jsx
function NotificationStack() {
	const [notifications, setNotifications] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const handleNotification = (event) => {
			const detail = event.detail || {};
			const id = detail.id || `${Date.now()}-${Math.random()}`;
			const next = {
				id,
				title: detail.title || "New activity",
				preview: detail.preview || detail.body || "You received a new update.",
				avatarUrl: detail.avatarUrl || "/logo.png",
				type: detail.type || "message"
			};
			setNotifications((prev) => [...prev, next].slice(-4));
			window.setTimeout(() => {
				setNotifications((prev) => prev.filter((item) => item.id !== id));
			}, 3500);
		};
		window.addEventListener("nexus:incoming-notification", handleNotification);
		window.addEventListener("nexus:system-notification", handleNotification);
		return () => {
			window.removeEventListener("nexus:incoming-notification", handleNotification);
			window.removeEventListener("nexus:system-notification", handleNotification);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-y-0 right-0 z-[70] flex items-center justify-end pr-3 sm:pr-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex w-80 flex-col gap-3",
			children: notifications.map((notification, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "animate-[slide-in_320ms_ease-out] rounded-[20px] border border-slate-800/70 bg-slate-950/95 p-3 text-slate-100 shadow-[0_24px_70px_rgba(2,6,23,0.42)] backdrop-blur",
				style: { animationDelay: `${index * 40}ms` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-700 bg-slate-800",
						children: notification.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: notification.avatarUrl,
							alt: notification.title,
							className: "h-full w-full object-cover"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$15, { className: "h-5 w-5 text-sky-400" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: notification.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.24em] text-slate-400",
								children: notification.type
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-6 text-slate-300",
							children: notification.preview
						})]
					})]
				})
			}, notification.id))
		})
	});
}
//#endregion
//#region src/lib/notifications.js
function createNotification(detail) {
	if (typeof window === "undefined") return;
	if ("Notification" in window && Notification.permission === "granted") try {
		new Notification(detail.title, {
			body: detail.preview,
			icon: detail.avatarUrl || "/logo.png"
		});
	} catch {}
}
async function requestNotificationPermission() {
	if (typeof window === "undefined" || !("Notification" in window)) return "unsupported";
	if (Notification.permission === "default") try {
		await Notification.requestPermission();
	} catch {
		return Notification.permission;
	}
	return Notification.permission;
}
function showIncomingNotification({ title, preview, avatarUrl, type = "message" }) {
	const detail = {
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
		title,
		preview,
		avatarUrl: avatarUrl || "/logo.png",
		type
	};
	window.dispatchEvent(new CustomEvent("nexus:incoming-notification", { detail }));
	createNotification(detail);
}
function showSystemNotification({ title, preview, avatarUrl, type = "system" }) {
	const detail = {
		id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
		title,
		preview,
		avatarUrl: avatarUrl || "/logo.png",
		type
	};
	window.dispatchEvent(new CustomEvent("nexus:system-notification", { detail }));
	createNotification(detail);
}
//#endregion
//#region src/layouts/ChatLayout.jsx
function ChatLayout() {
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useAuth();
	(0, import_react.useEffect)(() => {
		async function initNotifications() {
			if (await requestNotificationPermission() !== "granted") showSystemNotification({
				title: "Notification permissions needed",
				preview: "Enable browser notifications to stay informed of new messages and chat activity."
			});
		}
		initNotifications();
		const channel = startRealtimeListeners();
		return () => stopRealtimeListeners(channel);
	}, []);
	const getActiveTab = () => {
		if (location.pathname.startsWith("/app/settings")) return "settings";
		if (location.pathname.startsWith("/app/contacts")) return "contacts";
		if (location.pathname.startsWith("/app/feeds")) return "feeds";
		return "chats";
	};
	const handleTabChange = (tab) => {
		navigate({
			chats: "/app",
			feeds: "/app/feeds",
			contacts: "/app/contacts",
			settings: "/app/settings"
		}[tab] || "/app");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-screen flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { showSignIn: false }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatSidebar, {
					activeTab: getActiveTab(),
					onTabChange: handleTabChange
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-1 min-w-0 flex-col overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {
				activeTab: getActiveTab(),
				onTabChange: handleTabChange
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotificationStack, {})
		]
	});
}
//#endregion
//#region src/routes/app/route.tsx
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
	component: AppLayoutRoute
});
function AppLayoutRoute() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProtectedRoute, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatLayout, {}) });
}
//#endregion
//#region src/components/AuthShell.jsx
function AuthShell({ children, title, subtitle, compact = false }) {
	const { theme } = useTheme();
	const themeClasses = (0, import_react.useMemo)(() => ({ muted: theme === "dark" ? "text-slate-300" : "text-slate-600" }), [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mx-auto flex max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8 ${compact ? "max-w-5xl py-8" : "py-10"}`,
			children: [(title || subtitle) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 max-w-2xl",
				children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-semibold sm:text-4xl",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-3 text-base leading-7 ${themeClasses.muted}`,
					children: subtitle
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-[32px] border p-6 shadow-2xl backdrop-blur-xl lg:p-10 bg-white/80 dark:bg-slate-900/80 border-slate-200/70 dark:border-white/10",
				children
			})]
		})]
	});
}
//#endregion
//#region src/pages/ForgotPassword.jsx
function ForgotPassword() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { theme } = useTheme();
	const { forgotPassword } = useAuth();
	const navigate = useNavigate();
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "font-semibold text-blue-500 hover:underline",
						children: "Sign in"
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/routes/forgot-password.tsx
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
	component: ForgotPassword
});
//#endregion
//#region src/components/NexusNumberInput.jsx
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
//#endregion
//#region src/pages/Login.jsx
function Login() {
	const [nexusId, setNexusId] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const { theme } = useTheme();
	const { login, user } = useAuth();
	const navigate = useNavigate();
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "h-4 w-4" }), " Protected by end-to-end encryption"]
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/forgot-password",
							className: "text-sm text-blue-500 hover:underline",
							children: "Forgot password?"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-slate-400",
							children: [
								"New here?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
//#endregion
//#region src/routes/login.tsx
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
	component: Login
});
//#endregion
//#region src/pages/Register.jsx
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
	const navigate = useNavigate();
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
//#endregion
//#region src/routes/register.tsx
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
	component: Register
});
//#endregion
//#region src/lib/utils.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/input-otp.tsx
var InputOTP = import_react.forwardRef(({ className, containerClassName, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)($t, {
	ref,
	containerClassName: cn("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
	className: cn("disabled:cursor-not-allowed", className),
	...props
}));
InputOTP.displayName = "InputOTP";
var InputOTPGroup = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center", className),
	...props
}));
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = import_react.forwardRef(({ index, className, ...props }, ref) => {
	const { char, hasFakeCaret, isActive } = import_react.useContext(Nt).slots[index] ?? {
		char: null,
		hasFakeCaret: false,
		isActive: false
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
		...props,
		children: [char, hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 flex items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" })
		})]
	});
});
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = import_react.forwardRef(({ ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "separator",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
}));
InputOTPSeparator.displayName = "InputOTPSeparator";
//#endregion
//#region src/pages/ResetPassword.jsx
function useQueryEmail$1() {
	const match = (useLocation().search || "").match(/[?&]email=([^&]+)/);
	return match ? decodeURIComponent(match[1]) : "";
}
function ResetPassword() {
	const queryEmail = useQueryEmail$1();
	const [email, setEmail] = (0, import_react.useState)(queryEmail);
	const [token, setToken] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [info, setInfo] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const navigate = useNavigate();
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
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/forgot-password",
					className: `${themeClasses.muted} hover:underline`,
					children: "Need a new code?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "font-semibold text-blue-500 hover:underline",
					children: "Back to sign in"
				})]
			})]
		})
	});
}
//#endregion
//#region src/routes/reset-password.tsx
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
	component: ResetPassword
});
//#endregion
//#region src/pages/VerifyEmail.jsx
function useQueryEmail() {
	const match = (useLocation().search || "").match(/[?&]email=([^&]+)/);
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
	const navigate = useNavigate();
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
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
//#endregion
//#region src/routes/verify.tsx
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
	component: VerifyEmail
});
//#endregion
//#region src/routes/admin/index.tsx
var Route$13 = createFileRoute("/admin/")({
	ssr: false,
	beforeLoad: () => {
		throw redirect({ to: "/admin/dashboard" });
	},
	component: () => null
});
//#endregion
//#region src/pages/AdminDashboard.jsx
function AdminDashboard() {
	const { user } = useAuth();
	const [activeUsers, setActiveUsers] = (0, import_react.useState)([]);
	const [recentMessages, setRecentMessages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const loadAdminData = async () => {
			if (!isSupabaseConfigured() || !supabase) {
				setError("Add VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY to .env, then run `npm run bootstrap` to create the dashboard tables.");
				setLoading(false);
				return;
			}
			try {
				const [{ data: users }, { data: messages }] = await Promise.all([supabase.from("members").select("id, member_id, full_name, created_at").order("created_at", { ascending: false }).limit(20), supabase.from("messages").select("id, chat_id, sender_id, content, type, created_at").order("created_at", { ascending: false }).limit(20)]);
				setActiveUsers(users || []);
				setRecentMessages(messages || []);
			} catch (err) {
				setError(err?.message || "Failed to load admin data.");
			} finally {
				setLoading(false);
			}
		};
		loadAdminData();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { showSignIn: false }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-8 flex flex-wrap gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/dashboard",
							className: "font-semibold text-blue-600",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/users",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/feeds",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Feeds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/support",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/settings",
							className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
							children: "Settings"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30 dark:border-slate-800 dark:bg-slate-900 dark:shadow-slate-950/30",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm uppercase tracking-[0.27em] text-blue-600",
							children: "Admin dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-3xl font-semibold",
							children: "Workspace administration"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300",
							children: "Monitor active members, review recent messages, and protect the encrypted messaging experience."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-slate-500 dark:text-slate-400",
							children: ["Signed in as ", user?.fullName || user?.nexusId]
						})
					]
				}),
				loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[24px] border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900",
					children: "Loading admin data..."
				}) : error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[24px] border border-rose-200 bg-rose-50 p-8 text-center text-rose-700 shadow-sm dark:border-rose-800 dark:bg-rose-950 dark:text-rose-200",
					children: error
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: "Active members"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
								children: "Latest registered members and account details."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: activeUsers.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-slate-900 dark:text-slate-100",
											children: member.full_name || member.member_id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-slate-500 dark:text-slate-400",
											children: ["Member #", member.member_id]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-slate-500 dark:text-slate-400",
											children: new Date(member.created_at).toLocaleString()
										})]
									})
								}, member.id))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-semibold",
								children: "Recent messages"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-slate-500 dark:text-slate-400",
								children: "Most recent chat activity across the workspace."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 space-y-4",
								children: recentMessages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm text-slate-500 dark:text-slate-400",
											children: new Date(msg.created_at).toLocaleString()
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 font-semibold text-slate-900 dark:text-slate-100",
											children: msg.type === "text" ? msg.content : `(${msg.type}) ${msg.content}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 text-sm text-slate-500 dark:text-slate-400",
											children: ["Chat ID: ", msg.chat_id]
										})
									]
								}, msg.id))
							})
						]
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/routes/admin/dashboard.tsx
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
	component: AdminDashboard
});
//#endregion
//#region src/pages/AdminFeeds.jsx
var emptyForm$1 = {
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
	const [form, setForm] = (0, import_react.useState)(emptyForm$1);
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
			setForm(emptyForm$1);
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/dashboard",
							className: "text-slate-400 hover:text-white",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/users",
							className: "text-slate-400 hover:text-white",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/feeds",
							className: "font-semibold text-blue-400",
							children: "Feeds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/support",
							className: "text-slate-400 hover:text-white",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
									onClick: () => setForm(emptyForm$1),
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
												...emptyForm$1,
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
//#endregion
//#region src/routes/admin/feeds.tsx
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
	component: AdminFeeds
});
//#endregion
//#region src/pages/AdminLogin.jsx
function AdminLogin() {
	const { adminLogin, user } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user?.role === "admin" && user.adminAuthenticated) navigate("/admin/dashboard", { replace: true });
	}, [user, navigate]);
	const handleSubmit = async (event) => {
		event.preventDefault();
		setError("");
		setLoading(true);
		try {
			await adminLogin(email, password);
			navigate(location.state?.from || "/admin/dashboard", { replace: true });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Unable to sign in.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "flex min-h-screen items-center justify-center bg-slate-950 px-4 text-slate-100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.28em] text-blue-400",
					children: "Restricted access"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-3xl font-semibold",
					children: "Administrator sign in"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-slate-400",
					children: "Authorized personnel only."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Email", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500",
								type: "email",
								required: true,
								value: email,
								onChange: (event) => setEmail(event.target.value)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm font-medium",
							children: ["Password", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "mt-2 block w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500",
								type: "password",
								required: true,
								value: password,
								onChange: (event) => setPassword(event.target.value)
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-rose-400",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: loading,
							className: "w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold transition hover:bg-blue-500 disabled:opacity-50",
							children: loading ? "Checking..." : "Sign in"
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/admin/login.tsx
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
	component: AdminLogin
});
//#endregion
//#region src/pages/AdminSettings.jsx
function AdminSettings() {
	const [status, setStatus] = (0, import_react.useState)("");
	const [output, setOutput] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const runDatabaseSync = async (event) => {
		event.preventDefault();
		setLoading(true);
		setStatus("");
		setOutput("");
		try {
			const { data: { session } } = await supabase.auth.getSession();
			if (!session) throw new Error("Your Admin session has expired. Please sign in again.");
			const response = await fetch("/api/admin/db-sync", {
				method: "POST",
				headers: { Authorization: `Bearer ${session.access_token}` }
			});
			const responseText = await response.text();
			let result = {};
			try {
				result = responseText ? JSON.parse(responseText) : {};
			} catch {
				throw new Error(`Database sync failed (HTTP ${response.status}).`);
			}
			if (!response.ok) throw new Error(result.error || "Database sync failed.");
			setStatus("Database sync completed successfully.");
			setOutput(result.output || "Schema applied and verification completed.");
		} catch (error) {
			setStatus(error instanceof Error ? error.message : "Database sync failed.");
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.28em] text-blue-600",
					children: "Admin settings"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 text-2xl font-semibold",
					children: "Workspace controls"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/admin/dashboard",
					className: "text-sm font-medium text-blue-600 hover:text-blue-500",
					children: "Back to dashboard"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mb-8 flex flex-wrap gap-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/dashboard",
						className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
						children: "Dashboard"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/users",
						className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
						children: "Users"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/feeds",
						className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
						children: "Feeds"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/support",
						className: "text-slate-500 hover:text-slate-900 dark:hover:text-white",
						children: "Support"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admin/settings",
						className: "font-semibold text-blue-600",
						children: "Settings"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-blue-50 p-3 text-blue-600 dark:bg-blue-950/40 dark:text-blue-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: "Database schema sync"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400",
							children: "Apply missing tables, columns, policies, functions, and realtime configuration, then run the database verification checks."
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: runDatabaseSync,
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50",
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), loading ? "Syncing database..." : "Run database sync"]
						})
					}),
					status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-5 text-sm ${status.includes("successfully") ? "text-emerald-600" : "text-rose-600"}`,
						children: status
					}),
					output && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "mt-4 max-h-80 overflow-auto rounded-xl bg-slate-950 p-4 text-xs leading-5 text-slate-200",
						children: output
					})
				]
			})]
		})]
	});
}
//#endregion
//#region src/routes/admin/settings.tsx
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
	component: AdminSettings
});
//#endregion
//#region src/data/stickers.js
var STICKER_PACKS = [{
	id: "emotions",
	name: "Emotions",
	stickers: [
		{
			id: "happy",
			emoji: "😊",
			label: "Happy"
		},
		{
			id: "laugh",
			emoji: "😂",
			label: "Laugh"
		},
		{
			id: "love",
			emoji: "❤️",
			label: "Love"
		},
		{
			id: "cool",
			emoji: "😎",
			label: "Cool"
		},
		{
			id: "think",
			emoji: "🤔",
			label: "Think"
		},
		{
			id: "sad",
			emoji: "😢",
			label: "Sad"
		},
		{
			id: "angry",
			emoji: "😠",
			label: "Angry"
		},
		{
			id: "party",
			emoji: "🎉",
			label: "Party"
		},
		{
			id: "fire",
			emoji: "🔥",
			label: "Fire"
		},
		{
			id: "thumbsup",
			emoji: "👍",
			label: "Thumbs Up"
		},
		{
			id: "clap",
			emoji: "👏",
			label: "Clap"
		},
		{
			id: "wave",
			emoji: "👋",
			label: "Wave"
		}
	]
}, {
	id: "animals",
	name: "Animals",
	stickers: [
		{
			id: "cat",
			emoji: "🐱",
			label: "Cat"
		},
		{
			id: "dog",
			emoji: "🐶",
			label: "Dog"
		},
		{
			id: "fox",
			emoji: "🦊",
			label: "Fox"
		},
		{
			id: "panda",
			emoji: "🐼",
			label: "Panda"
		},
		{
			id: "unicorn",
			emoji: "🦄",
			label: "Unicorn"
		},
		{
			id: "butterfly",
			emoji: "🦋",
			label: "Butterfly"
		}
	]
}];
//#endregion
//#region src/components/chat/StickerPicker.jsx
function StickerPicker({ onSelect, onClose }) {
	const [activePack, setActivePack] = (0, import_react.useState)(STICKER_PACKS[0].id);
	const pack = STICKER_PACKS.find((p) => p.id === activePack);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute bottom-full left-0 right-0 mb-2 mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-2",
				children: STICKER_PACKS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setActivePack(p.id),
					className: `px-3 py-1 text-sm rounded-full transition-colors ${activePack === p.id ? "bg-blue-600 text-white" : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"}`,
					children: p.name
				}, p.id))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4 text-gray-500" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-6 gap-2 p-4 max-h-48 overflow-y-auto",
			children: pack?.stickers.map((sticker) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => onSelect(sticker),
				className: "text-3xl p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",
				title: sticker.label,
				children: sticker.emoji
			}, sticker.id))
		})]
	});
}
//#endregion
//#region src/components/chat/MessageInput.jsx
function MessageInput({ onSendMessage }) {
	const [inputText, setInputText] = (0, import_react.useState)("");
	const [showStickers, setShowStickers] = (0, import_react.useState)(false);
	const [isRecording, setIsRecording] = (0, import_react.useState)(false);
	const [recordingDuration, setRecordingDuration] = (0, import_react.useState)(0);
	const fileInputRef = (0, import_react.useRef)(null);
	const mediaRecorderRef = (0, import_react.useRef)(null);
	const recordingIntervalRef = (0, import_react.useRef)(null);
	const audioChunksRef = (0, import_react.useRef)([]);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputText.trim()) {
			onSendMessage({
				content: inputText.trim(),
				type: "text"
			});
			setInputText("");
		}
	};
	const handleFileSelect = (e) => {
		Array.from(e.target.files || []).forEach((file) => {
			const url = URL.createObjectURL(file);
			let type = "file";
			if (file.type.startsWith("image/")) type = "image";
			else if (file.type.startsWith("video/")) type = "video";
			else if (file.type.startsWith("audio/")) type = "voice";
			else if (file.type.includes("pdf") || file.type.includes("document") || file.type.includes("text") || file.type.includes("spreadsheet") || file.type.includes("presentation")) type = "file";
			onSendMessage({
				content: file.name,
				type,
				file_url: url,
				file_name: file.name,
				duration: type === "voice" ? null : void 0
			});
		});
		e.target.value = "";
	};
	const startRecording = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			const mediaRecorder = new MediaRecorder(stream);
			mediaRecorderRef.current = mediaRecorder;
			audioChunksRef.current = [];
			mediaRecorder.ondataavailable = (e) => {
				audioChunksRef.current.push(e.data);
			};
			mediaRecorder.onstop = () => {
				const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
				onSendMessage({
					content: "Voice message",
					type: "voice",
					file_url: URL.createObjectURL(blob),
					duration: recordingDuration
				});
				stream.getTracks().forEach((track) => track.stop());
				setRecordingDuration(0);
			};
			mediaRecorder.start();
			setIsRecording(true);
			recordingIntervalRef.current = setInterval(() => {
				setRecordingDuration((prev) => prev + 1);
			}, 1e3);
		} catch {
			alert("Microphone access is required for voice messages");
		}
	};
	const stopRecording = () => {
		if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
		clearInterval(recordingIntervalRef.current);
		setIsRecording(false);
	};
	const handleStickerSelect = (sticker) => {
		onSendMessage({
			content: sticker.emoji,
			type: "sticker"
		});
		setShowStickers(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 relative",
		children: [showStickers && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickerPicker, {
			onSelect: handleStickerSelect,
			onClose: () => setShowStickers(false)
		}), isRecording ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-3 h-3 bg-red-500 rounded-full animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-red-600 dark:text-red-400",
					children: [
						"Recording... ",
						recordingDuration,
						"s"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: stopRecording,
				className: "p-3 bg-red-600 hover:bg-red-700 rounded-full text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$16, { className: "w-5 h-5" })
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit,
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setShowStickers(!showStickers),
					className: `p-2 rounded-full transition-colors ${showStickers ? "bg-blue-100 dark:bg-blue-900 text-blue-600" : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$17, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => fileInputRef.current?.click(),
					className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-500 dark:text-gray-400",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$18, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: fileInputRef,
					type: "file",
					multiple: true,
					accept: "image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip,.rar",
					className: "hidden",
					onChange: handleFileSelect
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						value: inputText,
						onChange: (e) => setInputText(e.target.value),
						placeholder: "Type a message...",
						className: "w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border-none rounded-full text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
					})
				}),
				inputText.trim() ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$19, { className: "w-6 h-6" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: startRecording,
					className: "p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "w-6 h-6" })
				})
			]
		})]
	});
}
//#endregion
//#region src/components/chat/MessageBubble.jsx
function MessageBubble({ message, isOwn }) {
	const renderContent = () => {
		switch (message.type) {
			case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm whitespace-pre-wrap break-words",
				children: message.content
			});
			case "image": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: message.file_url,
				alt: "Shared image",
				className: "max-w-xs rounded-lg cursor-pointer",
				onClick: () => window.open(message.file_url, "_blank")
			});
			case "video": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: message.file_url,
					controls: true,
					className: "rounded-lg w-full",
					preload: "metadata"
				}), message.file_name && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs mt-1 opacity-75 flex items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "w-3 h-3" }), message.file_name]
				})]
			});
			case "voice": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 min-w-[200px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music, { className: "w-4 h-4 flex-shrink-0" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
						src: message.file_url,
						controls: true,
						className: "h-8 flex-1",
						style: { maxWidth: "180px" }
					}),
					message.duration && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs opacity-75",
						children: [message.duration, "s"]
					})
				]
			});
			case "sticker": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-5xl leading-none select-none",
				role: "img",
				children: message.content
			});
			case "document":
			case "file": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: message.file_url,
				download: message.file_name,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex items-center gap-3 p-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-8 h-8 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium truncate",
						children: message.file_name || message.content
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs opacity-75 flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-3 h-3" }), "Tap to download"]
					})]
				})]
			});
			default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: message.content
			});
		}
	};
	const isSticker = message.type === "sticker";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex ${isOwn ? "justify-end" : "justify-start"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: isSticker ? "max-w-[75%]" : `max-w-[75%] px-4 py-2 rounded-2xl ${isOwn ? "bg-blue-600 text-white rounded-tr-none" : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-tl-none shadow-sm"}`,
			children: [renderContent(), !isSticker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `text-xs mt-1 ${isOwn ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`,
				children: format(new Date(message.created_at), "h:mm a")
			})]
		})
	});
}
//#endregion
//#region src/components/chat/VoiceCallOverlay.jsx
function VoiceCallOverlay({ chat, voiceCall }) {
	const { callState, callDuration, isMuted, error, acceptCall, endCall, toggleMute, formatDuration } = voiceCall;
	if (callState === "idle") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-gray-900/95 flex flex-col items-center justify-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					src: chat.avatar_url,
					alt: chat.title,
					size: "2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold text-white mt-6",
					children: chat.title
				}),
				callState === "calling" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-400 mt-2 animate-pulse",
					children: "Calling..."
				}),
				callState === "incoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-gray-400 mt-2",
					children: "Incoming voice call"
				}),
				callState === "connected" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-green-400 mt-2 font-mono text-lg",
					children: formatDuration(callDuration)
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-red-400 mt-2 text-sm",
					children: error
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-6 mt-12",
			children: [
				callState === "incoming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: acceptCall,
					className: "p-5 bg-green-600 hover:bg-green-700 rounded-full text-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-7 h-7" })
				}),
				(callState === "connected" || callState === "calling") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggleMute,
					className: `p-4 rounded-full transition-colors ${isMuted ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-700 hover:bg-gray-600 text-white"}`,
					children: isMuted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MicOff, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-6 h-6" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: endCall,
					className: "p-5 bg-red-600 hover:bg-red-700 rounded-full text-white transition-colors",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "w-7 h-7" })
				})
			]
		})]
	});
}
//#endregion
//#region src/hooks/useSetting.js
function useSetting(key, defaultValue) {
	const [value, setValue] = (0, import_react.useState)(() => {
		const stored = localStorage.getItem(key);
		return stored !== null ? JSON.parse(stored) : defaultValue;
	});
	(0, import_react.useEffect)(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	return [value, setValue];
}
//#endregion
//#region src/lib/wallpapers.js
var WALLPAPERS = [
	{
		id: "default",
		name: "Default",
		url: null,
		preview: "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)",
		license: "Built-in"
	},
	{
		id: "dots",
		name: "Soft Dots",
		url: "/wallpapers/pattern-dots.svg",
		preview: "/wallpapers/pattern-dots.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "waves",
		name: "Ocean Waves",
		url: "/wallpapers/pattern-waves.svg",
		preview: "/wallpapers/pattern-waves.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "geometric",
		name: "Geometric",
		url: "/wallpapers/pattern-geometric.svg",
		preview: "/wallpapers/pattern-geometric.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "nature",
		name: "Nature Sky",
		url: "/wallpapers/pattern-nature.svg",
		preview: "/wallpapers/pattern-nature.svg",
		license: "CC0 — Nexus Chat"
	},
	{
		id: "abstract",
		name: "Abstract",
		url: "/wallpapers/pattern-abstract.svg",
		preview: "/wallpapers/pattern-abstract.svg",
		license: "CC0 — Nexus Chat"
	}
];
function getWallpaperById(id) {
	return WALLPAPERS.find((w) => w.id === id) || WALLPAPERS[0];
}
//#endregion
//#region src/lib/crypto/e2ee.js
var KEY_STORAGE = "nexus_e2ee_keys";
var ENCRYPTION_ENABLED_KEY = "nexus_e2ee_enabled";
function toBase64(buffer) {
	return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}
function fromBase64(base64) {
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes.buffer;
}
function fromUtf8(str) {
	if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(str);
	const escaped = unescape(encodeURIComponent(str));
	const bytes = new Uint8Array(escaped.length);
	for (let i = 0; i < escaped.length; i++) bytes[i] = escaped.charCodeAt(i);
	return bytes;
}
async function sha256Hex(input) {
	const bytes = fromUtf8(String(input || ""));
	const digest = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function generateKeyPair() {
	return crypto.subtle.generateKey({
		name: "ECDH",
		namedCurve: "P-256"
	}, true, ["deriveKey"]);
}
async function exportPublicKey(key) {
	return toBase64(await crypto.subtle.exportKey("raw", key));
}
async function importPublicKey(base64Key) {
	return crypto.subtle.importKey("raw", fromBase64(base64Key), {
		name: "ECDH",
		namedCurve: "P-256"
	}, true, []);
}
async function deriveSharedKey(privateKey, publicKey) {
	return crypto.subtle.deriveKey({
		name: "ECDH",
		public: publicKey
	}, privateKey, {
		name: "AES-GCM",
		length: 256
	}, false, ["encrypt", "decrypt"]);
}
async function deriveDirectChatKey(chatId, memberIdA, memberIdB) {
	const a = String(memberIdA || "").trim();
	const b = String(memberIdB || "").trim();
	const hashHex = await sha256Hex(`nexus-chat|${String(chatId || "").trim()}|${[a, b].sort().join("|")}`);
	const keyBytes = /* @__PURE__ */ new Uint8Array(32);
	for (let i = 0; i < 32; i++) keyBytes[i] = parseInt(hashHex.slice(i * 2, i * 2 + 2), 16);
	return crypto.subtle.importKey("raw", keyBytes, { name: "AES-GCM" }, false, ["encrypt", "decrypt"]);
}
async function initializeE2EE() {
	const stored = localStorage.getItem(KEY_STORAGE);
	if (stored) return JSON.parse(stored);
	const keyPair = await generateKeyPair();
	const keys = {
		publicKey: await exportPublicKey(keyPair.publicKey),
		privateKeyJwk: await crypto.subtle.exportKey("jwk", keyPair.privateKey),
		publicKeyJwk: await crypto.subtle.exportKey("jwk", keyPair.publicKey)
	};
	localStorage.setItem(KEY_STORAGE, JSON.stringify(keys));
	return keys;
}
function isE2EEEnabled() {
	const set = localStorage.getItem(ENCRYPTION_ENABLED_KEY);
	if (set === null || set === void 0) return true;
	return set !== "false";
}
function setE2EEEnabled(enabled) {
	localStorage.setItem(ENCRYPTION_ENABLED_KEY, String(enabled));
}
async function getMyPublicKey() {
	return (await initializeE2EE()).publicKey;
}
var peerPublicKeys = /* @__PURE__ */ new Map();
async function getChatKey(chatId, context) {
	const selfId = context?.selfMemberId || context?.selfId || "me";
	const peerId = context?.peerMemberId || context?.peerId;
	if (selfId && peerId && selfId !== peerId) return deriveDirectChatKey(chatId, selfId, peerId);
	const keys = await initializeE2EE();
	const privateKey = await crypto.subtle.importKey("jwk", keys.privateKeyJwk, {
		name: "ECDH",
		namedCurve: "P-256"
	}, true, ["deriveKey"]);
	let peerKey = peerPublicKeys.get(chatId);
	if (!peerKey) {
		peerKey = keys.publicKey;
		peerPublicKeys.set(chatId, peerKey);
	}
	return deriveSharedKey(privateKey, await importPublicKey(peerKey));
}
async function encryptMessage(chatId, plaintext, context) {
	if (!isE2EEEnabled()) return {
		encrypted: false,
		content: plaintext
	};
	const key = await getChatKey(chatId, context || {});
	const iv = crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(12));
	const encoded = new TextEncoder().encode(String(plaintext ?? ""));
	const ciphertext = await crypto.subtle.encrypt({
		name: "AES-GCM",
		iv
	}, key, encoded);
	return {
		encrypted: true,
		content: JSON.stringify({
			iv: toBase64(iv),
			data: toBase64(ciphertext)
		})
	};
}
async function decryptMessage(chatId, content, isEncrypted, context) {
	if (!isEncrypted || !isE2EEEnabled()) return content;
	try {
		const { iv, data } = typeof content === "string" ? JSON.parse(content) : content;
		const key = await getChatKey(chatId, context || {});
		const decrypted = await crypto.subtle.decrypt({
			name: "AES-GCM",
			iv: fromBase64(iv)
		}, key, fromBase64(data));
		return new TextDecoder().decode(decrypted);
	} catch {
		return "[Encrypted message — unable to decrypt]";
	}
}
function generateSecurityCode(chatId) {
	const code = String(chatId || "").split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) * 7919 % 9e5 + 1e5;
	return String(code).match(/.{1,3}/g).join(" ");
}
//#endregion
//#region src/hooks/useVoiceCall.js
var ICE_SERVERS = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun1.l.google.com:19302" }] };
function useVoiceCall(chatId) {
	const [callState, setCallState] = (0, import_react.useState)("idle");
	const [callDuration, setCallDuration] = (0, import_react.useState)(0);
	const [isMuted, setIsMuted] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const peerConnection = (0, import_react.useRef)(null);
	const localStream = (0, import_react.useRef)(null);
	const durationInterval = (0, import_react.useRef)(null);
	const channelRef = (0, import_react.useRef)(null);
	const cleanup = (0, import_react.useCallback)(() => {
		if (durationInterval.current) {
			clearInterval(durationInterval.current);
			durationInterval.current = null;
		}
		localStream.current?.getTracks().forEach((track) => track.stop());
		localStream.current = null;
		peerConnection.current?.close();
		peerConnection.current = null;
		setCallDuration(0);
		setIsMuted(false);
		setError(null);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!chatId) return;
		channelRef.current = new BroadcastChannel(`nexus-call-${chatId}`);
		channelRef.current.onmessage = async (event) => {
			const { type, sdp, candidate } = event.data;
			if (type === "offer" && callState === "idle") await handleIncomingCall(sdp);
			else if (type === "answer" && peerConnection.current) {
				await peerConnection.current.setRemoteDescription(sdp);
				setCallState("connected");
				startDurationTimer();
			} else if (type === "ice-candidate" && peerConnection.current) await peerConnection.current.addIceCandidate(candidate);
			else if (type === "hangup") endCall();
		};
		return () => {
			channelRef.current?.close();
			cleanup();
		};
	}, [chatId]);
	const startDurationTimer = () => {
		durationInterval.current = setInterval(() => {
			setCallDuration((prev) => prev + 1);
		}, 1e3);
	};
	const createPeerConnection = async () => {
		if (typeof window === "undefined" || typeof RTCPeerConnection === "undefined" || !navigator.mediaDevices?.getUserMedia) throw new Error("Voice calls are not supported in this browser");
		const pc = new RTCPeerConnection(ICE_SERVERS);
		pc.onicecandidate = (event) => {
			if (event.candidate) channelRef.current?.postMessage({
				type: "ice-candidate",
				candidate: event.candidate
			});
		};
		pc.ontrack = (event) => {
			const audio = document.getElementById("remote-audio");
			if (audio) audio.srcObject = event.streams[0];
		};
		pc.onconnectionstatechange = () => {
			if (pc.connectionState === "connected") {
				setCallState("connected");
				startDurationTimer();
			} else if (pc.connectionState === "disconnected" || pc.connectionState === "failed") endCall();
		};
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: false
		});
		localStream.current = stream;
		stream.getTracks().forEach((track) => pc.addTrack(track, stream));
		peerConnection.current = pc;
		return pc;
	};
	const initiateCall = (0, import_react.useCallback)(async () => {
		try {
			setCallState("calling");
			setError(null);
			const pc = await createPeerConnection();
			const offer = await pc.createOffer();
			await pc.setLocalDescription(offer);
			channelRef.current?.postMessage({
				type: "offer",
				sdp: offer
			});
		} catch (err) {
			setError("Microphone access denied or unavailable");
			setCallState("idle");
			cleanup();
		}
	}, [chatId, cleanup]);
	const handleIncomingCall = async (offer) => {
		try {
			setCallState("incoming");
			const pc = await createPeerConnection();
			await pc.setRemoteDescription(offer);
			const answer = await pc.createAnswer();
			await pc.setLocalDescription(answer);
			channelRef.current?.postMessage({
				type: "answer",
				sdp: answer
			});
		} catch (err) {
			setError("Failed to answer call");
			endCall();
		}
	};
	const acceptCall = (0, import_react.useCallback)(async () => {
		if (callState === "incoming" && peerConnection.current) {
			setCallState("connected");
			startDurationTimer();
		}
	}, [callState]);
	const endCall = (0, import_react.useCallback)(() => {
		channelRef.current?.postMessage({ type: "hangup" });
		cleanup();
		setCallState("idle");
	}, [cleanup]);
	const toggleMute = (0, import_react.useCallback)(() => {
		if (localStream.current) {
			localStream.current.getAudioTracks().forEach((track) => {
				track.enabled = isMuted;
			});
			setIsMuted(!isMuted);
		}
	}, [isMuted]);
	const formatDuration = (seconds) => {
		return `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
	};
	return {
		callState,
		callDuration,
		isMuted,
		error,
		initiateCall,
		acceptCall,
		endCall,
		toggleMute,
		formatDuration
	};
}
//#endregion
//#region src/lib/supabaseChat.js
async function sendSupabaseMessage(chatId, message) {
	if (!supabase || !isSupabaseConfigured()) return null;
	const { data, error } = await supabase.from("messages").insert({
		chat_id: chatId,
		sender_id: message.sender_id || null,
		content: message.content,
		type: message.type || "text",
		file_url: message.file_url || null,
		file_name: message.file_name || null,
		encrypted: Boolean(message.encrypted)
	}).select().single();
	if (error) throw error;
	return data;
}
//#endregion
//#region src/components/chat/ChatView.jsx
function ChatView({ chat, onBack, currentUserId = "me", supportConversationId }) {
	const [messages, setMessages] = (0, import_react.useState)(chat?.messages || []);
	const [decryptedMessages, setDecryptedMessages] = (0, import_react.useState)({});
	const messagesEndRef = (0, import_react.useRef)(null);
	const [chatWallpaper] = useSetting("chatWallpaper", "nature");
	const wallpaper = getWallpaperById(chatWallpaper);
	const voiceCall = useVoiceCall(chat.id);
	const chatPeerMemberId = (chat?.members && chat.members.length ? chat.members : chat?.peer_member_id ? [currentUserId, chat.peer_member_id].filter(Boolean) : [currentUserId, chat?.peer_id].filter(Boolean)).find((m) => m !== currentUserId) || chat?.peer_member_id || chat?.peer_id;
	const e2eeContext = {
		selfMemberId: currentUserId,
		peerMemberId: chatPeerMemberId,
		selfId: currentUserId,
		peerId: chatPeerMemberId
	};
	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};
	(0, import_react.useEffect)(() => {
		setMessages(chat?.messages || []);
	}, [chat?.id, chat?.messages]);
	(0, import_react.useEffect)(() => {
		scrollToBottom();
	}, [messages]);
	(0, import_react.useEffect)(() => {
		if (!isE2EEEnabled()) return;
		messages.forEach(async (msg) => {
			if (msg.encrypted && !decryptedMessages[msg.id]) {
				const decrypted = await decryptMessage(chat.id, msg.content, true, e2eeContext);
				const decryptedFileName = msg.file_name ? await decryptMessage(chat.id, msg.file_name, true, e2eeContext) : void 0;
				setDecryptedMessages((prev) => ({
					...prev,
					[msg.id]: decrypted,
					[`${msg.id}_fn`]: decryptedFileName
				}));
			}
		});
	}, [messages, chat.id]);
	const handleSendMessage = async (messageData) => {
		let content = messageData.content || messageData;
		const type = messageData.type || "text";
		let encrypted = false;
		let fileNameEncrypted = null;
		if (!supportConversationId && isE2EEEnabled()) {
			const result = await encryptMessage(chat.id, content, e2eeContext);
			content = result.content;
			encrypted = result.encrypted;
			if (messageData.file_name && encrypted) {
				const fn = await encryptMessage(chat.id, messageData.file_name, e2eeContext);
				if (fn.encrypted) fileNameEncrypted = fn.content;
			}
		}
		const newMessage = {
			id: Date.now().toString(),
			sender_id: currentUserId,
			content,
			type,
			encrypted,
			file_url: messageData.file_url || null,
			file_name: fileNameEncrypted || messageData.file_name || null,
			duration: messageData.duration || null,
			created_at: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (encrypted) setDecryptedMessages((prev) => ({
			...prev,
			[newMessage.id]: messageData.content || messageData,
			[`${newMessage.id}_fn`]: fileNameEncrypted ? messageData.file_name || null : void 0
		}));
		const savedMessage = supportConversationId ? await appendSupportMessage(supportConversationId, newMessage) : await appendMessage(chat.id, newMessage);
		setMessages((prev) => [...prev, savedMessage || newMessage]);
		if (!supportConversationId && chat.id && typeof window !== "undefined") try {
			await sendSupabaseMessage(chat.id, {
				...newMessage,
				sender_id: newMessage.sender_id
			});
		} catch {}
		const preview = type === "text" ? messageData.content || messageData : `${type === "file" ? "Shared a file" : type === "sticker" ? "Sent a sticker" : type === "image" ? "Shared an image" : "Shared media"} · ${messageData.file_name || "Tap to view"}`;
		showIncomingNotification({
			title: chat.title || "New activity",
			preview: preview.length > 80 ? `${preview.slice(0, 77)}...` : preview,
			avatarUrl: chat.avatar_url || "/logo.png",
			type
		});
	};
	const wallpaperStyle = wallpaper.url ? {
		backgroundImage: `url(${wallpaper.url})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "repeat"
	} : { background: wallpaper.preview || "#f3f4f6" };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-1 flex-col min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between bg-white px-3 py-2 dark:bg-gray-800 sm:px-4 sm:py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onBack,
							className: "md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$20, { className: "w-5 h-5 text-gray-700 dark:text-gray-300" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							src: chat.avatar_url,
							alt: chat.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-bold text-gray-900 dark:text-white",
								children: chat.title
							}), (chat.encrypted || isE2EEEnabled()) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$21, {
								className: "w-3.5 h-3.5 text-green-500",
								title: "End-to-end encrypted"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-gray-500 dark:text-gray-400",
							children: voiceCall.callState === "connected" ? "On call" : "Online"
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: voiceCall.initiateCall,
						disabled: voiceCall.callState !== "idle",
						className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 disabled:opacity-50",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$22, { className: "w-5 h-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$23, { className: "w-5 h-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative min-h-0 flex-1 space-y-4 overflow-y-auto p-3 sm:p-4",
				style: wallpaperStyle,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-white/60 dark:bg-gray-900/70 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative space-y-4",
					children: [messages.map((message) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
						message: {
							...message,
							content: message.encrypted ? decryptedMessages[message.id] || "🔒 Decrypting..." : message.content,
							file_name: message.encrypted ? decryptedMessages[`${message.id}_fn`] || message.file_name : message.file_name
						},
						isOwn: message.sender_id === currentUserId
					}, message.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: messagesEndRef })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageInput, { onSendMessage: handleSendMessage })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceCallOverlay, {
				chat,
				voiceCall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				id: "remote-audio",
				autoPlay: true
			})
		]
	});
}
//#endregion
//#region src/pages/SupportPage.jsx
var LOCAL_USERS_KEY = "nexus-chat-users";
function supportChatId(userId) {
	return `support-${userId}`;
}
function displayName(user) {
	return user?.full_name || user?.fullName || `${user?.first_name || user?.firstName || ""} ${user?.last_name || user?.lastName || ""}`.trim() || user?.member_id || user?.nexusId || "User";
}
function SupportPage({ adminMode = false }) {
	const { user } = useAuth();
	const [users, setUsers] = (0, import_react.useState)([]);
	const [selectedUser, setSelectedUser] = (0, import_react.useState)(adminMode ? null : user);
	const [chat, setChat] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (!adminMode) return void 0;
		const channel = startRealtimeListeners();
		return () => stopRealtimeListeners(channel);
	}, [adminMode]);
	(0, import_react.useEffect)(() => {
		if (!adminMode) {
			setSelectedUser(user);
			return;
		}
		const loadUsers = async () => {
			if (isSupabaseConfigured() && supabase) {
				const { data } = await supabase.from("members").select("id, member_id, full_name, first_name, last_name, avatar_url").order("created_at", { ascending: false });
				if (data) {
					setUsers(data);
					if (data[0]) setSelectedUser(data[0]);
					return;
				}
			}
			try {
				const localUsers = JSON.parse(localStorage.getItem(LOCAL_USERS_KEY) || "[]");
				setUsers(localUsers);
				if (localUsers[0]) setSelectedUser(localUsers[0]);
			} catch {
				setUsers([]);
			}
		};
		loadUsers();
	}, [adminMode, user]);
	(0, import_react.useEffect)(() => {
		if (!selectedUser) return;
		let active = true;
		const loadChat = async () => {
			const id = supportChatId(selectedUser.id || selectedUser.member_id || selectedUser.nexusId);
			let nextChat = await getChatById(id);
			if (!nextChat) nextChat = await createChat({
				id,
				title: `Nexus Support · ${displayName(selectedUser)}`,
				type: "support",
				avatar_url: selectedUser.avatar_url || selectedUser.avatarUrl || null
			});
			if (!nextChat.avatar_url && (selectedUser.avatar_url || selectedUser.avatarUrl)) nextChat = {
				...nextChat,
				avatar_url: selectedUser.avatar_url || selectedUser.avatarUrl
			};
			nextChat = {
				...nextChat,
				messages: await getSupportMessages(id)
			};
			if (active) setChat(nextChat);
		};
		loadChat();
		const refresh = () => loadChat();
		window.addEventListener("nexus-chat:updated", refresh);
		return () => {
			active = false;
			window.removeEventListener("nexus-chat:updated", refresh);
		};
	}, [selectedUser]);
	if (adminMode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-slate-950 px-3 py-4 text-slate-100 sm:px-8 sm:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl flex-col sm:min-h-[calc(100vh-4rem)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mb-4 flex shrink-0 gap-4 overflow-x-auto whitespace-nowrap text-sm sm:mb-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/dashboard",
							className: "text-slate-400 hover:text-white",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/users",
							className: "text-slate-400 hover:text-white",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/support",
							className: "font-semibold text-blue-400",
							children: "Support"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "shrink-0 text-xl font-semibold sm:text-2xl",
					children: "Support conversations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 sm:mt-6 sm:rounded-2xl lg:grid-cols-[280px_minmax(0,1fr)] lg:grid-rows-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "flex max-h-36 overflow-x-auto overflow-y-hidden border-b border-slate-800 lg:block lg:max-h-none lg:overflow-y-auto lg:border-b-0 lg:border-r",
						children: [users.map((candidate) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSelectedUser(candidate),
							className: `min-w-[170px] border-r border-slate-800 px-4 py-3 text-left hover:bg-slate-800 lg:block lg:w-full lg:border-b lg:border-r-0 lg:py-4 ${selectedUser?.id === candidate.id ? "bg-slate-800" : ""}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-medium",
								children: displayName(candidate)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-slate-400",
								children: candidate.member_id || candidate.nexus_id
							})]
						}, candidate.id)), !users.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-4 text-sm text-slate-400",
							children: "No users found."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0",
						children: chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {
							chat,
							currentUserId: user?.id || "admin",
							supportConversationId: supportChatId(selectedUser.id || selectedUser.member_id || selectedUser.nexusId)
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "p-6 text-slate-400",
							children: "Select a user to open support chat."
						})
					})]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-0 flex-1 bg-background",
		children: chat ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {
			chat,
			currentUserId: user?.id || "me",
			supportConversationId: supportChatId(user?.id || user?.nexusId),
			onBack: () => window.history.back()
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-6 text-muted-foreground sm:p-8",
			children: "Loading support chat..."
		})
	});
}
//#endregion
//#region src/routes/admin/support.tsx
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
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportPage, { adminMode: true })
});
//#endregion
//#region src/pages/AdminUsers.jsx
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/dashboard",
							className: "text-slate-400 hover:text-white",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/users",
							className: "font-semibold text-blue-400",
							children: "Users"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/feeds",
							className: "text-slate-400 hover:text-white",
							children: "Feeds"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin/support",
							className: "text-slate-400 hover:text-white",
							children: "Support"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
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
//#endregion
//#region src/routes/admin/users.tsx
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
	component: AdminUsers
});
//#endregion
//#region src/pages/Home.jsx
function Home() {
	useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center bg-background p-4 md:p-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-xl rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$24, { className: "w-8 h-8 text-primary" })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-semibold text-card-foreground",
					children: "Start a new chat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm mt-2 text-muted-foreground",
					children: "Create a new conversation to begin messaging with friends and groups."
				})
			]
		})
	});
}
//#endregion
//#region src/routes/app/index.tsx
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
	component: Home
});
//#endregion
//#region src/components/chat/ContactsPanel.jsx
function ContactsPanel() {
	const navigate = useNavigate();
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
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$13, { className: "w-7 h-7 text-primary" }), "Contacts"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Your existing secure contacts on Nexus Network"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setShowAddModal(true),
						className: "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:opacity-90 transition duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$24, { className: "w-4 h-4" }), "Add Contact"]
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$13, { className: "w-8 h-8 text-muted-foreground" })
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
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$25, { className: "w-4 h-4" }), "Chat"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => handleDeleteContact(contact.id),
								className: "p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition duration-200",
								title: "Delete Contact",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$26, { className: "w-4 h-4" })
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
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$27, { className: "w-5 h-5 text-muted-foreground" })
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
//#endregion
//#region src/routes/app/contacts.tsx
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
	component: ContactsPanel
});
//#endregion
//#region src/lib/feeds.js
function formatTimeAgo(dateString) {
	const date = new Date(dateString);
	const diff = Math.max(0, Date.now() - date.getTime());
	const minutes = Math.floor(diff / 6e4);
	const hours = Math.floor(diff / 36e5);
	const days = Math.floor(diff / 864e5);
	if (minutes < 1) return "Just now";
	if (minutes < 60) return `${minutes}m`;
	if (hours < 24) return `${hours}hr`;
	if (days < 7) return `${days}day${days === 1 ? "" : "s"}`;
	return date.toLocaleDateString();
}
function normalizeFeed(feed) {
	return {
		...feed,
		id: String(feed.id),
		userId: feed.profile_id || feed.user_id,
		userName: feed.user_name || feed.author_name || "Nexus member",
		userAvatar: feed.user_avatar || feed.author_avatar || null,
		createdAt: feed.created_at,
		isAdminPost: Boolean(feed.is_admin_post),
		likes: Number(feed.likes || 0),
		likedBy: [],
		comments: Array.isArray(feed.comments) ? feed.comments : []
	};
}
async function getFeeds() {
	if (!supabase || !isSupabaseConfigured()) return [];
	const { data, error } = await supabase.from("feed_posts").select("id, profile_id, user_name, user_avatar, author_name, author_avatar, content, type, status, is_admin_post, likes, comments, created_at").eq("status", "active").order("created_at", { ascending: false });
	if (error) throw error;
	return (data || []).map(normalizeFeed);
}
function subscribeToFeeds(onChange) {
	if (!supabase || !isSupabaseConfigured()) return null;
	return supabase.channel("feed-posts").on("postgres_changes", {
		event: "*",
		schema: "public",
		table: "feed_posts"
	}, onChange).subscribe();
}
function unsubscribeFromFeeds(channel) {
	if (channel && supabase) supabase.removeChannel(channel);
}
//#endregion
//#region src/components/chat/UniversalEmojiPicker.jsx
var EMOJI_CATEGORIES = [
	{
		name: "Smileys",
		icon: "😀",
		emojis: [
			{
				char: "😀",
				name: "happy grin smile smiley"
			},
			{
				char: "😃",
				name: "happy grin smile smiley"
			},
			{
				char: "😄",
				name: "happy grin smile smiley"
			},
			{
				char: "😁",
				name: "grin smile happy beaming"
			},
			{
				char: "😆",
				name: "grin smile happy squinting"
			},
			{
				char: "😅",
				name: "sweat smile happy relieved"
			},
			{
				char: "😂",
				name: "joy tears laugh happy"
			},
			{
				char: "🤣",
				name: "rofl laugh happy rolling"
			},
			{
				char: "😊",
				name: "smile happy blush warm"
			},
			{
				char: "😇",
				name: "halo innocent angel"
			},
			{
				char: "🙂",
				name: "slight smile"
			},
			{
				char: "🙃",
				name: "upside down silly"
			},
			{
				char: "😉",
				name: "wink sly"
			},
			{
				char: "😌",
				name: "relieved content calm"
			},
			{
				char: "😍",
				name: "heart eyes love warm"
			},
			{
				char: "🥰",
				name: "love hearts blush warm"
			},
			{
				char: "😘",
				name: "blow kiss love"
			},
			{
				char: "😗",
				name: "kiss"
			},
			{
				char: "😙",
				name: "kiss smile"
			},
			{
				char: "😚",
				name: "kiss closed eyes"
			},
			{
				char: "😋",
				name: "yum delicious food"
			},
			{
				char: "😛",
				name: "tongue silly"
			},
			{
				char: "😝",
				name: "tongue squinting silly"
			},
			{
				char: "😜",
				name: "tongue winking silly"
			},
			{
				char: "🤪",
				name: "zany crazy silly"
			},
			{
				char: "🤨",
				name: "raised eyebrow skeptical"
			},
			{
				char: "🧐",
				name: "monocle smart"
			},
			{
				char: "🤓",
				name: "nerd smart book"
			},
			{
				char: "😎",
				name: "cool sunglasses sun"
			},
			{
				char: "🥸",
				name: "disguise mask"
			},
			{
				char: "🤩",
				name: "star struck excited"
			},
			{
				char: "🥳",
				name: "party celebrate"
			},
			{
				char: "😏",
				name: "smirk sly"
			},
			{
				char: "😒",
				name: "unamused annoyed"
			},
			{
				char: "😞",
				name: "disappointed sad"
			},
			{
				char: "😔",
				name: "pensive sad"
			},
			{
				char: "😟",
				name: "worried sad"
			},
			{
				char: "😕",
				name: "confused"
			},
			{
				char: "🙁",
				name: "frown sad"
			},
			{
				char: "☹️",
				name: "frown sad"
			},
			{
				char: "😣",
				name: "persevere struggle"
			},
			{
				char: "😖",
				name: "confounded struggle"
			},
			{
				char: "😫",
				name: "tired weary"
			},
			{
				char: "😩",
				name: "weary tired"
			},
			{
				char: "🥺",
				name: "pleading beg sad"
			},
			{
				char: "😢",
				name: "cry tear sad"
			},
			{
				char: "😭",
				name: "sob cry tear sad loud"
			},
			{
				char: "😤",
				name: "triumph angry steam"
			},
			{
				char: "😠",
				name: "angry mad annoyed"
			},
			{
				char: "😡",
				name: "rage angry mad red"
			}
		]
	},
	{
		name: "Gestures",
		icon: "👍",
		emojis: [
			{
				char: "👍",
				name: "thumbs up like ok"
			},
			{
				char: "👎",
				name: "thumbs down dislike no"
			},
			{
				char: "👊",
				name: "fist punch hit"
			},
			{
				char: "✊",
				name: "fist raised power"
			},
			{
				char: "🤛",
				name: "fist left"
			},
			{
				char: "🤜",
				name: "fist right"
			},
			{
				char: "🤞",
				name: "fingers crossed luck"
			},
			{
				char: "✌️",
				name: "victory peace sign"
			},
			{
				char: "🤟",
				name: "love sign rock"
			},
			{
				char: "🤘",
				name: "horns metal rock"
			},
			{
				char: "👌",
				name: "ok sign correct"
			},
			{
				char: "🤌",
				name: "pinched fingers italian"
			},
			{
				char: "🤏",
				name: "pinching small"
			},
			{
				char: "👈",
				name: "point left"
			},
			{
				char: "👉",
				name: "point right"
			},
			{
				char: "👆",
				name: "point up"
			},
			{
				char: "👇",
				name: "point down"
			},
			{
				char: "☝️",
				name: "point up hand"
			},
			{
				char: "✋",
				name: "raised hand stop"
			},
			{
				char: "🤚",
				name: "raised back hand"
			},
			{
				char: "🖐️",
				name: "hand fingers splayed"
			},
			{
				char: "🖖",
				name: "vulcan salute sci fi"
			},
			{
				char: "👋",
				name: "wave hello goodbye"
			},
			{
				char: "🤙",
				name: "call me phone"
			},
			{
				char: "💪",
				name: "flex bicep strong strength"
			},
			{
				char: "🙏",
				name: "please pray thanks high five"
			},
			{
				char: "🤝",
				name: "handshake agree deal"
			},
			{
				char: "👏",
				name: "clap applaud"
			},
			{
				char: "🙌",
				name: "hooray celebrate hands"
			},
			{
				char: "🫶",
				name: "heart hands love"
			}
		]
	},
	{
		name: "Hearts",
		icon: "❤️",
		emojis: [
			{
				char: "❤️",
				name: "red heart love"
			},
			{
				char: "🧡",
				name: "orange heart love"
			},
			{
				char: "💛",
				name: "yellow heart love"
			},
			{
				char: "💚",
				name: "green heart love"
			},
			{
				char: "💙",
				name: "blue heart love"
			},
			{
				char: "💜",
				name: "purple heart love"
			},
			{
				char: "🖤",
				name: "black heart love"
			},
			{
				char: "🤍",
				name: "white heart love"
			},
			{
				char: "🤎",
				name: "brown heart love"
			},
			{
				char: "💔",
				name: "broken heart sad"
			},
			{
				char: "❤️‍🔥",
				name: "heart on fire love"
			},
			{
				char: "❤️‍🩹",
				name: "mending heart heal"
			},
			{
				char: "❣️",
				name: "heart exclamation"
			},
			{
				char: "💕",
				name: "two hearts love"
			},
			{
				char: "💞",
				name: "revolving hearts love"
			},
			{
				char: "💓",
				name: "beating heart love"
			},
			{
				char: "💗",
				name: "growing heart love"
			},
			{
				char: "💖",
				name: "sparkle heart love"
			},
			{
				char: "💘",
				name: "arrow heart love"
			},
			{
				char: "💝",
				name: "ribbon heart gift"
			}
		]
	},
	{
		name: "Animals",
		icon: "🐱",
		emojis: [
			{
				char: "🐶",
				name: "dog puppy pet animal"
			},
			{
				char: "🐱",
				name: "cat kitten pet animal"
			},
			{
				char: "🐭",
				name: "mouse rat animal"
			},
			{
				char: "🐹",
				name: "hamster animal"
			},
			{
				char: "🐰",
				name: "rabbit bunny animal"
			},
			{
				char: "🦊",
				name: "fox animal"
			},
			{
				char: "🐻",
				name: "bear animal"
			},
			{
				char: "🐼",
				name: "panda animal"
			},
			{
				char: "🐨",
				name: "koala animal"
			},
			{
				char: "🐯",
				name: "tiger animal"
			},
			{
				char: "🦁",
				name: "lion king animal"
			},
			{
				char: "🐮",
				name: "cow animal"
			},
			{
				char: "🐷",
				name: "pig animal"
			},
			{
				char: "🐸",
				name: "frog animal"
			},
			{
				char: "🐵",
				name: "monkey animal"
			},
			{
				char: "🐔",
				name: "chicken bird animal"
			},
			{
				char: "🐧",
				name: "penguin bird animal"
			},
			{
				char: "🐦",
				name: "bird animal"
			},
			{
				char: "🦆",
				name: "duck bird animal"
			},
			{
				char: "🦅",
				name: "eagle bird animal"
			},
			{
				char: "🦉",
				name: "owl bird animal"
			},
			{
				char: "🦋",
				name: "butterfly insect"
			},
			{
				char: "🐝",
				name: "bee insect honey"
			},
			{
				char: "🐛",
				name: "bug caterpillar insect"
			},
			{
				char: "🐌",
				name: "snail insect"
			}
		]
	},
	{
		name: "Food",
		icon: "🍎",
		emojis: [
			{
				char: "🍏",
				name: "apple green fruit"
			},
			{
				char: "🍎",
				name: "apple red fruit"
			},
			{
				char: "🍐",
				name: "pear fruit"
			},
			{
				char: "🍊",
				name: "orange tangerine fruit"
			},
			{
				char: "🍋",
				name: "lemon fruit"
			},
			{
				char: "🍌",
				name: "banana fruit"
			},
			{
				char: "🍉",
				name: "watermelon fruit"
			},
			{
				char: "🍇",
				name: "grape fruit"
			},
			{
				char: "🍓",
				name: "strawberry fruit berry"
			},
			{
				char: "🫐",
				name: "blueberry fruit berry"
			},
			{
				char: "🍔",
				name: "hamburger burger fast food"
			},
			{
				char: "🍟",
				name: "fries chips fast food"
			},
			{
				char: "🍕",
				name: "pizza cheese fast food"
			},
			{
				char: "🥪",
				name: "sandwich bread food"
			},
			{
				char: "🌮",
				name: "taco mexican food"
			},
			{
				char: " Donuts",
				name: "donut sweet cake"
			},
			{
				char: "🍪",
				name: "cookie sweet biscuit"
			},
			{
				char: "🎂",
				name: "cake birthday sweet"
			},
			{
				char: "🍰",
				name: "cake slice sweet"
			},
			{
				char: "🥤",
				name: "soda cup drink"
			}
		]
	},
	{
		name: "Symbols",
		icon: "💡",
		emojis: [
			{
				char: "💡",
				name: "bulb light idea"
			},
			{
				char: "🕯️",
				name: "candle light"
			},
			{
				char: "🔦",
				name: "flashlight light"
			},
			{
				char: "🔔",
				name: "bell ring notification"
			},
			{
				char: "🔕",
				name: "bell mute silent"
			},
			{
				char: "🎵",
				name: "music note song"
			},
			{
				char: "🎶",
				name: "music notes song"
			},
			{
				char: "🎧",
				name: "headphones music"
			},
			{
				char: "🎨",
				name: "palette paint art"
			},
			{
				char: "🎮",
				name: "controller game video"
			},
			{
				char: "🎯",
				name: "target bullseye hit"
			},
			{
				char: "🔮",
				name: "crystal ball magic"
			},
			{
				char: "🎈",
				name: "balloon party celebrate"
			},
			{
				char: "🎉",
				name: "party popper celebrate"
			},
			{
				char: "🎊",
				name: "confetti celebrate"
			},
			{
				char: "🎁",
				name: "gift present box"
			},
			{
				char: "🎀",
				name: "ribbon bow"
			}
		]
	}
];
function UniversalEmojiPicker({ onSelect, onClose }) {
	const [search, setSearch] = (0, import_react.useState)("");
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("Smileys");
	const filteredEmojis = search.trim() ? EMOJI_CATEGORIES.flatMap((cat) => cat.emojis).filter((emoji) => emoji.name.toLowerCase().includes(search.toLowerCase())) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 cursor-default",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative bg-card w-full max-w-sm rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col h-[400px] z-10 animate-in fade-in zoom-in-95 duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 border-b border-border flex items-center justify-between bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-foreground text-sm",
						children: "Select Reaction Emoji"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "p-1 hover:bg-muted rounded-full transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$27, { className: "w-4 h-4 text-muted-foreground" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-2 border-b border-border bg-card",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$10, { className: "absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "Search emojis...",
							value: search,
							onChange: (e) => setSearch(e.target.value),
							className: "w-full pl-8 pr-3 py-1.5 bg-muted border-none rounded-lg text-xs text-foreground focus:ring-1 focus:ring-primary focus:outline-none"
						})]
					})
				}),
				!search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-around border-b border-border bg-muted/20 py-1 flex-shrink-0",
					children: EMOJI_CATEGORIES.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveCategory(category.name),
						className: `p-1.5 rounded-lg text-base hover:bg-muted transition-colors ${activeCategory === category.name ? "bg-muted scale-110 shadow-sm border border-border/60" : ""}`,
						title: category.name,
						children: category.icon
					}, category.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto p-3",
					children: search ? filteredEmojis.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-xs text-muted-foreground mt-8",
						children: "No matching emojis"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-2",
						children: filteredEmojis.map((emoji, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(emoji.char),
							className: "text-2xl w-10 h-10 flex items-center justify-center hover:bg-muted active:scale-90 rounded-lg transition",
							children: emoji.char
						}, index))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-6 gap-2",
						children: EMOJI_CATEGORIES.find((cat) => cat.name === activeCategory)?.emojis.map((emoji, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onSelect(emoji.char),
							className: "text-2xl w-10 h-10 flex items-center justify-center hover:bg-muted active:scale-90 rounded-lg transition",
							children: emoji.char
						}, index))
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/FeedsPage.jsx
function FeedsPage() {
	const [feeds, setFeeds] = (0, import_react.useState)([]);
	const [contacts, setContacts] = (0, import_react.useState)([]);
	const [activeCommentFeedId, setActiveCommentFeedId] = (0, import_react.useState)(null);
	const [activeShareFeedId, setActiveShareFeedId] = (0, import_react.useState)(null);
	const [commentInputs, setCommentInputs] = (0, import_react.useState)({});
	const [copiedStatus, setCopiedStatus] = (0, import_react.useState)(false);
	const [sharedStatus, setSharedStatus] = (0, import_react.useState)({});
	const [activeReactCommentId, setActiveReactCommentId] = (0, import_react.useState)(null);
	const [pickerTarget, setPickerTarget] = (0, import_react.useState)(null);
	const [, setTimeTick] = (0, import_react.useState)(0);
	const navigate = useNavigate();
	const { user } = useAuth();
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
	(0, import_react.useEffect)(() => {
		let active = true;
		const loadFeeds = async () => {
			try {
				const nextFeeds = await getFeeds();
				if (active) setFeeds(nextFeeds);
			} catch {
				if (active) setFeeds([]);
			}
		};
		loadFeeds();
		const channel = subscribeToFeeds(loadFeeds);
		return () => {
			active = false;
			unsubscribeFromFeeds(channel);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const intervalId = window.setInterval(() => setTimeTick((value) => value + 1), 3e4);
		return () => window.clearInterval(intervalId);
	}, []);
	(0, import_react.useEffect)(() => {
		setSharedStatus({});
		setCopiedStatus(false);
	}, [activeShareFeedId]);
	const toggleLike = (feedId) => {
		if (!user) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) {
				const isLiked = feed.likedBy?.includes(user.id);
				return {
					...feed,
					likedBy: isLiked ? feed.likedBy.filter((id) => id !== user.id) : [...feed.likedBy || [], user.id],
					likes: isLiked ? feed.likes - 1 : feed.likes + 1
				};
			}
			return feed;
		}));
	};
	const handleCommentInputChange = (feedId, value) => {
		setCommentInputs((prev) => ({
			...prev,
			[feedId]: value
		}));
	};
	const [activeReplyCommentId, setActiveReplyCommentId] = (0, import_react.useState)(null);
	const [replyInputs, setReplyInputs] = (0, import_react.useState)({});
	const handleLikeComment = (feedId, commentId) => {
		if (!user) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: feed.comments.map((comment) => {
					if (comment.id === commentId) {
						const isLiked = comment.likedBy?.includes(user.id);
						return {
							...comment,
							likedBy: isLiked ? comment.likedBy.filter((id) => id !== user.id) : [...comment.likedBy || [], user.id],
							likes: isLiked ? (comment.likes || 0) - 1 : (comment.likes || 0) + 1
						};
					}
					return comment;
				})
			};
			return feed;
		}));
	};
	const handleReactComment = (feedId, commentId, emoji) => {
		if (!user) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: feed.comments.map((comment) => {
					if (comment.id === commentId) {
						const previousReaction = comment.reactedBy?.[user.id];
						const reactions = { ...comment.reactions || {} };
						const reactedBy = { ...comment.reactedBy || {} };
						if (previousReaction) {
							if (reactions[previousReaction] > 0) {
								reactions[previousReaction]--;
								if (reactions[previousReaction] === 0) delete reactions[previousReaction];
							}
						}
						if (previousReaction !== emoji) {
							reactions[emoji] = (reactions[emoji] || 0) + 1;
							reactedBy[user.id] = emoji;
						} else delete reactedBy[user.id];
						return {
							...comment,
							reactions,
							reactedBy
						};
					}
					return comment;
				})
			};
			return feed;
		}));
	};
	const handleReplyInputChange = (commentId, value) => {
		setReplyInputs((prev) => ({
			...prev,
			[commentId]: value
		}));
	};
	const handleAddReply = (feedId, commentId) => {
		const text = replyInputs[commentId] || "";
		if (!text.trim()) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: feed.comments.map((comment) => {
					if (comment.id === commentId) return {
						...comment,
						replies: [...comment.replies || [], {
							id: Date.now().toString(),
							userName: user?.fullName || user?.email?.split("@")[0] || "You",
							userAvatar: user?.avatarUrl || null,
							content: text.trim(),
							createdAt: (/* @__PURE__ */ new Date()).toISOString()
						}]
					};
					return comment;
				})
			};
			return feed;
		}));
		setReplyInputs((prev) => ({
			...prev,
			[commentId]: ""
		}));
	};
	const handleAddComment = (feedId) => {
		const commentText = commentInputs[feedId] || "";
		if (!commentText.trim()) return;
		setFeeds((prevFeeds) => prevFeeds.map((feed) => {
			if (feed.id === feedId) return {
				...feed,
				comments: [...feed.comments, {
					id: Date.now().toString(),
					userName: user?.fullName || user?.email?.split("@")[0] || "You",
					userAvatar: user?.avatarUrl || null,
					content: commentText.trim(),
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					likes: 0,
					likedBy: [],
					reactions: {},
					reactedBy: {},
					replies: []
				}]
			};
			return feed;
		}));
		setCommentInputs((prev) => ({
			...prev,
			[feedId]: ""
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex-1 flex flex-col bg-background text-foreground h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sticky top-0 z-10 p-4 border-b border-border flex items-center gap-4 bg-card shadow-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => navigate("/app"),
					className: "p-2 hover:bg-muted rounded-full transition",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$20, { className: "w-5 h-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-bold",
					children: "Feeds"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 overflow-y-auto p-4 space-y-4 max-w-2xl mx-auto w-full",
				children: [feeds.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium text-foreground",
						children: "No feed posts yet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Posts from your Nexus community will appear here."
					})]
				}), feeds.map((feed) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-card rounded-xl shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-4 flex items-center justify-between",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-center w-10 h-10 rounded-full bg-primary/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$12, { className: "w-6 h-6 text-primary" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-foreground",
											children: feed.userName
										}), feed.isAdminPost && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium",
											children: "Nexus Badge"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: formatTimeAgo(feed.createdAt)
									})]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-4 pb-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground leading-relaxed",
								children: feed.content
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-4 py-2 flex items-center justify-between text-muted-foreground text-sm border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$28, { className: "w-4 h-4 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feed.likes })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [feed.comments.length, " comments"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "px-2 py-1 flex items-center justify-between",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toggleLike(feed.id),
									className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-muted transition",
									children: [feed.likedBy?.includes(user?.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$28, { className: "w-5 h-5 text-red-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$29, { className: "w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: feed.likedBy?.includes(user?.id) ? "text-red-500 font-medium" : "text-muted-foreground",
										children: "Like"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveCommentFeedId(feed.id),
									className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-muted transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$30, { className: "w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Comment"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setActiveShareFeedId(feed.id),
									className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-md hover:bg-muted transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$31, { className: "w-5 h-5 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: "Share"
									})]
								})
							]
						})
					]
				}, feed.id))]
			}),
			activeCommentFeedId && (() => {
				const activeCommentFeed = feeds.find((f) => f.id === activeCommentFeedId);
				if (!activeCommentFeed) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 cursor-default",
						onClick: () => setActiveCommentFeedId(null)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-card w-full max-w-lg rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col max-h-[85vh] z-10 animate-in fade-in zoom-in-95 duration-200",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-4 border-b border-border flex items-center justify-between bg-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-foreground text-lg",
									children: "Comments"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: [
										"On ",
										activeCommentFeed.userName,
										"'s post"
									]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveCommentFeedId(null),
									className: "p-1.5 hover:bg-muted rounded-full transition",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$27, { className: "w-5 h-5 text-muted-foreground" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex-1 overflow-y-auto p-4 space-y-4",
								children: activeCommentFeed.comments.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center justify-center py-12 text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$30, { className: "w-12 h-12 text-muted-foreground/40 mb-2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground",
											children: "No comments yet"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Be the first to share your thoughts!"
										})
									]
								}) : activeCommentFeed.comments.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-3 border-b border-border/40 pb-4 last:border-0 last:pb-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
										src: comment.userAvatar,
										alt: comment.userName,
										size: "sm"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "bg-muted dark:bg-muted/40 px-4 py-2.5 rounded-2xl relative group",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-bold text-foreground mr-1.5",
														children: comment.userName
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-foreground break-words",
														children: comment.content
													}),
													comment.reactions && Object.values(comment.reactions).some((count) => count > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "absolute -bottom-2 right-3 flex items-center gap-1 bg-card border border-border px-1.5 py-0.5 rounded-full shadow-sm text-xs",
														children: Object.entries(comment.reactions).filter(([_, count]) => count > 0).map(([emoji, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center gap-0.5 select-none",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: emoji }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-muted-foreground font-medium",
																children: count
															})]
														}, emoji))
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4 text-xs text-muted-foreground ml-2 mt-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px]",
														children: formatTimeAgo(comment.createdAt)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => handleLikeComment(activeCommentFeed.id, comment.id),
														className: `hover:underline font-semibold transition ${comment.likedBy?.includes(user?.id) ? "text-red-500 font-bold" : ""}`,
														children: comment.likes > 0 ? `${comment.likes} Like` : "Like"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															onClick: () => setActiveReactCommentId(activeReactCommentId === comment.id ? null : comment.id),
															className: "hover:underline font-semibold flex items-center gap-0.5",
															children: "React"
														}), activeReactCommentId === comment.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "fixed inset-0 z-10",
															onClick: () => setActiveReactCommentId(null)
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "absolute bottom-full left-0 mb-1.5 flex items-center gap-1.5 bg-card border border-border px-2 py-1.5 rounded-full shadow-lg z-20 animate-in fade-in slide-in-from-bottom-2 duration-100",
															children: [[
																"👍",
																"❤️",
																"😂",
																"😮",
																"😢",
																"🙏"
															].map((emoji) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => {
																	handleReactComment(activeCommentFeed.id, comment.id, emoji);
																	setActiveReactCommentId(null);
																},
																className: "text-base hover:scale-125 active:scale-95 transition",
																children: emoji
															}, emoji)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => {
																	setPickerTarget({
																		feedId: activeCommentFeed.id,
																		commentId: comment.id
																	});
																	setActiveReactCommentId(null);
																},
																className: "w-6 h-6 flex items-center justify-center bg-muted hover:bg-muted-foreground/20 text-muted-foreground font-bold rounded-full text-sm transition",
																title: "Add reaction",
																children: "+"
															})]
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setActiveReplyCommentId(activeReplyCommentId === comment.id ? null : comment.id),
														className: "hover:underline font-semibold",
														children: comment.replies && comment.replies.length > 0 ? `Reply (${comment.replies.length})` : "Reply"
													})
												]
											}),
											comment.replies && comment.replies.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 ml-4 pl-4 border-l border-border/80 space-y-3",
												children: comment.replies.map((reply) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
														src: reply.userAvatar,
														alt: reply.userName,
														size: "sm",
														className: "w-6 h-6"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-muted/60 dark:bg-muted/30 px-3 py-2 rounded-xl",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs font-bold text-foreground mr-1.5",
																children: reply.userName
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs text-foreground break-words",
																children: reply.content
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[9px] text-muted-foreground ml-2 mt-0.5 block",
															children: formatTimeAgo(reply.createdAt)
														})]
													})]
												}, reply.id))
											}),
											activeReplyCommentId === comment.id && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-2.5 ml-4 pl-4 border-l border-border/80 flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: `Reply to ${comment.userName}...`,
													value: replyInputs[comment.id] || "",
													onChange: (e) => handleReplyInputChange(comment.id, e.target.value),
													onKeyDown: (e) => {
														if (e.key === "Enter") handleAddReply(activeCommentFeed.id, comment.id);
													},
													className: "flex-1 bg-muted/60 dark:bg-muted/30 border border-border/60 rounded-full px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => handleAddReply(activeCommentFeed.id, comment.id),
													className: "bg-primary text-primary-foreground rounded-full p-1.5 hover:opacity-90 transition flex items-center justify-center",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$19, { className: "w-3.5 h-3.5" })
												})]
											})
										]
									})]
								}, comment.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4 border-t border-border bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										placeholder: "Write a comment...",
										value: commentInputs[activeCommentFeed.id] || "",
										onChange: (e) => handleCommentInputChange(activeCommentFeed.id, e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter") handleAddComment(activeCommentFeed.id);
										},
										className: "flex-1 bg-muted border border-border rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => handleAddComment(activeCommentFeed.id),
										className: "bg-primary text-primary-foreground rounded-full p-2.5 hover:opacity-90 transition flex items-center justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$19, { className: "w-4 h-4" })
									})]
								})
							})
						]
					})]
				});
			})(),
			activeShareFeedId && (() => {
				const activeShareFeed = feeds.find((f) => f.id === activeShareFeedId);
				if (!activeShareFeed) return null;
				const handleCopyLink = () => {
					const link = `${window.location.origin}/app/feeds#post-${activeShareFeed.id}`;
					navigator.clipboard.writeText(link);
					setCopiedStatus(true);
					setTimeout(() => setCopiedStatus(false), 2e3);
				};
				const handleSendToContact = async (contact) => {
					let chat = (await getChats()).find((c) => c.title === contact.name);
					if (!chat) chat = await createChat({
						title: contact.name,
						type: "private",
						avatar_url: null
					});
					const content = `📢 Shared post by ${activeShareFeed.userName}:\n\n"${activeShareFeed.content}"`;
					await appendMessage(chat.id, {
						content,
						type: "text",
						sender_id: "me"
					});
					setSharedStatus((prev) => ({
						...prev,
						[contact.id]: true
					}));
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 cursor-default",
						onClick: () => setActiveShareFeedId(null)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative bg-card w-full max-w-md rounded-2xl shadow-xl overflow-hidden border border-border flex flex-col max-h-[85vh] z-10 animate-in fade-in zoom-in-95 duration-200",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 border-b border-border flex items-center justify-between bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-foreground text-lg",
								children: "Share Post"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Share this post with others"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActiveShareFeedId(null),
								className: "p-1.5 hover:bg-muted rounded-full transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$27, { className: "w-5 h-5 text-muted-foreground" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 overflow-y-auto p-4 space-y-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-foreground",
									children: "Copy Link"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 bg-muted dark:bg-muted/50 p-2.5 rounded-xl border border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$32, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted-foreground truncate flex-1 select-all",
											children: `${window.location.origin}/app/feeds#post-${activeShareFeed.id}`
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: handleCopyLink,
											className: `px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 flex items-center gap-1 flex-shrink-0 ${copiedStatus ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:opacity-90"}`,
											children: copiedStatus ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$33, { className: "w-3.5 h-3.5" }), "Copied"] }) : "Copy"
										})
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-sm font-semibold text-foreground",
									children: "Send to Nexus Contacts"
								}), contacts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground text-center py-4",
									children: "No contacts found"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2.5 max-h-60 overflow-y-auto pr-1",
									children: contacts.map((contact) => {
										const isSent = sharedStatus[contact.id];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between p-2 rounded-xl border border-border bg-card hover:bg-muted/10 transition",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
													src: contact.avatarUrl,
													alt: contact.name,
													size: "sm"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm font-bold text-foreground block leading-none",
													children: contact.name
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-[10px] text-muted-foreground",
													children: ["ID: ", contact.nexusId]
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleSendToContact(contact),
												disabled: isSent,
												className: `px-3 py-1.5 rounded-lg text-xs font-medium transition duration-200 flex items-center gap-1 ${isSent ? "bg-green-500/10 text-green-500 border border-green-500/20 cursor-default" : "bg-secondary text-secondary-foreground hover:bg-muted"}`,
												children: isSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$33, { className: "w-3.5 h-3.5" }), "Sent"] }) : "Send"
											})]
										}, contact.id);
									})
								})]
							})]
						})]
					})]
				});
			})(),
			pickerTarget && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UniversalEmojiPicker, {
				onSelect: (emoji) => {
					handleReactComment(pickerTarget.feedId, pickerTarget.commentId, emoji);
					setPickerTarget(null);
				},
				onClose: () => setPickerTarget(null)
			})
		]
	});
}
//#endregion
//#region src/routes/app/feeds.tsx
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
	component: FeedsPage
});
//#endregion
//#region src/routes/app/support.tsx
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
	component: SupportPage
});
//#endregion
//#region src/pages/ChatPage.jsx
function ChatPage() {
	const { chatId } = useParams();
	const navigate = useNavigate();
	const [chat, setChat] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		let active = true;
		const syncChat = async () => {
			setLoading(true);
			const nextChat = await getChatById(chatId);
			if (active) {
				setChat(nextChat);
				setLoading(false);
			}
		};
		syncChat();
		const handleUpdate = () => {
			syncChat();
		};
		window.addEventListener("nexus-chat:updated", handleUpdate);
		return () => {
			active = false;
			window.removeEventListener("nexus-chat:updated", handleUpdate);
		};
	}, [chatId]);
	(0, import_react.useEffect)(() => {
		if (!loading && !chat) navigate("/app", { replace: true });
	}, [
		chat,
		loading,
		navigate
	]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex-1 flex items-center justify-center bg-background h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-primary" })
	});
	if (!chat) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatView, {
		chat,
		onBack: () => navigate("/app")
	});
}
//#endregion
//#region src/routes/app/chat.$chatId.tsx
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
	component: ChatPage
});
//#endregion
//#region src/components/chat/settings/SettingsShell.jsx
function SettingsShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-4",
		children
	});
}
//#endregion
//#region src/components/chat/settings/SettingsRow.jsx
function SettingsRow({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-gray-900 dark:text-white",
			children: label
		}), children]
	});
}
//#endregion
//#region src/components/chat/settings/AppearanceSettings.jsx
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
//#endregion
//#region src/components/chat/settings/PrivacySettings.jsx
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$34, { className: "w-4 h-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
						children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$33, { className: "w-4 h-4 text-green-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$35, { className: "w-4 h-4 text-muted-foreground" })
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
//#endregion
//#region src/components/chat/settings/ProfileEdit.jsx
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
//#endregion
//#region src/pages/SettingsPage.jsx
function SettingsMenu() {
	const navigate = useNavigate();
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
	const navigate = useNavigate();
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
	const subPath = useLocation().pathname.split("/app/settings/")[1];
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
//#region src/routes/app/settings.index.tsx
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
	component: SettingsPage
});
//#endregion
//#region src/routes/app/settings.$section.tsx
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
	component: SettingsPage
});
//#endregion
//#region src/routeTree.gen.ts
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
//#endregion
//#region src/router.tsx
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
