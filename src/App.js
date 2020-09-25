import React from "react";

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

          <Graph days={days} />
          <DaysList>
            {days.map((day) => (
              <Day day={day} />
            ))}
          </DaysList>
        </>
      );
    }}
  </DataProvider>
);

export default App;
