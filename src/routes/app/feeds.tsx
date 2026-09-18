import { createFileRoute } from "@tanstack/react-router";
import FeedsPage from "@/pages/FeedsPage.jsx";

export const Route = createFileRoute("/app/feeds")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Feeds — Nexus Chat" },
      { name: "description", content: "Community posts and updates from the Nexus Chat feed." },
      { property: "og:title", content: "Feeds — Nexus Chat" },
      {
        property: "og:description",
        content: "Community posts and updates from the Nexus Chat feed.",
      },
    ],
  }),
  component: FeedsPage,
});
