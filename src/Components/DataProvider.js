import { useState, useEffect } from "react";

const DataProvider = ({ token, children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [format, setFormat] = useState("F");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=etIV1rEZcwSjjQq1qreyKogMVfTFsIgkMN1QhG6u&feedtype=json&ver=1.0"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, []);

  return children({
    loading,
    error,
    days:
      data.sol_keys &&
      data.sol_keys.map((solKey) =>
        convertToInternalDay(data[solKey], solKey, format)
      ),
    format,
    setFormat,
  });
};

const convertToInternalDay = (day, solKey, format) => {
  console.log(day)
  return {
    sol: solKey,
    season: day.Season,
    temperatureAverage:
      format === "K"
        ? Math.round((day.AT.av - 32) * 5/9 + 273.15)
        : format === "C"
        ? Math.round((day.AT.av - 32) * 5/9)
        : Math.round(day.AT.av),
    temperatureMax:
      format === "K"
        ? Math.round((day.AT.mx - 32) * 5/9 + 273.15)
        : format === "C"
        ? Math.round((day.AT.mx - 32) * 5/9)
        : Math.round(day.AT.mx),
    temperatureMin:
      format === "K"
        ? Math.round((day.AT.mn - 32) * 5/9 + 273.15)
        : format === "C"
        ? Math.round((day.AT.mn - 32) * 5/9)
        : Math.round(day.AT.mn),
    temperatureSamples: Math.round(day.AT.ct),
    pressureAverage: Math.round(day.PRE.av),
    pressureMax: Math.round(day.PRE.mx),
    pressureMin: Math.round(day.PRE.mn),
    pressureSamples: Math.round(day.PRE.ct),
    windspeedAverage: Math.round(day.HWS.av),
    windspeedMax: Math.round(day.HWS.mx),
    windspeedMin: Math.round(day.HWS.mn),
    windspeedSamples: Math.round(day.HWS.ct)
     
  };
};

export default DataProvider;
