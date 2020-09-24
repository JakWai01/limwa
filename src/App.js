import React from 'react';
import Data from "./Components/Data"
import './App.css';

function App() {

  // [ ] Store data to make charts
  // [ ] Style data component  
  // [ ] Create graph component 
  // [ ] Create prediction through interpolation 
  // [ ] Style overall website

  const numbers = [6,5,4,3,2,1,0]

  const listData = numbers.map((number) => <Data dayIndex={number}/>)
  
  return (

    listData
    
  )
}
export default App;

