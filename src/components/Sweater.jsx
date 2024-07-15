import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Sweater({ sweater }) {
  const { id, sweaterImg } = sweater;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: sweater.id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <img className="sweater__img" src={sweaterImg} alt="sweater"></img>
    </div>
  );
}

export default Sweater;
