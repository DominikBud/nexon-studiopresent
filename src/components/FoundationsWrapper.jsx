import { useSweatersData } from "../contexts/SweatersDataContext";
import SingleFoundation from "./SingleFoundation";

function FoundationsWrapper() {
  const { reset, foundationSweaters } = useSweatersData();

  return (
    <div className="foundations__wrapper">
      <SingleFoundation />
      {foundationSweaters.length == -1 ? (
        <button onClick={() => reset()}>Reset</button>
      ) : null}
    </div>
  );
}

export default FoundationsWrapper;
