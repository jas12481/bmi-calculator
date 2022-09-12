import React, { useState } from 'react';

import './App.css'

import FeettoCM from './Components/FeettoCM/FeettoCM';
import Calculator from './Components/Calculator/Calculator';


function App() {
  const [cmvalue, setCMvalue] = useState("");
  const feettochchange = (feettocmval) => {
    setCMvalue(feettocmval);
  }

  return (
    <div className="App">
      <h1 className='text-3xl font-bold text-center'>BMI Calculator</h1>
      <Calculator data={cmvalue} />
      <hr className='my-3 flex' />
      <FeettoCM onFeetChange={feettochchange} />
    </div>
  );
}

export default App;
