import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSweatersData } from "../contexts/SweatersDataContext";
import Sweater from "./Sweater";
import { useState } from "react";
import InformationPopup from "./InformationPopup";

function SingleFoundation() {
  const { foundationSweaters, foundationSweatersInitial } = useSweatersData();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <InformationPopup
        showPopup={showPopup}
        close={() => setShowPopup(false)}
      />
      <div className="foundation__wrapper">
        <div className="information__wrapper">
          <a onClick={() => setShowPopup(true)}>
            <img
              className="information__img"
              src="src\assets\infoIcon.png"
              alt="informations"
            />{" "}
          </a>

          <a href="https://lampas92.hu/" target="_blank">
            {" "}
            <img
              className="link__img"
              src="src\assets\linkIcon.png"
              alt="informations"
            />{" "}
          </a>
        </div>
        <p className="sweaterscount__text">{foundationSweaters.length}</p>
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
    </>
  );
}

export default SingleFoundation;
