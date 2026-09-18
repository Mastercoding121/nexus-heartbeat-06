import { createFileRoute } from "@tanstack/react-router";
import Register from "@/pages/Register.jsx";

export const Route = createFileRoute("/register")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Create account — Nexus Chat" },
      {
        name: "description",
        content: "Create a Nexus Chat account and get your own Nexus number in seconds.",
      },
      { property: "og:title", content: "Create account — Nexus Chat" },
      {
        property: "og:description",
        content: "Create a Nexus Chat account and get your own Nexus number in seconds.",
      },
    ],
  }),
  component: Register,
});
