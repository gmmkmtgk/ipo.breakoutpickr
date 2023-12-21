// Calculator.js
import React, { useState, useEffect } from "react";
import * as math from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleEvaluate = () => {
    try {
      const evaluationResult = math.evaluate(input);
      setResult(evaluationResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handlePower = () => {
    setInput((prevInput) => prevInput + "^");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleEvaluate();
    } else {
      setInput((prevInput) => prevInput + event.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [input]);

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter expression"
        />
      </div>
      <div>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
      </div>
      <div>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={handlePower}>^</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;
