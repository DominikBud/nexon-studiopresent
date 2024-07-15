import { closestCorners, DndContext } from "@dnd-kit/core";
import FoundationsWrapper from "./components/FoundationsWrapper";
import Header from "./components/Header";
import JumperRack from "./components/JumperRack";
import { useSweatersData } from "./contexts/SweatersDataContext";
import { arrayMove } from "@dnd-kit/sortable";

function App() {
  const { sweaters, setSweaters } = useSweatersData();

  const getTaskPos = (id) => sweaters.findIndex((sweater) => sweater.id === id);

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    setSweaters((sweatersCurr) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(sweatersCurr, originalPos, newPos);
    });
  };

  return (
    <>
      <Header />
      <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
        <JumperRack />
        <FoundationsWrapper />
      </DndContext>
    </>
  );
}

export default App;
