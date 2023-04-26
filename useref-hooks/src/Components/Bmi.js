import  { useState } from "react";
import  { useRef } from "react";
function Bmi() {
  let heightInput = useRef();
  let weightInput = useRef();
  let [bmi , setbmi] = useState('')
  function calculatebmiHandler(){
    let bmi = weightInput.current.value / (heightInput.current.value /100 * heightInput.current.value / 100)
    setbmi(bmi)
  }
  return (
    <div className="container">
        <h1>{bmi}</h1>
      <h1>Calculate your Bmi😊</h1>
     <div className="flex">
     <input ref={heightInput} type="text" placeholder="Enter your height" />
      <input ref={weightInput} type="text" placeholder="Enter your weight" />
     </div>
      <button className="btn" onClick={calculatebmiHandler}>Check</button>
    </div>
  );
}

export default Bmi;
