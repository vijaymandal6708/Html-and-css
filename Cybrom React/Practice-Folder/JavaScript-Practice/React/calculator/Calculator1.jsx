import React from 'react'
import { useState } from 'react';

const Calculator = () => {

  let [val,setVal] = useState("");

  function append(v){
    setVal(val+v);
  }

  function calculate(){
    setVal(eval(val)); 
  }

  return (
    <div>
      <h2>Calculator</h2>
      <div className="container">
        <input type="text" value={val} id="display" disabled />
        <div className="button-container">
            <button onClick={()=>{append("1")}}>1</button>
            <button onClick={()=>{append("+")}}>+</button>
            <button onClick={()=>{calculate()}}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
