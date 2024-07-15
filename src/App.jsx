import { closestCorners, DndContext } from "@dnd-kit/core";
import FoundationsWrapper from "./components/FoundationsWrapper";
import Header from "./components/Header";
import JumperRack from "./components/JumperRack";
import { useSweatersData } from "./contexts/SweatersDataContext";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

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
        // Rearrange items within the same list
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
        // Move item from one list to the other
        if (activeList === "sweaters") {
          const activeItem = sweaters.find((item) => item.id === active.id);
          setSweaters(sweaters.filter((item) => item.id !== active.id));
          setFoundationSweaters([...foundationSweaters, activeItem]);
        } else {
          const activeItem = foundationSweaters.find(
            (item) => item.id === active.id
          );
          setFoundationSweaters(
            foundationSweaters.filter((item) => item.id !== active.id)
          );
          setSweaters([...sweaters, activeItem]);
        }
      }
    }
  }

  return (
    <>
      <Header />
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <SortableContext
          strategy={horizontalListSortingStrategy}
          items={sweaters}
        >
          <JumperRack />
          <FoundationsWrapper />
        </SortableContext>
      </DndContext>
    </>
  );
}

export default App;
