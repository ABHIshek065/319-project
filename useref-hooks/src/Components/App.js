import "../css/App.css";
import React, { useRef, useState } from "react";
function App() {
  let nameInput = useRef();
  const [name, setName] = useState("");
  let [buttonStatus, setbuttonStatus] = useState(false)
  function submitNameHandler() {
    setName(nameInput.current.value);
    setbuttonStatus(true)
  }

  function goBackNameHandler(){
    setbuttonStatus(false)
  }
  return (
    <div className="container">
      <h2>Welcome to the usref bootcamp{name}!</h2>
      <input ref={nameInput} type="text" placeholder=" Enter Your name" />
      <button className={buttonStatus==false ? 'btn' : 'd-none'} onClick={submitNameHandler}>   Submit </button>
      <button className={buttonStatus==true ? 'btn' : 'd-none'} onClick={goBackNameHandler}>Go Back</button>
     
    </div>
  );
}

export default App;
