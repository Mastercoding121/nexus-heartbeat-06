import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-BMwQYxkE.js
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
export { supabase as n, isSupabaseConfigured as t };
