import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import DonationsCount from "../components/DonationsCount";
import DonationsTable from "../components/DonationsTable";
import NavigationLink from "../components/NavigationLink";
import { useReadDonations } from "../hooks/useReadDonations";
import Spinner from "../components/Spinner";

function Statistics() {
  const [allDonations, setAllDonations] = useState(undefined);
  const [countDonations, setCountDonations] = useState(undefined);
  const { isLoading, donations } = useReadDonations();

  useEffect(() => {
    if (!isLoading && donations) {
      setAllDonations(donations);

      const sums = donations.reduce(
        (acc, obj) => {
          acc.lampas += Number(obj.lampas);
          acc.szentistvan += Number(obj.szentistvan);
          acc.autizmus += Number(obj.autizmus);
          acc.elelmiszerbank += Number(obj.elelmiszerbank);
          return acc;
        },
        {
          lampas: 0,
          szentistvan: 0,
          autizmus: 0,
          elelmiszerbank: 0,
        }
      );

      setCountDonations(sums);
    }
  }, [isLoading, donations]);

  return (
    <div className="statistic__wrapper">
      <NavigationLink icon={"src\\assets\\arrow bacl.png"} destination={"/"} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="count__wrapper">
            {countDonations && (
              <>
                <DonationsCount
                  count={countDonations.lampas}
                  name="LÁMPÁS ’92ALAPÍTVÁNY"
                />
                <DonationsCount
                  count={countDonations.szentistvan}
                  name="SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY"
                />
                <DonationsCount
                  count={countDonations.autizmus}
                  name="AUTIZMUS ALAPÍTVÁNY"
                />
                <DonationsCount
                  count={countDonations.elelmiszerbank}
                  name="ÉLELMISZERBANK EGYESÜLET"
                />
              </>
            )}
          </div>
          {allDonations && (
            <>
              <h2 className="lastdonation__heading">
                Last donation: {allDonations[allDonations.length - 1].date}
              </h2>
              <div className="donationstable__wrapper">
                <DonationsTable
                  allDonations={allDonations}
                  setAllDonations={setAllDonations}
                />
                {countDonations && (
                  <Chart countDonations={countDonations}></Chart>
                )}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Statistics;
