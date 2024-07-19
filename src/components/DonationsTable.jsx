import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { useDeleteDonationIndex } from "../hooks/useDeleteDonationIndex";
import DropdownSort from "./DropdownSort";

const perPage = 10;

const parseDate = (dateString) => {
  const [datePart, timePart] = dateString.split(", ");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
};

function DonationsTable({ allDonations, setAllDonations }) {
  const [ascendingDateSort, setAscendingDateSort] = useState(true);
  const [page, setPage] = useState(1);
  const [tableData, setTableData] = useState();
  const { isLoading, deleteDonation } = useDeleteDonationIndex();

  useEffect(() => {
    setTableData(
      ascendingDateSort
        ? allDonations
            ?.slice((page - 1) * 10, page * 10)
            .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        : allDonations
            ?.slice((page - 1) * 10, page * 10)
            .sort((a, b) => parseDate(a.date) - parseDate(b.date))
    );
  }, [ascendingDateSort, allDonations, setAllDonations, page]);

  function handleRight() {
    if (page + 1 > Math.ceil(allDonations.length / perPage)) return;
    setPage((curr) => curr + 1);
  }

  function handleLeft() {
    if (page - 1 < 1) return;
    setPage((curr) => curr - 1);
  }

  async function deleteRow(el) {
    let index;

    allDonations.map((donation, _i) => {
      if (donation === el) index = _i;
    });

    deleteDonation(index);
  }

  return (
    <>
      <DropdownSort
        sortAscending={() => setAscendingDateSort(false)}
        sortDescending={() => setAscendingDateSort(true)}
      />
      <table className="donations__table">
        <tr>
          <td>LÁMPÁS ’92ALAPÍTVÁNY</td>
          <td>SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY</td>
          <td> AUTIZMUS ALAPÍTVÁNY</td>
          <td>ÉLELMISZERBANK EGYESÜLET</td>
          <td>timestamp</td>
        </tr>
        {tableData?.map((el, _i) => (
          <tr key={_i}>
            <td>{el.lampas}</td>
            <td>{el.szentistvan}</td>
            <td>{el.autizmus}</td>
            <td>{el.elelmiszerbank}</td>
            <td>{el.date}</td>
            <td>
              {" "}
              <button onClick={() => deleteRow(el)}>
                <img src="src\assets\trash-can.png" alt="trash" />
              </button>{" "}
            </td>
          </tr>
        ))}
      </table>
      <Pagination
        page={page}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </>
  );
}

export default DonationsTable;
