import React, { useState, useEffect } from "react";

function Data({ dayIndex }) {

  if (dayIndex > 6 || dayIndex < 0) {
    console.log("Please enter a value between 0 and 6")
  }

  const [temperatureAverage, setTemperatureAverage] = useState([])
  const [temperatureMax, setTemperatureMax] = useState([])
  const [temperatureMin, setTemperatureMin] = useState([])
  const [temperatureSamples, setTemperatureSamples] = useState([])
  const [sol, setSol] = useState(0)
  //const [first_UTC, setFirst_UTC] = useState("")
  //const [last_UTC, setLast_UTC] = useState("")
  const [season, setSeason] = useState("")
  const [pressureAverage, setPressureAverage] = useState([])
  const [pressureMax, setPressureMax] = useState([])
  const [pressureMin, setPressureMin] = useState([])
  const [pressureSamples, setPressureSamples] = useState([])
  const [windspeedAverage, setWindSpeedAverage] = useState([])
  const [windspeedMax, setWindSpeedMax] = useState([])
  const [windspeedMin, setWindSpeedMin] = useState([])
  const [windspeedSamples, setWindspeedSamples] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.nasa.gov/insight_weather/?api_key=etIV1rEZcwSjjQq1qreyKogMVfTFsIgkMN1QhG6u&feedtype=json&ver=1.0")
      const data = await res.json()

      setTemperatureAverage(data[data.sol_keys[dayIndex]].AT.av)
      setTemperatureMax(data[data.sol_keys[dayIndex]].AT.mx)
      setTemperatureMin(data[data.sol_keys[dayIndex]].AT.mn)
      setTemperatureSamples(data[data.sol_keys[dayIndex]].AT.ct)
      setSol(data.sol_keys[dayIndex])
      //setFirst_UTC(data[data.sol_keys[dayIndex]].First_UTC)
      //setLast_UTC(data[data.sol_keys[dayIndex]].Last_UTC)
      setSeason(data[data.sol_keys[dayIndex]].Season)
      setPressureAverage(data[data.sol_keys[dayIndex]].PRE.av)
      setPressureMax(data[data.sol_keys[dayIndex]].PRE.mx)
      setPressureMin(data[data.sol_keys[dayIndex]].PRE.mn)
      setPressureSamples(data[data.sol_keys[dayIndex]].PRE.ct)
      setWindSpeedAverage(data[data.sol_keys[dayIndex]].HWS.av)
      setWindSpeedMax(data[data.sol_keys[dayIndex]].HWS.mx)
      setWindSpeedMin(data[data.sol_keys[dayIndex]].HWS.mn)
      setWindspeedSamples(data[data.sol_keys[dayIndex]].HWS.ct)
    }

    fetchData()
  }, [dayIndex]);

  return (
    // Design basic component below:
    <div className="main">
      <h1 className="sol">Sol: {sol} </h1>
      <h2>Elysium Planitia, {season}</h2>
      
      <div className="divBox">

        <div className="container">
          <h2 className="average">{Math.round(temperatureAverage)} °F</h2>
          <h2 className="maxMin">{Math.round(temperatureMax)}° / {Math.round(temperatureMin)}°</h2>
          <h2>Samples: {temperatureSamples}</h2>
        </div>

        <div className="container">
          <h2 className="average">{Math.round(pressureAverage)} hPa</h2>
          <h2 className="maxMin">{Math.round(pressureMax)} hPa / {Math.round(pressureMin)} hPa</h2>
          <h2>Samples: {pressureSamples}</h2>
        </div>

        <div className="container">
          <h2 className="average">{Math.round(windspeedAverage)} m/s</h2>
          <h2 className="maxMin">{Math.round(windspeedMax)} m/s / {Math.round(windspeedMin)} m/s</h2>
          <h2>Samples: {windspeedSamples}</h2>
        </div>

      </div>
    </div>

  )
}

export default Data;