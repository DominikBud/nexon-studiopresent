import { SortableContext } from "@dnd-kit/sortable";
import { useSweatersData } from "../contexts/SweatersDataContext";
import Sweater from "./Sweater";
import { useMemo } from "react";

function JumperRack() {
  const { sweaters } = useSweatersData();

  const sweaterIds = useMemo(() => sweaters.map((col) => col.id), [sweaters]);
  return (
    <div className="jumperrack__wrapper">
      <SortableContext items={sweaterIds}>
        {sweaters.map((sweater) => (
          <Sweater key={sweater.id} sweater={sweater} />
        ))}
      </SortableContext>
      {!sweaters.length && <button>ELKULDOM</button>}
    </div>
  );
}

export default JumperRack;
