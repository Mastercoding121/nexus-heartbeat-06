import { createFileRoute } from "@tanstack/react-router";
import AdminDashboard from "@/pages/AdminDashboard.jsx";

export const Route = createFileRoute("/admin/dashboard")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Dashboard — Nexus Chat admin" },
      { name: "description", content: "Overview of Nexus Chat members, messages and activity." },
      { property: "og:title", content: "Dashboard — Nexus Chat admin" },
      { property: "og:description", content: "Overview of Nexus Chat members, messages and activity." },
    ],
  }),
  component: AdminDashboard,
});
