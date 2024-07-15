import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSweatersData } from "../contexts/SweatersDataContext";
import Sweater from "./Sweater";

function SingleFoundation() {
  const { foundationSweaters } = useSweatersData();

  return (
    <div className="foundation__wrapper">
      <a>
        <img
          className="information__img"
          src="src\assets\infoIcon.png"
          alt="informations"
        />{" "}
      </a>
      <a>
        {" "}
        <img
          className="link__img"
          src="src\assets\linkIcon.png"
          alt="informations"
        />{" "}
      </a>
      <p className="sweaterscount__text">0</p>
      <h2 className="foundationname__text">LÁMPÁS ’92 ALAPÍTVÁNY </h2>
      <SortableContext
        strategy={verticalListSortingStrategy}
        items={foundationSweaters}
      >
        <div className="shelf__sortable">
          {foundationSweaters.map((sweater) => (
            <Sweater key={sweater.id} sweater={sweater} folded={true} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default SingleFoundation;
