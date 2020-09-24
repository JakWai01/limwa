import React from "react";
import Data from "./Components/Data";
import "./App.css";
import Graph from "./Components/Graph";

function App() {

  const numbers = [6, 5, 4, 3, 2, 1, 0];

  const listData = numbers.map((number, index) => (
    <Data dayIndex={number} key={index} />
  ));

  return (
    <>
      {listData}
      <Graph />
    </>
  );
}

export default App;
