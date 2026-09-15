import { createFileRoute } from "@tanstack/react-router";
import ChatPage from "@/pages/ChatPage.jsx";

export const Route = createFileRoute("/app/chat/$chatId")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Conversation — Nexus Chat" },
      { name: "description", content: "An encrypted Nexus Chat conversation." },
      { property: "og:title", content: "Conversation — Nexus Chat" },
      { property: "og:description", content: "An encrypted Nexus Chat conversation." },
    ],
  }),
  component: ChatPage,
});
