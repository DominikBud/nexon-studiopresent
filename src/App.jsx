import {
  closestCenter,
  closestCorners,
  DndContext,
  DragOverlay,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import FoundationsWrapper from "./components/FoundationsWrapper";
import Header from "./components/Header";
import JumperRack from "./components/JumperRack";
import { useSweatersData } from "./contexts/SweatersDataContext";
import { createPortal } from "react-dom";
import { useState } from "react";
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

  const [activeSweater, setActiveSweater] = useState(null);

  function onDragEnd(event) {
    console.log(event);
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
          let oldIndex;
          let newIndex;
          switch (event.active.data.current.forFoundation) {
            case "first":
              oldIndex = foundationSweaters1.findIndex(
                (item) => item.id === active.id
              );
              newIndex = foundationSweaters1.findIndex(
                (item) => item.id === over.id
              );
              setFoundationSweaters1(
                arrayMove(foundationSweaters1, oldIndex, newIndex)
              );
              break;
            case "second":
              oldIndex = foundationSweaters2.findIndex(
                (item) => item.id === active.id
              );
              newIndex = foundationSweaters2.findIndex(
                (item) => item.id === over.id
              );
              setFoundationSweaters2(
                arrayMove(foundationSweaters2, oldIndex, newIndex)
              );
              break;
            case "third":
              oldIndex = foundationSweaters3.findIndex(
                (item) => item.id === active.id
              );
              newIndex = foundationSweaters3.findIndex(
                (item) => item.id === over.id
              );
              setFoundationSweaters3(
                arrayMove(foundationSweaters3, oldIndex, newIndex)
              );
              break;
            case "fourth":
              oldIndex = foundationSweaters4.findIndex(
                (item) => item.id === active.id
              );
              newIndex = foundationSweaters4.findIndex(
                (item) => item.id === over.id
              );
              setFoundationSweaters4(
                arrayMove(foundationSweaters4, oldIndex, newIndex)
              );
              break;
          }
        }
      } else {
        if (activeList === "sweaters") {
          const activeItem = sweaters.find((item) => item.id === active.id);
          setSweaters((prevSweaters) =>
            prevSweaters.filter((item) => item.id !== active.id)
          );
          setFoundationSweaters1((prevFoundationSweaters) => [
            ...prevFoundationSweaters,
            activeItem,
          ]);
        } else {
          let activeItem;
          switch (event.active.data.current.forFoundation) {
            case "first":
              activeItem = foundationSweaters1.find(
                (item) => item.id === active.id
              );
              setFoundationSweaters1((prevFoundationSweaters) =>
                prevFoundationSweaters.filter((item) => item.id !== active.id)
              );
              setSweaters((prevSweaters) => [...prevSweaters, activeItem]);
              break;
            case "second":
              activeItem = foundationSweaters2.find(
                (item) => item.id === active.id
              );
              setFoundationSweaters2((prevFoundationSweaters) =>
                prevFoundationSweaters.filter((item) => item.id !== active.id)
              );
              setSweaters((prevSweaters) => [...prevSweaters, activeItem]);
              break;
            case "third":
              activeItem = foundationSweaters3.find(
                (item) => item.id === active.id
              );
              setFoundationSweaters3((prevFoundationSweaters) =>
                prevFoundationSweaters.filter((item) => item.id !== active.id)
              );
              setSweaters((prevSweaters) => [...prevSweaters, activeItem]);
              break;
            case "fourth":
              activeItem = foundationSweaters4.find(
                (item) => item.id === active.id
              );
              setFoundationSweaters4((prevFoundationSweaters) =>
                prevFoundationSweaters.filter((item) => item.id !== active.id)
              );
              setSweaters((prevSweaters) => [...prevSweaters, activeItem]);
              break;
          }
        }
      }
    }
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "sweater") {
      setActiveSweater(event.active.data.current.sweater);
      return;
    }
  }

  return (
    <>
      <Header />
      <DndContext
        onDragStart={onDragStart}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
        onDragOver={(e) => console.log(e)}
      >
        <JumperRack />
        <FoundationsWrapper />
        {activeSweater &&
          createPortal(
            <DragOverlay>
              <Sweater sweater={activeSweater} />
            </DragOverlay>,
            document.body
          )}
      </DndContext>
    </>
  );
}

export default App;
