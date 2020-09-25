import React from "react";
import DataProvider from "./Components/DataProvider";
import Filter from "./Components/Filter";
import Day from "./Components/Day";
import "./App.css"

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

          {/* <Graph days={days} /> */}

          {days.map((day, index) => (
            <Day day={day} key={index} format={format} />
          ))}
        </>
      );
    }}
  </DataProvider>
);

export default App;
