import { createFileRoute } from "@tanstack/react-router";
import AdminSettings from "@/pages/AdminSettings.jsx";

export const Route = createFileRoute("/admin/settings")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Settings — Nexus Chat admin" },
      { name: "description", content: "Configure the Nexus Chat admin console." },
      { property: "og:title", content: "Settings — Nexus Chat admin" },
      { property: "og:description", content: "Configure the Nexus Chat admin console." },
    ],
  }),
  component: AdminSettings,
});
