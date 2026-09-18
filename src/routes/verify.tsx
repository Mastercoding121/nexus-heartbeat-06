import { createFileRoute } from "@tanstack/react-router";
import VerifyEmail from "@/pages/VerifyEmail.jsx";

export const Route = createFileRoute("/verify")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Verify your email — Nexus Chat" },
      {
        name: "description",
        content:
          "Enter the 4 or 6-digit verification code sent to your email to activate your Nexus Chat account.",
      },
      { property: "og:title", content: "Verify your email — Nexus Chat" },
      {
        property: "og:description",
        content:
          "Enter the 4 or 6-digit verification code sent to your email to activate your Nexus Chat account.",
      },
    ],
  }),
  component: VerifyEmail,
});
