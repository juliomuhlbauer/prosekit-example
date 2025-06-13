import { createFileRoute } from "@tanstack/react-router";
import { useHotkeys } from "react-hotkeys-hook";

export const Route = createFileRoute("/test")({
  component: RouteComponent,
});

function RouteComponent() {
  useHotkeys("ctrl+shift+0", () => console.log("ctrl+shift+0"), {
    preventDefault: true,
  });
  useHotkeys("ctrl+shift+6", () => console.log("ctrl+shift+6"));
  useHotkeys("ctrl+shift+7", () => console.log("ctrl+shift+7"));
  useHotkeys("ctrl+shift+8", () => console.log("ctrl+shift+8"));
  useHotkeys("ctrl+shift+9", () => console.log("ctrl+shift+9"));

  return <div>Hello "/test"!</div>;
}
