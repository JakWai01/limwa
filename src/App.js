import React, { useState } from "react";
import Data from "./Components/Data";
import "./App.css";
import Graph from "./Components/Graph";

function App() {
  const numbers = [6, 5, 4, 3, 2, 1, 0];

  const [unit, setUnit] = useState("");
  console.log(unit);

  const listData = numbers.map((number, index) => (
    <Data dayIndex={number} key={index} unit={unit} />
  ));

  return (
    <>
      <form>
        <select onChange={(e) => setUnit(e.target.value)}>
          <option defaultValue value="Fahrenheit">
            F
          </option>
          <option value="Celsius">C</option>
          <option value="Kelvin">K</option>
        </select>
      </form>
      {listData}
      <Graph />
    </>
  );
}

export default App;
