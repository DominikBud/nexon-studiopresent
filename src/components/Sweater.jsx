import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Sweater({ sweater, folded, forFoundation, noStyle }) {
  const { id, sweaterImg, foldedSweater } = sweater;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, data: { type: "sweater", forFoundation, sweater } });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) return null;

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <img
        style={{ left: `${(id - 1) * 120}px` }}
        className={folded ? "foldedsweater__img" : "sweater__img"}
        src={folded ? foldedSweater : sweaterImg}
        alt="sweater"
      ></img>
    </div>
  );
}

export default Sweater;
