import { createFileRoute } from "@tanstack/react-router";
import SupportPage from "@/pages/SupportPage.jsx";

export const Route = createFileRoute("/admin/support")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Support inbox — Nexus Chat admin" },
      {
        name: "description",
        content: "Answer member support conversations from the Nexus Chat admin console.",
      },
      { property: "og:title", content: "Support inbox — Nexus Chat admin" },
      {
        property: "og:description",
        content: "Answer member support conversations from the Nexus Chat admin console.",
      },
    ],
  }),
  component: () => <SupportPage adminMode />,
});
