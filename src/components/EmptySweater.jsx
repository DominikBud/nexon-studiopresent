import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function EmptySweater({ forFoundation }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: forFoundation,
      data: { type: "sweater", forFoundation },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners}>
      <div className={"empty__sweater"} style={style}></div>
    </div>
  );
}

export default EmptySweater;
