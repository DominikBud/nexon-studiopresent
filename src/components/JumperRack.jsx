import { SortableContext } from "@dnd-kit/sortable";
import Sweater from "./Sweater";

const sweaters = [
  {
    id: 1,
    sweaterImg: "src\\assets\\sweater1.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 2,
    sweaterImg: "src\\assets\\sweater2.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 3,
    sweaterImg: "src\\assets\\sweater3.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 4,
    sweaterImg: "src\\assets\\sweater4.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 5,
    sweaterImg: "src\\assets\\sweater5.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 6,
    sweaterImg: "src\\assets\\sweater6.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 7,
    sweaterImg: "src\\assets\\sweater7.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 8,
    sweaterImg: "src\\assets\\sweater8.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 9,
    sweaterImg: "src\\assets\\sweater9.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 10,
    sweaterImg: "src\\assets\\sweater10.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 11,
    sweaterImg: "src\\assets\\sweater11.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 12,
    sweaterImg: "src\\assets\\sweater12.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
];

function JumperRack() {
  return (
    <SortableContext>
      {" "}
      <div className="jumperrack__wrapper">
        <img className="cloathanger" src="src\assets\coathanger.png" />
        {sweaters.map((sweater) => (
          <Sweater key={sweater.id} sweater={sweater} />
        ))}
      </div>
    </SortableContext>
  );
}

export default JumperRack;
