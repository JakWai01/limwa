import React, { useEffect, useState } from 'react';

import './App.css';

// [x] Fetch API
// [ ] Make fetching from API a reusable function or get all Data seperately
// [ ] Create Design Template first
// [ ] Check how old the data is

function App() {
  // Check which Datatype is being returned and adjust default value therefor
  const [temperatureAverage, setTemperatureAverage] = useState([])
  const [temperatureMax, setTemperatureMax] = useState([])
  const [temperatureMin, setTemperatureMin] = useState([])
  const [temperatureSamples, setTemperatureSamples] = useState([])
  const [sol, setSol] = useState(0)
  const [First_UTC, setFirst_UTC] = useState("")
  const [Last_UTC, setLast_UTC] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.nasa.gov/insight_weather/?api_key=etIV1rEZcwSjjQq1qreyKogMVfTFsIgkMN1QhG6u&feedtype=json&ver=1.0")
      const data = await res.json()

      setTemperatureAverage(data[data.sol_keys[6]].AT.av) // enter value for temperature here
      setTemperatureMax(data[data.sol_keys[6]].AT.mx) 
      setTemperatureMin(data[data.sol_keys[6]].AT.mn)
      setTemperatureSamples(data[data.sol_keys[6]].AT.ct)
      setSol(data.sol_keys[6])
      setFirst_UTC(data[data.sol_keys[6]].First_UTC)
      setLast_UTC(data[data.sol_keys[6]].Last_UTC)
    }

    fetchData()
  }, []);




  return (
  <div><h1>Sol: {sol} </h1><h1>Average temperature: {temperatureAverage}°F</h1><h1>Max Temperature: {temperatureMax}°F</h1><h1>Min Temperature: {temperatureMin}°F</h1><h1>Number of samples this sol: {temperatureSamples}</h1><h1>First_UTC: {First_UTC}</h1><h1>Last_UTC: {Last_UTC}</h1></div>
  )
}

export default App;

