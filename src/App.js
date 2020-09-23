import React from 'react';
import Data from "./Components/Data"
import './App.css';


// [ ] make component to fetch Data
function App() {

  const numbers = [0,1,2,3,4,5,6]

  const listData = numbers.map((number) => <Data dayIndex={number}/>)
  
  return (

    listData
    
  )
}
export default App;

