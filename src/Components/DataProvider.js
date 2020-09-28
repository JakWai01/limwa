import { useState, useEffect } from "react";
import firebase from "firebase";

const DataProvider = ({ token, children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [format, setFormat] = useState("F");
  const [data, setData] = useState({});
  const [windspeedFormat, setWindspeedFormat] = useState("m/s");
  const [days, setDays] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/insight_weather/?api_key=${token}&feedtype=json&ver=1.0`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => setError(e));
  }, [token]);

  useEffect(() => {
    data.sol_keys &&
      setDays(
        data.sol_keys.map((solKey) =>
          convertToInternalDay(data[solKey], solKey, format, windspeedFormat)
        )
      );
  }, [data, format, windspeedFormat]);
  
  let solkey = 652
  useEffect(() => {
    
    days.length !== 0 && solkey < days[6].sol && 
      firebase.database().ref("sol/").push(days[6])
      solkey++;
        
  }, [days, solkey]);

  return children({
    loading,
    error,
    days,

    format,
    setFormat,
    windspeedFormat,
    setWindspeedFormat,
  });
};

const convertToInternalDay = (day, solKey, format, windspeedFormat) => {
  //console.log(day);
  return {
    sol: solKey,
    season: day.Season,
    temperatureAverage:
      format === "K"
        ? Math.round(((day.AT.av - 32) * 5) / 9 + 273.15)
        : format === "C"
        ? Math.round(((day.AT.av - 32) * 5) / 9)
        : Math.round(day.AT.av),
    temperatureMax:
      format === "K"
        ? Math.round(((day.AT.mx - 32) * 5) / 9 + 273.15)
        : format === "C"
        ? Math.round(((day.AT.mx - 32) * 5) / 9)
        : Math.round(day.AT.mx),
    temperatureMin:
      format === "K"
        ? Math.round(((day.AT.mn - 32) * 5) / 9 + 273.15)
        : format === "C"
        ? Math.round(((day.AT.mn - 32) * 5) / 9)
        : Math.round(day.AT.mn),
    temperatureSamples: Math.round(day.AT.ct),
    pressureAverage: Math.round(day.PRE.av),
    pressureMax: Math.round(day.PRE.mx),
    pressureMin: Math.round(day.PRE.mn),
    pressureSamples: Math.round(day.PRE.ct),
    windspeedAverage:
      windspeedFormat === "mph"
        ? Math.round(day.HWS.av * 2.23694)
        : Math.round(day.HWS.av),
    windspeedMax:
      windspeedFormat === "mph"
        ? Math.round(day.HWS.mx * 2.23694)
        : Math.round(day.HWS.mx),
    windspeedMin:
      windspeedFormat === "mph"
        ? Math.round(day.HWS.mn * 2.23694)
        : Math.round(day.HWS.mn),
    windspeedSamples: Math.round(day.HWS.ct),
  };
};

export default DataProvider;
