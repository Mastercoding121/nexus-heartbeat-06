// @ts-nocheck
import { createClient } from "@supabase/supabase-js";

const DEFAULT_SUPABASE_URL = "https://ozmakhxeotvqvuaytnic.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_teYLzCRnc1adcwBcv8XdIQ_Xf80ZGt6";

function getEnv(key, fallback = "") {
  if (typeof process !== "undefined" && process.env) {
    return process.env[key] || fallback;
  }
  if (typeof import.meta !== "undefined" && import.meta.env) {
    return import.meta.env[key] || fallback;
  }
  return fallback;
}

const supabaseUrl =
  getEnv("VITE_SUPABASE_URL") ||
  getEnv("NEXT_PUBLIC_SUPABASE_URL") ||
  getEnv("SUPABASE_URL") ||
  DEFAULT_SUPABASE_URL;

const supabaseAnonKey =
  getEnv("VITE_SUPABASE_ANON_KEY") ||
  getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") ||
  getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY") ||
  getEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") ||
  DEFAULT_SUPABASE_ANON_KEY;

const supabaseServiceRoleKey =
  getEnv("SUPABASE_SERVICE_ROLE_KEY") ||
  getEnv("VITE_SUPABASE_SERVICE_ROLE_KEY") ||
  getEnv("SUPABASE_SECRET_KEY") ||
  "";

export const isServiceRoleAvailable = Boolean(supabaseServiceRoleKey);

export function createBrowserSupabase() {
  return supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;
}

export function createAdminSupabase() {
  if (!supabaseUrl) return null;
  const key = isServiceRoleAvailable ? supabaseServiceRoleKey : supabaseAnonKey;
  return createClient(supabaseUrl, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

export async function validateAdminFromRequest(request) {
  const authHeader = request.headers.get("authorization") || "";
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  if (!match || !match[1]) {
    return { error: { status: 401, message: "Missing or invalid authorization header." } };
  }
  const jwt = match[1];

  const sb = createBrowserSupabase();
  if (!sb) {
    return { error: { status: 500, message: "Database connection is currently unavailable. Please try again in a moment." } };
  }

  const { data: authData, error: authError } = await sb.auth.getUser(jwt);
  if (authError || !authData?.user) {
    return {
      error: { status: 401, message: "Expired or invalid admin session. Please sign in again." },
    };
  }
  const userId = authData.user.id;

  const { data: roleData, error: roleError } = await sb
    .from("members")
    .select("role, id")
    .eq("auth_user_id", userId)
    .maybeSingle();

  if (roleError) {
    const { data: hasRoleData, error: hasRoleError } = await sb.rpc("has_role", {
      _user_id: userId,
      _role: "admin",
    });
    if (!hasRoleError && hasRoleData === true) {
      return { userId, isAdmin: true, jwt };
    }
    return {
      error: { status: 403, message: "This account is not authorized for administration." },
    };
  }

  if (!roleData || roleData.role !== "admin") {
    return {
      error: { status: 403, message: "This account is not authorized for administration." },
    };
  }

  return { userId, isAdmin: true, jwt, memberId: roleData.id };
}

export function jsonResponse(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...extraHeaders,
    },
  });
}

export function errorResponse(status, message) {
  return jsonResponse({ error: message }, status);
}
