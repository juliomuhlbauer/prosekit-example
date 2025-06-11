import { createFileRoute } from "@tanstack/react-router";
import { ProseKitEditor } from "@/components/ProseKit";

export const Route = createFileRoute("/")({
  component: ProseKitEditor,
});
