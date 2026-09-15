import { createFileRoute } from "@tanstack/react-router";
import AdminLogin from "@/pages/AdminLogin.jsx";

export const Route = createFileRoute("/admin/login")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin sign in — Nexus Chat" },
      { name: "description", content: "Administrator sign in for the Nexus Chat console." },
      { property: "og:title", content: "Admin sign in — Nexus Chat" },
      { property: "og:description", content: "Administrator sign in for the Nexus Chat console." },
    ],
  }),
  component: AdminLogin,
});
