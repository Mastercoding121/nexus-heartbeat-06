import { createFileRoute } from "@tanstack/react-router";
import AuthLanding from "@/pages/AuthLanding.jsx";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Nexus Chat — Private, encrypted messaging" },
      {
        name: "description",
        content:
          "Nexus Chat is a privacy-first messenger with end-to-end encrypted chats, voice calls, stories and feeds.",
      },
      { property: "og:title", content: "Nexus Chat — Private, encrypted messaging" },
      {
        property: "og:description",
        content:
          "Join Nexus Chat with your unique Nexus number and message friends privately across Android, iOS and the web.",
      },
    ],
  }),
  component: AuthLanding,
});
