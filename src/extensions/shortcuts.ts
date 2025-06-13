import { defineKeymap, toggleNode } from "prosekit/core";
import {
  createMoveListCommand,
  createWrapInListCommand,
} from "prosemirror-flat-list";

export function definedShortcuts() {
  return defineKeymap({
    "Alt-ArrowUp": createMoveListCommand("up"),
    "Alt-ArrowDown": createMoveListCommand("down"),
    "Mod-Shift-0": toggleNode({ type: "paragraph" }),
    "Mod-Shift-1": toggleNode({ type: "heading", attrs: { level: 1 } }),
    "Mod-Shift-2": toggleNode({ type: "heading", attrs: { level: 2 } }),
    "Mod-Shift-3": toggleNode({ type: "heading", attrs: { level: 3 } }),
    "Mod-Shift-4": createWrapInListCommand({ kind: "task" }),
    "Mod-Shift-5": createWrapInListCommand({ kind: "bullet" }),
    "Mod-Shift-6": createWrapInListCommand({ kind: "ordered" }),
    "Mod-Shift-7": createWrapInListCommand({ kind: "toggle" }),
  });
}
