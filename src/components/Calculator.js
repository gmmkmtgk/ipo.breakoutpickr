import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      // Split the input into an array based on the "^" character
      const [base, exponent] = input.split("^");
      // Use Math.pow to perform exponentiation
      setResult(Math.pow(parseFloat(base), parseFloat(exponent)).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div>
      <input type="text" value={input} readOnly />
      <br />
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("2")}>2</button>
      <button onClick={() => handleButtonClick("3")}>3</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
      <br />
      <button onClick={() => handleButtonClick("4")}>4</button>
      <button onClick={() => handleButtonClick("5")}>5</button>
      <button onClick={() => handleButtonClick("6")}>6</button>
      <button onClick={() => handleButtonClick("-")}>-</button>
      <br />
      <button onClick={() => handleButtonClick("7")}>7</button>
      <button onClick={() => handleButtonClick("8")}>8</button>
      <button onClick={() => handleButtonClick("9")}>9</button>
      <button onClick={() => handleButtonClick("*")}>*</button>
      <br />
      <button onClick={() => handleButtonClick("0")}>0</button>
      <button onClick={handleClear}>C</button>
      <button onClick={handleCalculate}>=</button>
      <button onClick={() => handleButtonClick("/")}>/</button>
      <br />
      <button onClick={() => handleButtonClick("^")}>^</button>
      <div>Result: {result}</div>
    </div>
  );
};

export default Calculator;
