import { createFileRoute } from "@tanstack/react-router";
import AdminUsers from "@/pages/AdminUsers.jsx";

export const Route = createFileRoute("/admin/users")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Members — Nexus Chat admin" },
      { name: "description", content: "Browse and manage registered Nexus Chat members." },
      { property: "og:title", content: "Members — Nexus Chat admin" },
      { property: "og:description", content: "Browse and manage registered Nexus Chat members." },
    ],
  }),
  component: AdminUsers,
});
