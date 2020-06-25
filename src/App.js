import React from 'react';
import './App.css';
import Dinner from './dinner.js';
function App() {
  return (
    <div className="App">
      <Dinner country= "PAKISTAN" place= "Badshahi Mosque"/>

      <hr/>
      
      <Dinner country= "PAKISTAN" place= "Minar-e-Pakistan"/>

      <hr/>
      
      <Dinner country= "PAKISTAN" place= "Safari Park"/>

      <hr/>

      <Dinner country= "PAKISTAN" place= "Museum"/>

    </div>
  );
}

export default App;
