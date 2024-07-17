import { DragOverlay, useDraggable, useDroppable } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { createPortal } from "react-dom";

function Sweater({ sweater, folded, forFoundation, noStyle }) {
  const { id, sweaterImg, foldedSweater } = sweater;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    sweater,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        className="sweater__wrapper"
      >
        <img
          // style={{ left: `${(id - 1) * 120}px` }}
          className={folded ? "foldedsweater__img" : "sweater__img"}
          src={folded ? foldedSweater : sweaterImg}
          alt="sweater"
        ></img>
      </div>
    </>
  );
}

export default Sweater;
