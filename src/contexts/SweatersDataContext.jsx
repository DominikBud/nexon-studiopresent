import { createContext, useContext, useState } from "react";

const SweatersDataContext = createContext();

const sweatersInital = [
  {
    id: 1,
    sweaterImg: "src\\assets\\sweater1.png",
    foldedSweater: "src\\assets\\sweater-white.png",
  },
  {
    id: 2,
    sweaterImg: "src\\assets\\sweater2.png",
    foldedSweater: "src\\assets\\sweater-darkgreen.png",
  },
  {
    id: 3,
    sweaterImg: "src\\assets\\sweater3.png",
    foldedSweater: "src\\assets\\sweater-lightblue.png",
  },
  {
    id: 4,
    sweaterImg: "src\\assets\\sweater4.png",
    foldedSweater: "src\\assets\\sweater-red.png",
  },
  {
    id: 5,
    sweaterImg: "src\\assets\\sweater5.png",
    foldedSweater: "src\\assets\\sweater-green.png",
  },
  {
    id: 6,
    sweaterImg: "src\\assets\\sweater6.png",
    foldedSweater: "src\\assets\\sweater-lightblue.png",
  },
  {
    id: 7,
    sweaterImg: "src\\assets\\sweater7.png",
    foldedSweater: "src\\assets\\sweater-beige.png",
  },
  {
    id: 8,
    sweaterImg: "src\\assets\\sweater8.png",
    foldedSweater: "src\\assets\\sweater-lightgreen.png",
  },
  {
    id: 9,
    sweaterImg: "src\\assets\\sweater9.png",
    foldedSweater: "src\\assets\\sweater-maroon.png",
  },
];

const foundationSweatersInitial = [
  {
    id: 10,
    sweaterImg: "src\\assets\\sweater10.png",
    foldedSweater: "src\\assets\\sweater-darkgreen.png",
  },
  {
    id: 11,
    sweaterImg: "src\\assets\\sweater11.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
  {
    id: 12,
    sweaterImg: "src\\assets\\sweater12.png",
    foldedSweater: "src\\assets\\sweater-lightblue.png",
  },
];

function SweatersDataContextProvider({ children }) {
  const [sweaters, setSweaters] = useState(sweatersInital);
  const [foundationSweaters, setFoundationSweaters] = useState(
    foundationSweatersInitial
  );

  function reset() {
    setSweaters(sweatersInital);
    setFoundationSweaters(foundationSweatersInitial);
  }

  return (
    <SweatersDataContext.Provider
      value={{
        sweaters,
        setSweaters,
        foundationSweaters,
        setFoundationSweaters,
        reset,
      }}
    >
      {children}
    </SweatersDataContext.Provider>
  );
}

function useSweatersData() {
  const context = useContext(SweatersDataContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");

  return context;
}

export { SweatersDataContextProvider, useSweatersData };
