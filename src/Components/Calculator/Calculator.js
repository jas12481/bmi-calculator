import React, { useEffect, useState } from "react";

function Calculator({ data }) {
  const [cmvalue, setCMvalue] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [info, setInfo] = useState("");
  const [infocolor, setInfocolor] = useState("");

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
      setInfocolor("underweight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
      setInfocolor("healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
      setInfocolor("overweight");
    } else if (val > 30) {
      setInfo("Obese");
      setInfocolor("obese");
    } else {
      setInfo("");
      setInfocolor("");
    }

  }, [data, weight, height, cmvalue])

  return (
    <div className="calculator text-xl">
      <div className="calculator__height flex flex-col">
        <span className="calculator__height--enter">Enter Height(cm):</span>
        {data ? <span className="my-5 text-2xl">{data} cm</span> : <input type="number" onChange={handleHeight} />}
        <span className="calculator__height--info break-normal">Need to find Height in CM? Just enter Height in Feet, in "Convert Feet to CM" calculator below</span>
      </div>
      <div className="calculator__weight mt-4 flex flex-col">
        <span className="calculator__weight--enter">Enter Weight(kg)</span>
        <input type="number" onChange={handleWight} />
      </div>
      <div className="calculator__result flex flex-col text-3xl">
        {!isNaN(bmi) && <div className="calculator__result--bmi">BMI - {bmi}</div>}
        {info && <div className={`calculator__result--info ${infocolor}`}>Weight Category - {info}</div>}
      </div>
    </div>
  )
}

export default Calculator;
