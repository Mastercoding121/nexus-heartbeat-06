import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { handleAdminApiRequest } from "./lib/admin-api-router";

const adminApiMiddleware = createMiddleware().server(async ({ next, request }) => {
  try {
    const url = new URL(request.url, "http://localhost");
    if (url.pathname.startsWith("/api/admin/")) {
      return await handleAdminApiRequest(request, url);
    }
  } catch (err) {
    console.error("Admin API middleware error", err);
  }
  return await next();
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => {
    const url = ctx.request?.url ? String(ctx.request.url) : "";
    if (url.includes("/api/admin/")) return false;
    return ctx.handlerType === "serverFn";
  },
});

export const startInstance = createStart(() => ({
  requestMiddleware: [adminApiMiddleware, errorMiddleware, csrfMiddleware],
}));
