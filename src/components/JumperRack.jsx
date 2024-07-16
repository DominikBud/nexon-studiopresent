import {
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import Sweater from "./Sweater";
import { useSweatersData } from "../contexts/SweatersDataContext";

function JumperRack() {
  const { sweaters, sweatersInitial } = useSweatersData();
  return (
    <div className="jumperrack__wrapper">
      <SortableContext
        strategy={horizontalListSortingStrategy}
        items={sweaters}
      >
        {sweaters.map((sweater) => (
          <Sweater key={sweater.id} sweater={sweater} />
        ))}
      </SortableContext>
    </div>
  );
}

export default JumperRack;
