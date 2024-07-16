import { useSweatersData } from "../contexts/SweatersDataContext";
import SingleFoundation from "./SingleFoundation";

function FoundationsWrapper() {
  const {
    foundationSweaters1,
    foundationSweaters2,
    foundationSweaters3,
    foundationSweaters4,
    reset,
  } = useSweatersData();

  return (
    <>
      <div className="foundations__wrapper">
        <SingleFoundation
          foundationSweaters={foundationSweaters1}
          forFoundation={"first"}
        />
        <SingleFoundation
          foundationSweaters={foundationSweaters2}
          forFoundation={"second"}
        />
        <SingleFoundation
          foundationSweaters={foundationSweaters3}
          forFoundation={"third"}
        />
        <SingleFoundation
          foundationSweaters={foundationSweaters4}
          forFoundation={"fourth"}
        />
      </div>
      <div className="resetbutton__wrapper">
        <button onClick={() => reset()}>VISSZAÁLLÍTÁS</button>
      </div>
    </>
  );
}

export default FoundationsWrapper;
