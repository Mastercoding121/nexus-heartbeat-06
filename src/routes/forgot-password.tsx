import { createFileRoute } from "@tanstack/react-router";
import ForgotPassword from "@/pages/ForgotPassword.jsx";

export const Route = createFileRoute("/forgot-password")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Reset your password — Nexus Chat" },
      { name: "description", content: "Request a password reset link for your Nexus Chat account." },
      { property: "og:title", content: "Reset your password — Nexus Chat" },
      { property: "og:description", content: "Request a password reset link for your Nexus Chat account." },
    ],
  }),
  component: ForgotPassword,
});
