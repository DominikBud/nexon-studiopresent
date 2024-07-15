import { closestCenter, closestCorners, DndContext } from "@dnd-kit/core";
import FoundationsWrapper from "./components/FoundationsWrapper";
import Header from "./components/Header";
import JumperRack from "./components/JumperRack";

function App() {
  const onDragEnd = (event) => {
    console.log("DragEnd");
  };

  return (
    <>
      <Header />
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <JumperRack />
        <FoundationsWrapper />
      </DndContext>
    </>
  );
}

export default App;
