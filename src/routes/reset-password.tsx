import { createFileRoute } from "@tanstack/react-router";
import ResetPassword from "@/pages/ResetPassword.jsx";

export const Route = createFileRoute("/reset-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Choose a new password — Nexus Chat" },
      { name: "description", content: "Set a new password for your Nexus Chat account." },
      { property: "og:title", content: "Choose a new password — Nexus Chat" },
      { property: "og:description", content: "Set a new password for your Nexus Chat account." },
    ],
  }),
  component: ResetPassword,
});
