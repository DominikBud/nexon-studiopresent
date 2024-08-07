import { DndContext, DragOverlay, rectIntersection } from "@dnd-kit/core";
import { useSweatersData } from "../contexts/SweatersDataContext";
import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import JumperRack from "../components/JumperRack";
import FoundationsWrapper from "../components/FoundationsWrapper";
import { createPortal } from "react-dom";
import Sweater from "../components/Sweater";
import NavigationLink from "../components/NavigationLink";

function MainPage() {
  const {
    sweaters,
    setSweaters,
    foundationSweaters1,
    setFoundationSweaters1,
    foundationSweaters2,
    setFoundationSweaters2,
    foundationSweaters3,
    setFoundationSweaters3,
    foundationSweaters4,
    setFoundationSweaters4,
  } = useSweatersData();

  const [activeSweater, setActiveSweater] = useState(null);

  const foundationSweaters = {
    first: { items: foundationSweaters1, setItems: setFoundationSweaters1 },
    second: { items: foundationSweaters2, setItems: setFoundationSweaters2 },
    third: { items: foundationSweaters3, setItems: setFoundationSweaters3 },
    fourth: { items: foundationSweaters4, setItems: setFoundationSweaters4 },
  };

  function onDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const activeList = sweaters.find((item) => item.id === active.id)
        ? "sweaters"
        : "foundations";
      const overList = sweaters.find((item) => item.id === over.id)
        ? "sweaters"
        : "foundations";

      if (activeList === overList) {
        if (activeList === "sweaters") {
          const oldIndex = sweaters.findIndex((item) => item.id === active.id);
          const newIndex = sweaters.findIndex((item) => item.id === over.id);
          setSweaters(arrayMove(sweaters, oldIndex, newIndex));
        } else {
          const foundationKey = active.data.current.forFoundation;
          const { items, setItems } = foundationSweaters[foundationKey];
          const oldIndex = items.findIndex((item) => item.id === active.id);
          const newIndex = items.findIndex((item) => item.id === over.id);
          setItems(arrayMove(items, oldIndex, newIndex));
        }
      } else {
        if (activeList === "sweaters") {
          const activeItem = sweaters.find((item) => item.id === active.id);
          setSweaters((prevSweaters) =>
            prevSweaters.filter((item) => item.id !== active.id)
          );
          const foundationKey = over.data.current.forFoundation;
          const { setItems } = foundationSweaters[foundationKey];
          setItems((prevItems) => [...prevItems, activeItem]);
        } else {
          const foundationKey = active.data.current.forFoundation;
          const { items, setItems } = foundationSweaters[foundationKey];
          const activeItem = items.find((item) => item.id === active.id);
          setItems((prevItems) =>
            prevItems.filter((item) => item.id !== active.id)
          );
          setSweaters((prevSweaters) => [...prevSweaters, activeItem]);
        }
      }
    }
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "sweater") {
      setActiveSweater(event.active.data.current.sweater);
    }
  }

  return (
    <>
      {" "}
      <NavigationLink
        icon={"src\\assets\\pie-chart.png"}
        destination={"statistics"}
      />
      <DndContext
        onDragStart={onDragStart}
        onDragOver={(event) => console.log("event", event)}
        collisionDetection={rectIntersection}
        onDragEnd={onDragEnd}
      >
        <JumperRack />
        <FoundationsWrapper />
        {activeSweater &&
          createPortal(
            <DragOverlay>
              <Sweater sweater={activeSweater} positionAbsolute={false} />
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </>
  );
}

export default MainPage;
