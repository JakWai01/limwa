import React from "react";
import DataProvider from "./Components/DataProvider";
import Filter from "./Components/Filter";
import Day from "./Components/Day";
import "./App.css";
import Graph from "./Components/Graph";
import "./Graph.css";
import {Helmet} from "react-helmet";

const App = ({ token }) => (
  <DataProvider token={token}>
    {({ loading, error, days, format, setFormat }) => {
      if (loading) return <div>Loading days ...</div>;
      if (error) return <div>Error loading days: {error} ...</div>;

      return (
        <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Helmet>
          <Filter
            format={format}
            onChange={(newFormat) => setFormat(newFormat)}
          />
          <Graph days={days} />
          <div className="dayContainer">
            {days.map((day, index) => (
              <Day day={day} key={index} format={format} />
            ))}
          </div>
        </>
      );
    }}
  </DataProvider>
);

export default App;
