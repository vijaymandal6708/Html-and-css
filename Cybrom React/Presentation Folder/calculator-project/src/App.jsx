import './App.css'
import { useState } from 'react';
// this is calculator program

function App() {
  let [val, setVal] = useState("");

  const operators = ["+", "-", "*", "/", "%", "."];

  function append(input) {
    // Prevent two operators in a row
    if (operators.includes(input) && operators.includes(val.slice(-1))) {
      return; // do nothing
    }
    setVal(val + input);
  }

  function calculate() {
    try {
      setVal(eval(val).toString());
    } catch {
      setVal("Error");
    }
  }

  function clearr() {
    setVal(val.slice(0, -1));
  }

  function allclear() {
    setVal("");
  }

  return (
    <>
      <h2>Calculator Project</h2>
      <div className="container">
        <input type="text" value={val} id="display" disabled />
        <div className="button-container">
          <button className='button' onClick={allclear}>AC</button>
          <button className='button' onClick={clearr}>DEL</button>
          <button className='button' onClick={() => append("%")}>%</button>
          <button className='button' onClick={() => append("/")}>/</button>
          <button className='button' onClick={() => append("7")}>7</button>
          <button className='button' onClick={() => append("8")}>8</button>
          <button className='button' onClick={() => append("9")}>9</button>
          <button className='button' onClick={() => append("*")}>*</button>
          <button className='button' onClick={() => append("4")}>4</button>
          <button className='button' onClick={() => append("5")}>5</button>
          <button className='button' onClick={() => append("6")}>6</button>
          <button className='button' onClick={() => append("-")}>-</button>
          <button className='button' onClick={() => append("1")}>1</button>
          <button className='button' onClick={() => append("2")}>2</button>
          <button className='button' onClick={() => append("3")}>3</button>
          <button className='button' onClick={() => append("+")}>+</button>
          <button className='button' onClick={() => append("00")}>00</button>
          <button className='button' onClick={() => append("0")}>0</button>
          <button className='button' onClick={() => append(".")}>.</button>
          <button className='button equal' onClick={calculate}>=</button>
        </div>
      </div>
    </>
  )
}

export default App;
