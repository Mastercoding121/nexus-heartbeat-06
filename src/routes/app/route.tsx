import { createFileRoute } from "@tanstack/react-router";
import ProtectedRoute from "@/components/ProtectedRoute.jsx";
import ChatLayout from "@/layouts/ChatLayout.jsx";

export const Route = createFileRoute("/app")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Your chats — Nexus Chat" },
      {
        name: "description",
        content: "Your private Nexus Chat conversations, contacts, feeds and settings.",
      },
      { property: "og:title", content: "Your chats — Nexus Chat" },
      {
        property: "og:description",
        content: "Your private Nexus Chat conversations, contacts, feeds and settings.",
      },
    ],
  }),
  component: AppLayoutRoute,
});

function AppLayoutRoute() {
  return (
    <ProtectedRoute>
      <ChatLayout />
    </ProtectedRoute>
  );
}
