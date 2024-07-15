import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function SingleFoundation() {
  const users = [{ name: "dominik" }];

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
      <SortableContext strategy={verticalListSortingStrategy} items={users}>
        <img className="shelf" src="src\assets\shelf.png" alt="shelf" />
      </SortableContext>
    </div>
  );
}

export default SingleFoundation;
