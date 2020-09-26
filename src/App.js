import React from "react";
import DataProvider from "./Components/DataProvider";
import Filter from "./Components/Filter";
import Day from "./Components/Day";
import "./App.css";
import Graph from "./Components/Graph";
import "./Graph.css"

const App = ({ token }) => (
  <DataProvider token={token}>
    {({ loading, error, days, format, setFormat }) => {
      if (loading) return <div>Loading days ...</div>;
      if (error) return <div>Error loading days: {error} ...</div>;

      return (
        <>
          <Filter
            format={format}
            onChange={(newFormat) => setFormat(newFormat)}
          />

          {days.map((day, index) => (
            <Day day={day} key={index} format={format} />
          ))}

          <Graph days={days} />
        </>
      );
    }}
  </DataProvider>
);

export default App;
