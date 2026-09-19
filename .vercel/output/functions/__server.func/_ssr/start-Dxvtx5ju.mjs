import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
import { n as createMiddleware, r as renderErrorPage, t as createCsrfMiddleware } from "./error-page-nWROVIJU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-Dxvtx5ju.js
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart = (getOptions) => {
	return {
		getOptions: async () => {
			const options = await getOptions();
			if (options.serializationAdapters) {
				const deduped = /* @__PURE__ */ new Set();
				dedupeSerializationAdapters(deduped, options.serializationAdapters);
				options.serializationAdapters = Array.from(deduped);
			}
			return options;
		},
		createMiddleware
	};
};
var DEFAULT_SUPABASE_URL = "https://ozmakhxeotvqvuaytnic.supabase.co";
var DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_teYLzCRnc1adcwBcv8XdIQ_Xf80ZGt6";
function getEnv(key, fallback = "") {
	if (typeof process !== "undefined" && process.env) return process.env[key] || fallback;
	if (typeof import.meta !== "undefined" && {
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
	}) return {
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
	}[key] || fallback;
	return fallback;
}
var supabaseUrl = getEnv("VITE_SUPABASE_URL") || getEnv("NEXT_PUBLIC_SUPABASE_URL") || getEnv("SUPABASE_URL") || DEFAULT_SUPABASE_URL;
var supabaseAnonKey = getEnv("VITE_SUPABASE_ANON_KEY") || getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY") || getEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") || DEFAULT_SUPABASE_ANON_KEY;
var supabaseServiceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY") || getEnv("VITE_SUPABASE_SERVICE_ROLE_KEY") || getEnv("SUPABASE_SECRET_KEY") || "";
var isServiceRoleAvailable = Boolean(supabaseServiceRoleKey);
function createBrowserSupabase() {
	return supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} }) : null;
}
function createAdminSupabase() {
	if (!supabaseUrl) return null;
	return createClient(supabaseUrl, isServiceRoleAvailable ? supabaseServiceRoleKey : supabaseAnonKey, { auth: {
		persistSession: false,
		autoRefreshToken: false
	} });
}
async function validateAdminFromRequest(request) {
	const match = (request.headers.get("authorization") || "").match(/^Bearer\s+(.+)$/i);
	if (!match || !match[1]) return { error: {
		status: 401,
		message: "Missing or invalid authorization header."
	} };
	const jwt = match[1];
	const sb = createBrowserSupabase();
	if (!sb) return { error: {
		status: 500,
		message: "Database connection is currently unavailable. Please try again in a moment."
	} };
	const { data: authData, error: authError } = await sb.auth.getUser(jwt);
	if (authError || !authData?.user) return { error: {
		status: 401,
		message: "Expired or invalid admin session. Please sign in again."
	} };
	const userId = authData.user.id;
	const { data: roleData, error: roleError } = await sb.from("members").select("role, id").eq("auth_user_id", userId).maybeSingle();
	if (roleError) {
		const { data: hasRoleData, error: hasRoleError } = await sb.rpc("has_role", {
			_user_id: userId,
			_role: "admin"
		});
		if (!hasRoleError && hasRoleData === true) return {
			userId,
			isAdmin: true,
			jwt
		};
		return { error: {
			status: 403,
			message: "This account is not authorized for administration."
		} };
	}
	if (!roleData || roleData.role !== "admin") return { error: {
		status: 403,
		message: "This account is not authorized for administration."
	} };
	return {
		userId,
		isAdmin: true,
		jwt,
		memberId: roleData.id
	};
}
function jsonResponse(data, status = 200, extraHeaders = {}) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			"content-type": "application/json; charset=utf-8",
			...extraHeaders
		}
	});
}
function errorResponse(status, message) {
	return jsonResponse({ error: message }, status);
}
var ADMIN_SELECT_FIELDS = "id, member_id, nexus_id, first_name, last_name, full_name, email, role, wallet_balance, avatar_url, is_active, last_seen_at, created_at, auth_user_id, profile_id";
var FEEDS_SELECT_FIELDS = "id, profile_id, user_name, user_avatar, content, type, status, is_admin_post, likes, comments, created_at";
function normalizeCommentsCount(comments) {
	if (Array.isArray(comments)) return comments.length;
	if (comments && typeof comments === "object") return Object.keys(comments).length;
	return 0;
}
async function getAdminUsers() {
	const sb = createAdminSupabase() || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	const { data, error } = await sb.from("members").select(ADMIN_SELECT_FIELDS).order("created_at", { ascending: false }).limit(1e3);
	if (error) return errorResponse(500, error.message || "Failed to load members.");
	return jsonResponse({
		users: (data || []).map((m) => ({
			...m,
			wallet_balance: Number(m.wallet_balance || 0)
		})),
		total: (data || []).length
	});
}
async function createAdminUser(user) {
	const sbAdmin = createAdminSupabase();
	const sb = sbAdmin || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	const firstName = String(user.first_name || user.firstName || "").trim();
	const lastName = String(user.last_name || user.lastName || "").trim();
	const fullName = String(user.full_name || user.fullName || [firstName, lastName].filter(Boolean).join(" ") || "").trim();
	const email = String(user.email || "").trim().toLowerCase();
	const password = String(user.user_password || user.password || "").trim();
	const role = [
		"admin",
		"moderator",
		"user"
	].includes(user.role) ? user.role : "user";
	const isActive = user.is_active !== false;
	const walletBalance = Number(user.wallet_balance ?? user.walletBalance ?? 0);
	const avatarUrl = user.avatar_url || user.avatarUrl || null;
	let memberId = String(user.member_id || user.memberId || user.nexus_id || "").trim();
	let nexusId = String(user.nexus_id || user.nexusId || "").trim();
	if (!memberId) {
		nexusId = "10" + String(Math.floor(Math.random() * 1e8)).padStart(8, "0");
		memberId = nexusId;
	}
	if (!nexusId) nexusId = memberId.replace(/\D/g, "").slice(0, 10);
	let authUserId = null;
	if (sbAdmin && isServiceRoleAvailable && email && password) try {
		const { data: createAuthData, error: createAuthError } = await sbAdmin.auth.admin.createUser({
			email,
			password,
			email_confirm: true
		});
		if (!createAuthError && createAuthData?.user?.id) authUserId = createAuthData.user.id;
	} catch {}
	try {
		let result;
		if (sbAdmin && isServiceRoleAvailable) {
			const { data, error: insertError } = await sbAdmin.from("members").insert({
				member_id: memberId,
				nexus_id: nexusId || null,
				first_name: firstName,
				last_name: lastName,
				full_name: fullName,
				email: email || null,
				role,
				wallet_balance: walletBalance,
				avatar_url: avatarUrl,
				is_active: isActive,
				auth_user_id: authUserId || null
			}).select(ADMIN_SELECT_FIELDS).single();
			if (insertError) return errorResponse(500, insertError.message || "Failed to create member.");
			result = data;
		} else {
			const { data, error: rpcError } = await sb.rpc("admin_upsert_member", {
				_id: null,
				_member_id: memberId,
				_nexus_id: nexusId || null,
				_first_name: firstName,
				_last_name: lastName,
				_full_name: fullName,
				_email: email || null,
				_role: role,
				_wallet_balance: walletBalance,
				_avatar_url: avatarUrl,
				_is_active: isActive,
				_auth_user_id: authUserId || null,
				_profile_id: null
			});
			if (rpcError) return errorResponse(500, rpcError.message || "Failed to create member via RPC.");
			result = data;
		}
		return jsonResponse({
			success: true,
			user: {
				...result,
				wallet_balance: Number(result?.wallet_balance || walletBalance)
			}
		});
	} catch (err) {
		return errorResponse(500, err instanceof Error ? err.message : "Server error creating user.");
	}
}
async function updateAdminUser(user) {
	if (!user?.id) return errorResponse(400, "Missing user id.");
	const sbAdmin = createAdminSupabase();
	const sb = sbAdmin || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	const updates = {};
	if (user.first_name !== void 0) updates.first_name = user.first_name;
	if (user.firstName !== void 0) updates.first_name = user.firstName;
	if (user.last_name !== void 0) updates.last_name = user.last_name;
	if (user.lastName !== void 0) updates.last_name = user.lastName;
	if (user.full_name !== void 0) updates.full_name = user.full_name;
	if (user.fullName !== void 0) updates.full_name = user.fullName;
	if (user.email !== void 0) updates.email = String(user.email).trim().toLowerCase() || null;
	if (user.nexus_id !== void 0) updates.nexus_id = user.nexus_id || null;
	if (user.nexusId !== void 0) updates.nexus_id = user.nexusId || null;
	if (user.member_id !== void 0) updates.member_id = user.member_id;
	if ([
		"admin",
		"moderator",
		"user"
	].includes(user.role)) updates.role = user.role;
	if (user.wallet_balance !== void 0) updates.wallet_balance = Number(user.wallet_balance);
	if (user.walletBalance !== void 0) updates.wallet_balance = Number(user.walletBalance);
	if (user.avatar_url !== void 0) updates.avatar_url = user.avatar_url || null;
	if (user.avatarUrl !== void 0) updates.avatar_url = user.avatarUrl || null;
	if (user.is_active !== void 0) updates.is_active = Boolean(user.is_active);
	if (user.profile_id !== void 0) updates.profile_id = user.profile_id || null;
	const newPassword = String(user.user_password || user.password || "").trim();
	try {
		if (newPassword && sbAdmin && isServiceRoleAvailable) try {
			const { data: existingMember } = await sbAdmin.from("members").select("auth_user_id, email").eq("id", user.id).maybeSingle();
			if (existingMember?.auth_user_id) await sbAdmin.auth.admin.updateUserById(existingMember.auth_user_id, { password: newPassword });
			else if (existingMember?.email) {
				const { data: authUserData } = await sbAdmin.auth.admin.createUser({
					email: existingMember.email,
					password: newPassword,
					email_confirm: true
				});
				if (authUserData?.user?.id) updates.auth_user_id = authUserData.user.id;
			}
		} catch (e) {
			return errorResponse(500, e instanceof Error ? e.message : "Failed to update password.");
		}
		let result;
		if (sbAdmin && isServiceRoleAvailable) {
			const { data, error } = await sbAdmin.from("members").update(updates).eq("id", user.id).select(ADMIN_SELECT_FIELDS).maybeSingle();
			if (error) return errorResponse(500, error.message || "Failed to update member.");
			result = data;
		} else {
			const { data: current, error: getError } = await sb.from("members").select(ADMIN_SELECT_FIELDS).eq("id", user.id).maybeSingle();
			if (getError) return errorResponse(500, getError.message || "Failed to load member.");
			if (!current) return errorResponse(404, "Member not found.");
			const { data, error: rpcError } = await sb.rpc("admin_upsert_member", {
				_id: user.id,
				_member_id: updates.member_id || current.member_id,
				_nexus_id: updates.nexus_id !== void 0 ? updates.nexus_id : current.nexus_id,
				_first_name: updates.first_name !== void 0 ? updates.first_name : current.first_name,
				_last_name: updates.last_name !== void 0 ? updates.last_name : current.last_name,
				_full_name: updates.full_name !== void 0 ? updates.full_name : current.full_name,
				_email: updates.email !== void 0 ? updates.email : current.email,
				_role: updates.role || current.role,
				_wallet_balance: updates.wallet_balance !== void 0 ? updates.wallet_balance : current.wallet_balance,
				_avatar_url: updates.avatar_url !== void 0 ? updates.avatar_url : current.avatar_url,
				_is_active: updates.is_active !== void 0 ? updates.is_active : current.is_active,
				_auth_user_id: updates.auth_user_id || current.auth_user_id,
				_profile_id: updates.profile_id !== void 0 ? updates.profile_id : current.profile_id
			});
			if (rpcError) return errorResponse(500, rpcError.message || "Failed to update member via RPC.");
			result = data;
		}
		return jsonResponse({
			success: true,
			user: result ? {
				...result,
				wallet_balance: Number(result.wallet_balance || 0)
			} : {
				id: user.id,
				...updates
			}
		});
	} catch (err) {
		return errorResponse(500, err instanceof Error ? err.message : "Server error updating user.");
	}
}
async function deleteAdminUser(id) {
	if (!id) return errorResponse(400, "Missing user id.");
	const sbAdmin = createAdminSupabase();
	const sb = sbAdmin || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	try {
		if (sbAdmin && isServiceRoleAvailable) {
			const { data: existing } = await sbAdmin.from("members").select("auth_user_id").eq("id", id).maybeSingle();
			if (existing?.auth_user_id) try {
				await sbAdmin.auth.admin.updateUserById(existing.auth_user_id, { ban_duration: "none" });
			} catch {}
			const { error: softErr } = await sbAdmin.from("members").update({ is_active: false }).eq("id", id);
			if (softErr) {
				const { error: hardErr } = await sbAdmin.from("members").delete().eq("id", id);
				if (hardErr) return errorResponse(500, hardErr.message || "Failed to delete member.");
			}
		} else {
			const { error: rpcErr } = await sb.rpc("admin_delete_member", { _id: id });
			if (rpcErr) return errorResponse(500, rpcErr.message || "Failed to delete member via RPC.");
		}
		return jsonResponse({
			success: true,
			deleted: true,
			id
		});
	} catch (err) {
		return errorResponse(500, err instanceof Error ? err.message : "Server error deleting user.");
	}
}
async function getAdminFeeds() {
	const sb = createAdminSupabase() || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	const { data, error } = await sb.from("feed_posts").select(FEEDS_SELECT_FIELDS).order("created_at", { ascending: false }).limit(500);
	if (error) return errorResponse(500, error.message || "Failed to load feed posts.");
	return jsonResponse({
		feeds: (data || []).map((p) => ({
			...p,
			likes: Number(p.likes || 0),
			comments: Array.isArray(p.comments) ? p.comments : [],
			comments_count: normalizeCommentsCount(p.comments)
		})),
		total: (data || []).length
	});
}
async function createAdminFeed(post) {
	if (!post || !String(post.content || "").trim()) return errorResponse(400, "Post content is required.");
	const sbAdmin = createAdminSupabase();
	const sb = sbAdmin || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	const content = String(post.content).trim();
	const type = [
		"text",
		"news",
		"event",
		"announcement"
	].includes(post.type) ? post.type : "text";
	const status = [
		"active",
		"draft",
		"inactive"
	].includes(post.status) ? post.status : "active";
	const userName = String(post.user_name || post.userName || "Nexus Admin").trim();
	const userAvatar = post.user_avatar || post.userAvatar || null;
	const isAdminPost = post.is_admin_post !== false;
	const likes = Number(post.likes || 0);
	const comments = Array.isArray(post.comments) ? post.comments : [];
	const profileId = post.profile_id || null;
	try {
		let result;
		if (sbAdmin && isServiceRoleAvailable) {
			const { data, error: insertErr } = await sbAdmin.from("feed_posts").insert({
				profile_id: profileId,
				user_name: userName,
				user_avatar: userAvatar,
				content,
				type,
				status,
				is_admin_post: isAdminPost,
				likes,
				comments
			}).select(FEEDS_SELECT_FIELDS).single();
			if (insertErr) return errorResponse(500, insertErr.message || "Failed to create post.");
			result = data;
		} else {
			const { data, error: rpcErr } = await sb.rpc("admin_upsert_feed_post", {
				_id: null,
				_profile_id: profileId,
				_user_name: userName,
				_user_avatar: userAvatar,
				_content: content,
				_type: type,
				_status: status,
				_is_admin_post: isAdminPost,
				_likes: likes,
				_comments: comments
			});
			if (rpcErr) return errorResponse(500, rpcErr.message || "Failed to create post via RPC.");
			result = data;
		}
		return jsonResponse({
			success: true,
			post: {
				...result,
				likes: Number(result?.likes || likes),
				comments: Array.isArray(result?.comments) ? result.comments : comments,
				comments_count: normalizeCommentsCount(result?.comments || comments)
			}
		});
	} catch (err) {
		return errorResponse(500, err instanceof Error ? err.message : "Server error creating post.");
	}
}
async function updateAdminFeed(post) {
	if (!post?.id) return errorResponse(400, "Missing post id.");
	const sbAdmin = createAdminSupabase();
	const sb = sbAdmin || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	const updates = {};
	if (post.content !== void 0) updates.content = String(post.content).trim();
	if ([
		"text",
		"news",
		"event",
		"announcement"
	].includes(post.type)) updates.type = post.type;
	if ([
		"active",
		"draft",
		"inactive"
	].includes(post.status)) updates.status = post.status;
	if (post.user_name !== void 0 || post.userName !== void 0) updates.user_name = String(post.user_name || post.userName || "").trim() || null;
	if (post.user_avatar !== void 0 || post.userAvatar !== void 0) updates.user_avatar = post.user_avatar || post.userAvatar || null;
	if (post.is_admin_post !== void 0) updates.is_admin_post = Boolean(post.is_admin_post);
	if (post.likes !== void 0) updates.likes = Number(post.likes);
	if (Array.isArray(post.comments)) updates.comments = post.comments;
	if (post.profile_id !== void 0) updates.profile_id = post.profile_id || null;
	if (Object.keys(updates).length === 0) return jsonResponse({
		success: true,
		post: { id: post.id }
	});
	try {
		let result;
		if (sbAdmin && isServiceRoleAvailable) {
			const { data, error } = await sbAdmin.from("feed_posts").update(updates).eq("id", post.id).select(FEEDS_SELECT_FIELDS).maybeSingle();
			if (error) return errorResponse(500, error.message || "Failed to update post.");
			result = data;
		} else {
			const { data: current, error: getErr } = await sb.from("feed_posts").select(FEEDS_SELECT_FIELDS).eq("id", post.id).maybeSingle();
			if (getErr) return errorResponse(500, getErr.message || "Failed to load post.");
			if (!current) return errorResponse(404, "Post not found.");
			const { data, error: rpcErr } = await sb.rpc("admin_upsert_feed_post", {
				_id: post.id,
				_profile_id: updates.profile_id !== void 0 ? updates.profile_id : current.profile_id,
				_user_name: updates.user_name !== void 0 ? updates.user_name : current.user_name,
				_user_avatar: updates.user_avatar !== void 0 ? updates.user_avatar : current.user_avatar,
				_content: updates.content !== void 0 ? updates.content : current.content,
				_type: updates.type || current.type,
				_status: updates.status || current.status,
				_is_admin_post: updates.is_admin_post !== void 0 ? updates.is_admin_post : current.is_admin_post,
				_likes: updates.likes !== void 0 ? updates.likes : current.likes,
				_comments: updates.comments !== void 0 ? updates.comments : current.comments
			});
			if (rpcErr) return errorResponse(500, rpcErr.message || "Failed to update post via RPC.");
			result = data;
		}
		return jsonResponse({
			success: true,
			post: result ? {
				...result,
				likes: Number(result.likes || 0),
				comments: Array.isArray(result.comments) ? result.comments : [],
				comments_count: normalizeCommentsCount(result.comments)
			} : {
				id: post.id,
				...updates
			}
		});
	} catch (err) {
		return errorResponse(500, err instanceof Error ? err.message : "Server error updating post.");
	}
}
async function deleteAdminFeed(id) {
	if (!id) return errorResponse(400, "Missing post id.");
	const sbAdmin = createAdminSupabase();
	const sb = sbAdmin || createBrowserSupabase();
	if (!sb) return errorResponse(500, "Database connection is currently unavailable. Please try again in a moment.");
	try {
		if (sbAdmin && isServiceRoleAvailable) {
			const { error } = await sbAdmin.from("feed_posts").delete().eq("id", id);
			if (error) return errorResponse(500, error.message || "Failed to delete post.");
		} else {
			const { error: rpcErr } = await sb.rpc("admin_delete_feed_post", { _id: id });
			if (rpcErr) return errorResponse(500, rpcErr.message || "Failed to delete post via RPC.");
		}
		return jsonResponse({
			success: true,
			deleted: true,
			id
		});
	} catch (err) {
		return errorResponse(500, err instanceof Error ? err.message : "Server error deleting post.");
	}
}
async function handleAdminApiRequest(request, url) {
	const auth = await validateAdminFromRequest(request);
	if (auth.error) return errorResponse(auth.error.status, auth.error.message);
	const path = url.pathname;
	const method = request.method.toUpperCase();
	if (path === "/api/admin/users" || path.startsWith("/api/admin/users")) {
		if (method === "GET") return getAdminUsers();
		let payload = null;
		try {
			payload = await request.json();
		} catch {
			return errorResponse(400, "Invalid JSON request body.");
		}
		const body = payload?.user || payload || {};
		if (method === "POST") return createAdminUser(body);
		if (method === "PATCH") return updateAdminUser(body);
		if (method === "DELETE") return deleteAdminUser(body.id || body.user?.id);
		return errorResponse(405, `Method ${method} not allowed on /api/admin/users.`);
	}
	if (path === "/api/admin/feeds" || path.startsWith("/api/admin/feeds")) {
		if (method === "GET") return getAdminFeeds();
		let payload = null;
		try {
			payload = await request.json();
		} catch {
			return errorResponse(400, "Invalid JSON request body.");
		}
		const body = payload?.post || payload || {};
		if (method === "POST") return createAdminFeed(body);
		if (method === "PATCH") return updateAdminFeed(body);
		if (method === "DELETE") return deleteAdminFeed(payload.id || payload.post?.id);
		return errorResponse(405, `Method ${method} not allowed on /api/admin/feeds.`);
	}
	if (path === "/api/admin/db-sync" || path.startsWith("/api/admin/db-sync")) {
		if (method !== "POST") return errorResponse(405, `Method ${method} not allowed on /api/admin/db-sync.`);
		if (!createAdminSupabase()) return jsonResponse({
			output: "SUPABASE_SERVICE_ROLE_KEY is not set. Paste supabase/schema.sql into your Supabase SQL editor and run it manually.",
			applied: false
		});
		return jsonResponse({
			output: "Database sync requested. The schema is idempotent — please run supabase/schema.sql in your Supabase SQL editor to apply all latest tables, policies, and functions.",
			applied: true,
			note: "Server-side execution of arbitrary SQL disabled for safety. Manual run recommended."
		});
	}
	return errorResponse(404, `Admin API endpoint not found: ${path}`);
}
var adminApiMiddleware = createMiddleware().server(async ({ next, request }) => {
	try {
		const url = new URL(request.url, "http://localhost");
		if (url.pathname.startsWith("/api/admin/")) return await handleAdminApiRequest(request, url);
	} catch (err) {
		console.error("Admin API middleware error", err);
	}
	return await next();
});
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		if (error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
});
var csrfMiddleware = createCsrfMiddleware({ filter: (ctx) => {
	if ((ctx.request?.url ? String(ctx.request.url) : "").includes("/api/admin/")) return false;
	return ctx.handlerType === "serverFn";
} });
var startInstance = createStart(() => ({ requestMiddleware: [
	adminApiMiddleware,
	errorMiddleware,
	csrfMiddleware
] }));
//#endregion
export { startInstance };
