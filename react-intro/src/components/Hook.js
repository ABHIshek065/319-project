import { useState } from "react";

function Hook() {
    const [counter, setCounter] = useState(90);

  function incrementData() {
    setCounter(counter + 1);
  }
  function decrementData() {
    setCounter(counter - 1);
  }
  return (
    <div className=" hook flex-div">
      <h1>introduction to useState hook {counter}!</h1>
      <h1 >counter app</h1> 
      <h1>{counter}</h1>
      <button className="btn" onClick={incrementData}>{" "}Increment</button>
      <button className="btn" onClick={decrementData}>
        {" "}
        decrement
      </button>
    </div>
  );
}

export default Hook;
