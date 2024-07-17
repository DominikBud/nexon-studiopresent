import {
  closestCenter,
  closestCorners,
  DndContext,
  DragOverlay,
  rectIntersection,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import FoundationsWrapper from "./components/FoundationsWrapper";
import Header from "./components/Header";
import JumperRack from "./components/JumperRack";
import { useSweatersData } from "./contexts/SweatersDataContext";
import { createPortal } from "react-dom";
import { act, useState } from "react";
import Sweater from "./components/Sweater";

function App() {
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

  function onDragEnd(event) {
    const { active, over } = event;

    if (!over) return;
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "sweater") {
      // setActiveSweater(event.active.data.current.sweater);
    }
  }

  return (
    <>
      <Header />
      <DndContext
        onDragStart={onDragStart}
        collisionDetection={rectIntersection}
        onDragEnd={onDragEnd}
      >
        <JumperRack />
        <FoundationsWrapper />
      </DndContext>
    </>
  );
}

export default App;
