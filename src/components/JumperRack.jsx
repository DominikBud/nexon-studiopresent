import { SortableContext } from "@dnd-kit/sortable";
import { useSweatersData } from "../contexts/SweatersDataContext";
import Sweater from "./Sweater";
import { useEffect, useMemo, useState } from "react";

function JumperRack() {
  const { sweaters, reset, foundationsCount } = useSweatersData();
  const sweaterIds = useMemo(() => sweaters.map((col) => col.id), [sweaters]);

  async function writeValues() {
    fetch(
      "https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8",

      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            ...foundationsCount,
            date: new Date().toLocaleString("en-GB", {
              dateStyle: "short",
              timeStyle: "short",
            }),
          },
        ]),
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
            const lastRequest = localStorage.getItem("timeLastRequest");
            const currentTime = new Date();

            if (
              lastRequest === null || // Check if the last request does not exist
              Math.abs(new Date(lastRequest) - currentTime) / 1000 > 10 // Check time difference
            ) {
              console.log(Math.abs(new Date(lastRequest) - currentTime) / 1000);
              writeValues();
              reset();
              localStorage.setItem(
                "timeLastRequest",
                currentTime.toISOString()
              ); // Store in ISO format
            } else {
              console.log("ne moze");
              console.log(Math.abs(new Date(lastRequest) - currentTime) / 1000);
            }
          }}
        >
          ELKULDOM
        </button>
      )}
    </div>
  );
}

export default JumperRack;
