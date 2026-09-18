import { createFileRoute, Outlet } from "@tanstack/react-router";
import AdminGuard from "@/components/AdminGuard.jsx";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin console — Nexus Chat" },
      {
        name: "description",
        content: "Administrator console for managing Nexus Chat members and support.",
      },
      { property: "og:title", content: "Admin console — Nexus Chat" },
      {
        property: "og:description",
        content: "Administrator console for managing Nexus Chat members and support.",
      },
    ],
  }),
  component: AdminLayoutRoute,
});

function AdminLayoutRoute() {
  return (
    <AdminGuard>
      <Outlet />
    </AdminGuard>
  );
}
