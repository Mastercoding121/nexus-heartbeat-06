import { createFileRoute } from "@tanstack/react-router";
import ContactsPanel from "@/components/chat/ContactsPanel.jsx";

export const Route = createFileRoute("/app/contacts")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Contacts — Nexus Chat" },
      {
        name: "description",
        content: "Find people by Nexus number and start a private conversation.",
      },
      { property: "og:title", content: "Contacts — Nexus Chat" },
      {
        property: "og:description",
        content: "Find people by Nexus number and start a private conversation.",
      },
    ],
  }),
  component: ContactsPanel,
});
