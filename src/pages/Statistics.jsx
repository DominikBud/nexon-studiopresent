import { useEffect, useState } from "react";
import Chart from "../components/Chart";
import DonationsCount from "../components/DonationsCount";
import DonationsTable from "../components/DonationsTable";
import NavigationLink from "../components/NavigationLink";

function Statistics() {
  const [allDonations, setAllDonations] = useState(undefined);
  const [countDonations, setCountDonations] = useState(undefined);
  let sums;
  async function sumSweaterFoundations() {
    fetch("https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8")
      .then((response) => response.json())
      .then((data) => {
        setAllDonations(data);
        sums = data.reduce(
          (acc, obj) => {
            acc.cntFoundation1 += Number(obj.cntFoundation1);
            acc.cntFoundation2 += Number(obj.cntFoundation2);
            acc.cntFoundation3 += Number(obj.cntFoundation3);
            acc.cntFoundation4 += Number(obj.cntFoundation4);
            return acc;
          },
          {
            cntFoundation1: 0,
            cntFoundation2: 0,
            cntFoundation3: 0,
            cntFoundation4: 0,
          }
        );
        setCountDonations(sums);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    sumSweaterFoundations();
  }, []);

  return (
    <div className="statistic__wrapper">
      <NavigationLink icon={"src\\assets\\arrow bacl.png"} destination={"/"} />
      <div className="count__wrapper">
        {countDonations !== undefined ? (
          <>
            {" "}
            <DonationsCount
              count={countDonations.cntFoundation1}
              name={`LÁMPÁS ’92ALAPÍTVÁNY`}
            />
            <DonationsCount
              count={countDonations.cntFoundation2}
              name={`SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY`}
            />
            <DonationsCount
              count={countDonations.cntFoundation3}
              name={`AUTIZMUS ALAPÍTVÁNY`}
            />
            <DonationsCount
              count={countDonations.cntFoundation4}
              name={`ÉLELMISZERBANK EGYESÜLET`}
            />
          </>
        ) : null}
      </div>{" "}
      {allDonations !== undefined && (
        <h2 className="lastdonation__heading">
          Last donation: {allDonations[allDonations.length - 1].date}
        </h2>
      )}
      {allDonations === undefined ? null : (
        <div className="donationstable__wrapper">
          <DonationsTable
            allDonations={allDonations}
            setAllDonations={setAllDonations}
          />
          {countDonations !== undefined && (
            <Chart countDonations={countDonations}></Chart>
          )}
        </div>
      )}
    </div>
  );
}

export default Statistics;
