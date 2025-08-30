import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const append = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString()); // ⚠️ eval for simplicity
    } catch {
      setDisplay("Error");
    }
  };

  const clearr = () => {
    setDisplay(display.slice(0, -1) || "0");
  };

  const allclear = () => {
    setDisplay("0");
  };

  const buttonStyle = {
    height: "50px",
    width: "50px",
  };

  return (
    <div
      style={{
        border: "1px solid black",
        height: "460px",
        width: "300px",
        margin: "100px auto",
      }}
    >
      <input
        type="text"
        value={display}
        disabled
        style={{
          height: "45px",
          width: "262px",
          margin: "35px 15px 10px",
          textAlign: "right",
          padding: "20px",
          boxSizing: "border-box",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          margin: "25px",
        }}
      >
        <button style={buttonStyle} onClick={() => append("1")}>1</button>
        <button style={buttonStyle} onClick={() => append("2")}>2</button>
        <button style={buttonStyle} onClick={() => append("3")}>3</button>
        <button style={buttonStyle} onClick={() => append("+")}>+</button>
        <button style={buttonStyle} onClick={() => append("4")}>4</button>
        <button style={buttonStyle} onClick={() => append("5")}>5</button>
        <button style={buttonStyle} onClick={() => append("6")}>6</button>
        <button style={buttonStyle} onClick={() => append("-")}>-</button>
        <button style={buttonStyle} onClick={() => append("7")}>7</button>
        <button style={buttonStyle} onClick={() => append("8")}>8</button>
        <button style={buttonStyle} onClick={() => append("9")}>9</button>
        <button style={buttonStyle} onClick={() => append("*")}>*</button>
        <button style={buttonStyle} onClick={() => append("0")}>0</button>
        <button style={buttonStyle} onClick={() => append("00")}>00</button>
        <button style={buttonStyle} onClick={() => append(".")}>.</button>
        <button style={buttonStyle} onClick={() => append("/")}>/</button>

        <button style={buttonStyle} onClick={clearr}>C</button>
        <button style={buttonStyle} onClick={allclear}>AC</button>
        <button style={{ ...buttonStyle, width: "115px" }} onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
