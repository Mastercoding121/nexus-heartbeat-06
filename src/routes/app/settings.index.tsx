import { createFileRoute } from "@tanstack/react-router";
import SettingsPage from "@/pages/SettingsPage.jsx";

export const Route = createFileRoute("/app/settings/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Settings — Nexus Chat" },
      {
        name: "description",
        content: "Manage your Nexus Chat profile, appearance and privacy settings.",
      },
      { property: "og:title", content: "Settings — Nexus Chat" },
      {
        property: "og:description",
        content: "Manage your Nexus Chat profile, appearance and privacy settings.",
      },
    ],
  }),
  component: SettingsPage,
});
