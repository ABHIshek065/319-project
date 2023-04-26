import React from 'react'
import { useState } from "react";

function HookOne() {

    const [counter, setCounter] = useState(0);
const [cardStatus, setcardStatus] = useState(false)
    function incrementData() {
      setCounter(counter + 1);
      setcardStatus(true)
    }

    function HideCardHandler(){
        setcardStatus(false)
    }
  return (
     <div>
     <div className=" hook flex-div">
      <h1>introduction to useState hook {counter}!</h1>
      <h1 >counter app</h1> 
      <h1>{counter}</h1>
      <button className={cardStatus==false ? 'btn' : 'd-none'} onClick={incrementData}>Show Card</button> 
      <button className={cardStatus==true ? 'btn' : 'd-none'} onClick={HideCardHandler}>HIde Card</button> 
      </div>
      <div className="flex"> 
     <div className={cardStatus==false ? "d-none" : 'card'} >
    <div className="card-header">
      <img src="https://source.unsplash.com/1600x900/?salad" className="card-img" />
      <p className="ratings">6 ( 134 Votes)</p>
    </div>

    <div className="heading-flex">
    <h3>Caesar Salad</h3>

    <p className='must-try'>Must Try</p>
    </div>
    <p className="price">453</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor possimus non eveniet cum molestias ipsa voluptatum saepe illum expedita ex eligendi nam nisi, molestiae debitis laborum ullam quaerat? Est impedit fuga sunt nesciunt!</p>
  </div>
  </div>
  </div>

  )
}

export default HookOne