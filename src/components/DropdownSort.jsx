import { useState } from "react";

function DropdownSort({ sortAscending, sortDescending }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>Dropdown</button>
      {open && (
        <ul className="dropdown__menu">
          <li
            className="dropdown__menu-item"
            onClick={() => {
              sortAscending();
              setOpen(false);
            }}
          >
            Najnovije{" "}
          </li>
          <li
            className="dropdown__menu-item"
            onClick={() => {
              sortDescending();
              setOpen(false);
            }}
          >
            Najstarije
          </li>
        </ul>
      )}
    </div>
  );
}

export default DropdownSort;
