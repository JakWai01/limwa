import React from "react";

function Day({ day, format }) {
  return (
    <>
      <div className="main">
        <h1 className="sol">Sol: {day.sol} </h1>
        <h2>Elysium Planitia, {day.season}</h2>

        <div className="divBox">
          <div className="container">
            <h2 className="average">{day.temperatureAverage} {format === "K"? "K": format === "C"? "C" : "F"}</h2>
            <h2 className="maxMin">
              {day.temperatureMax} / {day.temperatureMin}
            </h2>
            <h2>Samples: {day.temperatureSamples}</h2>
          </div>

          <div className="container">
            <h2 className="average">{day.pressureAverage} hPa</h2>
            <h2 className="maxMin">
              {day.pressureMax} / {day.pressureMin}
            </h2>
            <h2>Samples: {day.pressureSamples}</h2>
          </div>

          <div className="container">
            <h2 className="average">{day.windspeedAverage} m/s</h2>
            <h2 className="maxMin">
              {day.windspeedMax} / {day.windspeedMin}
            </h2>
            <h2>Samples: {day.windspeedSamples}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Day;
