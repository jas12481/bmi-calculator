import React, { useState } from 'react';

function FeettoCM({ onFeetChange }) {
  const [cmvalue, setcmvalue] = useState("");
  const handleOnChange = (event) => {
    const cmvalue = event.target.value * 30.48;
    const nearestcm = Math.floor(cmvalue);
    setcmvalue(nearestcm);
    onFeetChange(nearestcm);
  }

  return <div className='feettocm'>
    <div className='text-xl feettocm__heading'>Convert Feet to CM</div>
    <div className='feettocm__desc'>
      <code>Enter Height in Inches to Convert, Example:- 5.5</code>
    </div>
    <div className='feettocom__input'>
      <input type='number' onChange={handleOnChange} className="text-black" />
    </div>
    <div className='feettocm__result'>
      {cmvalue} cm
    </div>
  </div>
}

export default FeettoCM;
