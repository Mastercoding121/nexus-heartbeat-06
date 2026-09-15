import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home.jsx";

export const Route = createFileRoute("/app/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Chats — Nexus Chat" },
      { name: "description", content: "Pick up where you left off in your Nexus Chat conversations." },
      { property: "og:title", content: "Chats — Nexus Chat" },
      { property: "og:description", content: "Pick up where you left off in your Nexus Chat conversations." },
    ],
  }),
  component: Home,
});
