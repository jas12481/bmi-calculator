import React, { useState } from 'react';

import FeettoCM from './Components/FeettoCM/FeettoCM';
import Calculator from './Components/Calculator/Calculator';


function App() {
  const [cmvalue, setCMvalue] = useState("");
  const feettochchange = (feettocmval) => {
    setCMvalue(feettocmval);
  }

  return (
    <div className="App">
      <FeettoCM onFeetChange={feettochchange} />
      <hr className='my-3 flex' />
      <Calculator data={cmvalue} />
    </div>
  );
}

export default App;
