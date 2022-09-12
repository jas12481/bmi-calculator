import React, { useEffect, useState } from "react";

function Calculator({ data }) {
  const [cmvalue, setCMvalue] = useState("");
  const [weight, setWeight] = useState("");

  const [height, setHeight] = useState("");

  const [bmi, setBMI] = useState("");

  const [info, setInfo] = useState("");

  const handleHeight = (event) => {
    setCMvalue(event.target.value);
  }

  const handleWight = (event) => {
    setWeight(event.target.value);
  }

  useEffect(() => {
    if (cmvalue !== '') {
      setHeight(cmvalue);
    } else {
      setHeight(data);
    }
    let val = ([weight / height / height] * 10000).toFixed(1);

    setBMI(val);

    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else if (val > 30) {
      setInfo("Obese");
    } else {
      setInfo("");
    }

  }, [data, weight, height, cmvalue])

  return (
    <div className="calculator">
      <div className="calculator__height flex flex-col">
        <span className="calculator__height--enter">Enter Height(cm):</span>
        <span className="calculator__height--info">Need to find in CM? Just enter Height in Feet in Height Calculator</span>
        {data ? data + `cm` : <input type="number" onChange={handleHeight} />}
      </div>
      <div className="calculator__weight mt-4">
        <span className="calculator__weight--enter">Enter Weight(kg)</span>
        <input type="number" onChange={handleWight} />
      </div>
      <div className="calculator__result">
        BMI - {!isNaN(bmi) && <div className="calculator__result--bmi">{bmi}</div>}
        Weight Class - {info && <div className="calculator__result--info">{info}</div>}
      </div>
    </div>
  )
}

export default Calculator;
