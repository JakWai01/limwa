import React from "react";
import Data from "./Components/Data";
import "./App.css";
import Graph from "./Components/Graph";

function App() {
  // [ ] Store data to make charts
  // [ ] Distinguish into easy and advanced mode
  // [ ] Create Component for swap to advanced mode on the bottom of the other modes onClick
  // [x] Style data component
  // [ ] Create graph component
  // [ ] Create prediction through interpolation
  // [ ] Style overall website
  // [ ] publish Web-App and connect with Website
  // [ ] convert between Fahrenheit, Celsius, Kelvin

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
