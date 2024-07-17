import { SortableContext } from "@dnd-kit/sortable";
import { useSweatersData } from "../contexts/SweatersDataContext";
import Sweater from "./Sweater";
import { useMemo } from "react";

function JumperRack() {
  const { sweaters, reset, foundationsCount } = useSweatersData();
  const sweaterIds = useMemo(() => sweaters.map((col) => col.id), [sweaters]);

  async function getValues() {
    fetch(
      "https://docs.google.com/spreadsheets/d/1Vod0YY1-zNcID2z4v61kkfh0deNcUYmsmsccrtJWwD0/edit?gid=0#gid=0"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function writeValues() {
    fetch(
      "https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8",

      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ ...foundationsCount, date: new Date() }]),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log("error", error);
      });
  }

  return (
    <div className="jumperrack__wrapper">
      <SortableContext items={sweaterIds}>
        {sweaters.map((sweater) => (
          <Sweater key={sweater.id} sweater={sweater} />
        ))}
      </SortableContext>
      {!sweaters.length && (
        <button
          onClick={() => {
            writeValues();
            reset();
          }}
        >
          ELKULDOM
        </button>
      )}
    </div>
  );
}

export default JumperRack;
