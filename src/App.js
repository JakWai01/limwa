import React, { useEffect, useState } from 'react';

import './App.css';

// [x] Fetch API

function App() {
  // Check which Datatype is being returned and adjust default value therefor
  const [temperature, setTemperature] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.nasa.gov/insight_weather/?api_key=etIV1rEZcwSjjQq1qreyKogMVfTFsIgkMN1QhG6u&feedtype=json&ver=1.0")
      const data = await res.json()

      setTemperature(data[data.sol_keys[0]].AT.av) // enter value for temperature here
    }

    fetchData()
  }, []);




  return (<div>{JSON.stringify(temperature)}</div>)
}

export default App;

