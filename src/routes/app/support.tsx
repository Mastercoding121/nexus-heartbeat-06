import { createFileRoute } from "@tanstack/react-router";
import SupportPage from "@/pages/SupportPage.jsx";

export const Route = createFileRoute("/app/support")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Support — Nexus Chat" },
      { name: "description", content: "Chat directly with the Nexus Chat support team." },
      { property: "og:title", content: "Support — Nexus Chat" },
      { property: "og:description", content: "Chat directly with the Nexus Chat support team." },
    ],
  }),
  component: SupportPage,
});
