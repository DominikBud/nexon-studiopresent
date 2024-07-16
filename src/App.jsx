import { closestCorners, DndContext } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import FoundationsWrapper from "./components/FoundationsWrapper";
import Header from "./components/Header";
import JumperRack from "./components/JumperRack";
import { useSweatersData } from "./contexts/SweatersDataContext";

function App() {
  const { sweaters, setSweaters, foundationSweaters, setFoundationSweaters } =
    useSweatersData();

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
          const oldIndex = foundationSweaters.findIndex(
            (item) => item.id === active.id
          );
          const newIndex = foundationSweaters.findIndex(
            (item) => item.id === over.id
          );
          setFoundationSweaters(
            arrayMove(foundationSweaters, oldIndex, newIndex)
          );
        }
      } else {
        if (activeList === "sweaters") {
          const activeItem = sweaters.find((item) => item.id === active.id);
          setSweaters((prevSweaters) =>
            prevSweaters.filter((item) => item.id !== active.id)
          );
          setFoundationSweaters((prevFoundationSweaters) => [
            ...prevFoundationSweaters,
            activeItem,
          ]);
        } else {
          const activeItem = foundationSweaters.find(
            (item) => item.id === active.id
          );
          setFoundationSweaters((prevFoundationSweaters) =>
            prevFoundationSweaters.filter((item) => item.id !== active.id)
          );
          setSweaters((prevSweaters) => [...prevSweaters, activeItem]);
        }
      }
    }
  }

  return (
    <>
      <Header />
      <DndContext
        collisionDetection={closestCorners}
        onDragEnd={onDragEnd}
        onDragOver={(e) => console.log(e)}
      >
        <JumperRack />
        <FoundationsWrapper />
      </DndContext>
    </>
  );
}

export default App;
