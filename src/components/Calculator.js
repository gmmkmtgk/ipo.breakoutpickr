import React, { useState } from "react";
import "./Calculator.css"; // Import the CSS file

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
// Replace "^" with "**" for correct exponentiation in JavaScript
      const expression = input.replace(/\^/g, "**");
// eslint-disable-next-line no-eval
const calculatedResult = eval(expression);

// Check if the result is a decimal
const isDecimal = calculatedResult % 1 !== 0;

// Round to 2 decimal places if it's a decimal, otherwise, display as integer
const roundedResult = isDecimal
  ? calculatedResult.toFixed(2)
  : calculatedResult.toString();

setResult(roundedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleInputChange = (event) => {
// Trigger calculation when Enter key is pressed
    if (event.key === "Enter") {
      handleCalculate();
    } else {
      setInput(event.target.value);
    }
  };

  const handleDecimal = () => {
// Check if the last character is not already a decimal point
    if (!input.endsWith(".")) {
      setInput((prevInput) => prevInput + ".");
    }
  };

  return (
    <div className="calculator-container">
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleInputChange}
          placeholder="0"
        />
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("(")}>(</button>
        <button onClick={() => handleButtonClick(")")}>)</button>
        <button onClick={handleClear} className="clear-button">
          C
        </button>
        <button onClick={() => handleButtonClick("^")}>^</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handleDecimal}>.</button>
        <button onClick={handleCalculate} className="equals-button">
          =
        </button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
