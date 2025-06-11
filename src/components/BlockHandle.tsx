import { LuGripVertical, LuPlus } from "react-icons/lu";
import {
  BlockHandleAdd,
  BlockHandleDraggable,
  BlockHandlePopover,
} from "prosekit/react/block-handle";

export function BlockHandle() {
  return (
    <BlockHandlePopover>
      <BlockHandleAdd
        style={{
          cursor: "grab",
        }}
      >
        <LuPlus />
      </BlockHandleAdd>

      <BlockHandleDraggable
        style={{
          cursor: "grab",
        }}
      >
        <LuGripVertical />
      </BlockHandleDraggable>
    </BlockHandlePopover>
  );
}
