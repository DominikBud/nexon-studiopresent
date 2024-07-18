import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Sweater({
  sweater,
  folded,
  forFoundation,
  positionAbsolute,
  absoluteIdnex,
}) {
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

  if (isDragging)
    return (
      <div
        style={
          !folded && positionAbsolute
            ? {
                position: "absolute",
                left: `${absoluteIdnex * 120}px`,
                top: "15%",
              }
            : null
        }
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <div
          className={folded ? "foldedsweater__img" : "sweater__img"}
          style={style}
        ></div>
      </div>
    );

  return (
    <div
      style={
        !folded && positionAbsolute
          ? {
              position: "absolute",
              left: `${absoluteIdnex * 120}px`,
              top: "15%",
            }
          : null
      }
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <img
        className={folded ? "foldedsweater__img" : "sweater__img"}
        src={folded ? foldedSweater : sweaterImg}
        alt="sweater"
        style={style}
      ></img>
    </div>
  );
}

export default Sweater;
