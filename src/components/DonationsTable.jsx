import { useEffect, useState } from "react";
import Pagination from "./Pagination";

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
    console.log(index);

    fetch(
      `https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8/${index}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <table className="donations__table">
        <tr>
          <td>Foundation1</td>
          <td>Foundation2</td>
          <td>Foundation3</td>
          <td>Foundation4</td>
          <td>Date</td>
        </tr>
        {tableData?.map((el, _i) => (
          <tr key={_i}>
            <td>{el.cntFoundation1}</td>
            <td>{el.cntFoundation2}</td>
            <td>{el.cntFoundation3}</td>
            <td>{el.cntFoundation4}</td>
            <td>{el.date}</td>
            <td>
              {" "}
              <button onClick={() => deleteRow(el)}>Delete</button>{" "}
            </td>
          </tr>
        ))}
      </table>

      <button onClick={() => setAscendingDateSort(!ascendingDateSort)}>
        Sort
      </button>
      <Pagination handleLeft={handleLeft} handleRight={handleRight} />
    </>
  );
}

export default DonationsTable;
