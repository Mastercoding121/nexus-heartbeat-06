import { createFileRoute } from "@tanstack/react-router";
import Login from "@/pages/Login.jsx";

export const Route = createFileRoute("/login")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Sign in — Nexus Chat" },
      { name: "description", content: "Sign in to Nexus Chat with your Nexus number and password." },
      { property: "og:title", content: "Sign in — Nexus Chat" },
      { property: "og:description", content: "Sign in to Nexus Chat with your Nexus number and password." },
    ],
  }),
  component: Login,
});
