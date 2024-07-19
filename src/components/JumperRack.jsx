import { SortableContext } from "@dnd-kit/sortable";
import { useMemo } from "react";
import { useSweatersData } from "../contexts/SweatersDataContext";
import Sweater from "./Sweater";
import { useWriteDonations } from "../hooks/useWriteDonations";
import EmptySweater from "./EmptySweater";

function JumperRack() {
  const { sweaters, reset, foundationsCount } = useSweatersData();
  const sweaterIds = useMemo(() => sweaters.map((col) => col.id), [sweaters]);
  const { writeDonations } = useWriteDonations();

  let data = JSON.stringify([
    {
      ...foundationsCount,
      date: new Date().toLocaleString("en-GB", {
        dateStyle: "short",
        timeStyle: "short",
      }),
    },
  ]);

  return (
    <div className="jumperrack__wrapper">
      <SortableContext items={sweaterIds}>
        {sweaters.map((sweater, _i) => (
          <Sweater
            key={sweater.id}
            sweater={sweater}
            positionAbsolute={true}
            absoluteIdnex={_i}
          />
        ))}
      </SortableContext>

      {!sweaters.length && (
        <>
          <button
            onClick={() => {
              const lastRequest = localStorage.getItem("timeLastRequest");
              const currentTime = new Date();

              if (
                lastRequest === null ||
                Math.abs(new Date(lastRequest) - currentTime) / 1000 > 10
              ) {
                console.log(
                  Math.abs(new Date(lastRequest) - currentTime) / 1000
                );
                writeDonations(data);
                reset();
                localStorage.setItem(
                  "timeLastRequest",
                  currentTime.toISOString()
                ); // Store in ISO format
              } else {
                console.log("ne moze");
                console.log(
                  Math.abs(new Date(lastRequest) - currentTime) / 1000
                );
              }
            }}
          >
            ELKULDOM
          </button>
        </>
      )}
    </div>
  );
}

export default JumperRack;
