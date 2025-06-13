import { defineBasicExtension } from "prosekit/basic";
import { union } from "prosekit/core";
import { defineListIndentBlocker } from "./list-indent-blocker";
import { definedShortcuts } from "./shortcuts";

export function defineExtension() {
  return union(
    defineBasicExtension(),
    defineListIndentBlocker(),
    definedShortcuts()
  );
}

export type EditorExtension = ReturnType<typeof defineExtension>;
