import React, { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [temperatureAverage, setTemperatureAverage] = useState([])
  const [temperatureMax, setTemperatureMax] = useState([])
  const [temperatureMin, setTemperatureMin] = useState([])
  const [temperatureSamples, setTemperatureSamples] = useState([])
  const [sol, setSol] = useState(0)
  const [first_UTC, setFirst_UTC] = useState("")
  const [last_UTC, setLast_UTC] = useState("")
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

      setTemperatureAverage(data[data.sol_keys[6]].AT.av)
      setTemperatureMax(data[data.sol_keys[6]].AT.mx)
      setTemperatureMin(data[data.sol_keys[6]].AT.mn)
      setTemperatureSamples(data[data.sol_keys[6]].AT.ct)
      setSol(data.sol_keys[6])
      setFirst_UTC(data[data.sol_keys[6]].First_UTC)
      setLast_UTC(data[data.sol_keys[6]].Last_UTC)
      setSeason(data[data.sol_keys[6]].Season)
      setPressureAverage(data[data.sol_keys[6]].PRE.av)
      setPressureMax(data[data.sol_keys[6]].PRE.mx)
      setPressureMin(data[data.sol_keys[6]].PRE.mn)
      setPressureSamples(data[data.sol_keys[6]].PRE.ct)
      setWindSpeedAverage(data[data.sol_keys[6]].HWS.av)
      setWindSpeedMax(data[data.sol_keys[6]].HWS.mx)
      setWindSpeedMin(data[data.sol_keys[6]].HWS.mn)
      setWindspeedSamples(data[data.sol_keys[6]].HWS.ct)
    }

    fetchData()
  }, []);




  return (
    <div><h1>Elysium Planitia</h1><h1>Sol: {sol} </h1><h1>Average temperature: {temperatureAverage} °F</h1><h1>Max temperature: {temperatureMax} °F</h1><h1>Min temperature: {temperatureMin}°F</h1><h1>Number of temperature-samples this sol: {temperatureSamples}</h1><h1>First_UTC: {first_UTC}</h1><h1>Last_UTC: {last_UTC}</h1><h1>Season: {season}</h1><h1>Average pressure: {pressureAverage} hPa</h1><h1>Max pressure: {pressureMax} hPa</h1><h1>Min pressure: {pressureMin} hPa</h1><h1>Number of pressure-samples this sol: {pressureSamples}</h1><h1>Average windspeed: {windspeedAverage} m/s</h1><h1>Max windspeed: {windspeedMax} m/s</h1><h1>Min windspeed: {windspeedMin} m/s</h1><h1>Number of windspeed samples this sol: {windspeedSamples}</h1></div>
  )
}

export default App;

