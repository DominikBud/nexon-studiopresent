import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Sweater({ sweater }) {
  const { id, sweaterImg } = sweater;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable(sweater);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <img
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="sweater__img"
      style={{ left: `${id * 110}px` }}
      src={sweaterImg}
      alt="sweater"
    ></img>
  );
}

export default Sweater;
