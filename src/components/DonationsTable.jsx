function DonationsTable({ allDonations }) {
  return (
    <table className="donations__table">
      <tr>
        <td>Foundation1</td>
        <td>Foundation2</td>
        <td>Foundation3</td>
        <td>Foundation4</td>
        <td>Date</td>
      </tr>
      {allDonations.map(
        (el, _i) =>
          _i < 10 && (
            <tr key={_i}>
              <td>{el.cntFoundation1}</td>
              <td>{el.cntFoundation2}</td>
              <td>{el.cntFoundation3}</td>
              <td>{el.cntFoundation4}</td>
              <td>{el.date}</td>
            </tr>
          )
      )}
    </table>
  );
}

export default DonationsTable;
