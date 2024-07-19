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
          name={`LÁMPÁS ’92ALAPÍTVÁNY`}
          websiteLink={"https://lampas92.hu/"}
        />
        <SingleFoundation
          foundationSweaters={foundationSweaters2}
          forFoundation={"second"}
          name={`SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY`}
          websiteLink={
            "https://www.szentistvanzene.hu/szent-istvan-kiraly-zenei-alapitvany/"
          }
        />
        <SingleFoundation
          foundationSweaters={foundationSweaters3}
          forFoundation={"third"}
          name={`AUTIZMUS ALAPÍTVÁNY`}
          websiteLink={"https://www.autizmus.hu/"}
        />

        <SingleFoundation
          foundationSweaters={foundationSweaters4}
          forFoundation={"fourth"}
          name={`ÉLELMISZERBANK EGYESÜLET`}
          websiteLink={"https://www.elelmiszerbank.hu/"}
        />
      </div>
      <div className="resetbutton__wrapper">
        <button onClick={() => reset()}>VISSZAÁLLÍTÁS</button>
      </div>
    </>
  );
}

export default FoundationsWrapper;
