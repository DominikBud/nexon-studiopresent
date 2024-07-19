import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import EmptySweater from "./EmptySweater";
import InformationPopup from "./InformationPopup";
import Sweater from "./Sweater";

function SingleFoundation({
  foundationSweaters,
  forFoundation,
  name,
  websiteLink,
}) {
  const [showPopup, setShowPopup] = useState(false);

  const foundationSweatersIds = useMemo(
    () => foundationSweaters.map((col) => col.id),
    [foundationSweaters]
  );

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

          <a href={websiteLink} target="_blank">
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
        <SortableContext
          items={foundationSweatersIds}
          strategy={verticalListSortingStrategy}
        >
          <div className="soratable__wrapper">
            <div className="shelf__sortable">
              {foundationSweaters.length == 0 ? (
                <>
                  <EmptySweater forFoundation={forFoundation} />
                </>
              ) : (
                foundationSweaters.map((sweater) => (
                  <Sweater
                    key={sweater.id}
                    sweater={sweater}
                    forFoundation={forFoundation}
                    folded={true}
                    positionAbsolute={false}
                  />
                ))
              )}
            </div>
            <img src="src/assets/shelf.png" className="shelf" alt="shelf" />
          </div>
        </SortableContext>
      </div>
    </>
  );
}

export default SingleFoundation;
