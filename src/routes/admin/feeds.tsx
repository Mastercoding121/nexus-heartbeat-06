import { createFileRoute } from "@tanstack/react-router";
import AdminFeeds from "@/pages/AdminFeeds.jsx";

export const Route = createFileRoute("/admin/feeds")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Live Feed — Nexus Chat admin" },
      {
        name: "description",
        content: "Manage announcements, news, and community events on the Nexus live feed.",
      },
      { property: "og:title", content: "Live Feed — Nexus Chat admin" },
      {
        property: "og:description",
        content: "Manage announcements, news, and community events on the Nexus live feed.",
      },
    ],
  }),
  component: AdminFeeds,
});
