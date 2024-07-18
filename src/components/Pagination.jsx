function Pagination({ handleRight, handleLeft }) {
  return (
    <div className="pagination__wrapper">
      <button onClick={handleLeft} className="arrow__wrapper">
        <img
          src="src\assets\right-arrow.png"
          className="left"
          alt="pagination__arrow"
        />{" "}
      </button>
      <button onClick={handleRight} className="arrow__wrapper">
        <img src="src\assets\right-arrow.png" alt="pagination__arrow" />{" "}
      </button>
    </div>
  );
}

export default Pagination;
