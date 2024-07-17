import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import InformationPopup from "./InformationPopup";
import Sweater from "./Sweater";
import { useDroppable } from "@dnd-kit/core";

function SingleFoundation({ foundationSweaters, forFoundation, name }) {
  const [showPopup, setShowPopup] = useState(false);

  const { setNodeRef } = useDroppable({ id: forFoundation });

  return (
    <>
      <InformationPopup
        showPopup={showPopup}
        close={() => setShowPopup(false)}
        name={name}
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
        <h2 className="foundationname__text">{name} </h2>
        <div ref={setNodeRef}>
          <div className="soratable__wrapper">
            <div className="shelf__sortable">
              {foundationSweaters.length == 0 ? (
                <p>Nesto</p>
              ) : (
                foundationSweaters.map((sweater) => (
                  <Sweater
                    key={sweater.id}
                    sweater={sweater}
                    forFoundation={forFoundation}
                    folded={true}
                  />
                ))
              )}
            </div>
            <img src="src/assets/shelf.png" className="shelf" alt="shelf" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleFoundation;
