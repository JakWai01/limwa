import React,  {useState, useEffect}from "react";

function Data({dayIndex}) {

    if (dayIndex > 6 || dayIndex < 0) {
        console.log("Please enter a value between 0 and 6")
    }

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

      setTemperatureAverage(data[data.sol_keys[dayIndex]].AT.av)
      setTemperatureMax(data[data.sol_keys[dayIndex]].AT.mx)
      setTemperatureMin(data[data.sol_keys[dayIndex]].AT.mn)
      setTemperatureSamples(data[data.sol_keys[dayIndex]].AT.ct)
      setSol(data.sol_keys[dayIndex])
      setFirst_UTC(data[data.sol_keys[dayIndex]].First_UTC)
      setLast_UTC(data[data.sol_keys[dayIndex]].Last_UTC)
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
    <div>
      <h1>Elysium Planitia</h1>
      <h1>Sol: {sol} </h1><h1>Average temperature: {temperatureAverage} °F</h1>
      <h1>Max temperature: {temperatureMax} °F</h1>
      <h1>Min temperature: {temperatureMin}°F</h1>
      <h1>Number of temperature-samples this sol: {temperatureSamples}</h1>
      <h1>First_UTC: {first_UTC}</h1>
      <h1>Last_UTC: {last_UTC}</h1><h1>Season: {season}</h1>
      <h1>Average pressure: {pressureAverage} hPa</h1>
      <h1>Max pressure: {pressureMax} hPa</h1>
      <h1>Min pressure: {pressureMin} hPa</h1>
      <h1>Number of pressure-samples this sol: {pressureSamples}</h1>
      <h1>Average windspeed: {windspeedAverage} m/s</h1>
      <h1>Max windspeed: {windspeedMax} m/s</h1>
      <h1>Min windspeed: {windspeedMin} m/s</h1>
      <h1>Number of windspeed samples this sol: {windspeedSamples}</h1>
    </div>

  )
}

export default Data;