import { createContext, useContext, useState } from "react";

const SweatersDataContext = createContext();

const sweatersInital = [
  {
    id: 1,
    sweaterImg: "src\\assets\\sweater1.png",
    foldedSweater: "src\\assets\\sweater-white.png",
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
    id: 6,
    sweaterImg: "src\\assets\\sweater6.png",
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
    id: 2,
    sweaterImg: "src\\assets\\sweater2.png",
    foldedSweater: "src\\assets\\sweater-darkgreen.png",
  },
  {
    id: 3,
    sweaterImg: "src\\assets\\sweater3.png",
    foldedSweater: "src\\assets\\sweater-lightblue.png",
  },
];

const foundationSweaters1Initial = [
  {
    id: 10,
    sweaterImg: "src\\assets\\sweater10.png",
    foldedSweater: "src\\assets\\sweater-darkgreen.png",
  },
];

const foundationSweaters2Initial = [
  {
    id: 11,
    sweaterImg: "src\\assets\\sweater11.png",
    foldedSweater: "src\\assets\\sweater-blue.png",
  },
];

const foundationSweaters3Initial = [
  {
    id: 12,
    sweaterImg: "src\\assets\\sweater12.png",
    foldedSweater: "src\\assets\\sweater-lightblue.png",
  },
];

const foundationSweaters4Initial = [
  {
    id: 9,
    sweaterImg: "src\\assets\\sweater9.png",
    foldedSweater: "src\\assets\\sweater-maroon.png",
  },
];

function SweatersDataContextProvider({ children }) {
  const [sweaters, setSweaters] = useState(sweatersInital);
  const [foundationSweaters1, setFoundationSweaters1] = useState(
    foundationSweaters1Initial
  );
  const [foundationSweaters2, setFoundationSweaters2] = useState(
    foundationSweaters2Initial
  );
  const [foundationSweaters3, setFoundationSweaters3] = useState(
    foundationSweaters3Initial
  );
  const [foundationSweaters4, setFoundationSweaters4] = useState(
    foundationSweaters4Initial
  );

  const foundationsCount = {
    cntFoundation1: foundationSweaters1.length,
    cntFoundation2: foundationSweaters2.length,
    cntFoundation3: foundationSweaters3.length,
    cntFoundation4: foundationSweaters4.length,
  };

  function reset() {
    setSweaters(sweatersInital);
    setFoundationSweaters1(foundationSweaters1Initial);
    setFoundationSweaters2(foundationSweaters2Initial);
    setFoundationSweaters3(foundationSweaters3Initial);
    setFoundationSweaters4(foundationSweaters4Initial);
  }

  return (
    <SweatersDataContext.Provider
      value={{
        sweaters,
        setSweaters,

        reset,
        sweatersInital,
        foundationSweaters1,
        setFoundationSweaters1,
        foundationSweaters1Initial,

        foundationSweaters2,
        setFoundationSweaters2,
        foundationSweaters2Initial,

        foundationSweaters3,
        setFoundationSweaters3,
        foundationSweaters3Initial,

        foundationSweaters4,
        setFoundationSweaters4,
        foundationSweaters4Initial,

        foundationsCount,
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
