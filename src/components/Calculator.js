// Calculator.js
import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [numberOfStocks, setNumberOfStocks] = useState("");
  const [pricePerStock, setPricePerStock] = useState("");
  const [amountToApply, setAmountToApply] = useState("");
  const [numberOfStocksToApply, setNumberOfStocksToApply] = useState(null);

  useEffect(() => {
    // Calculate in real time when inputs change
    const numberOfStocksValue = parseFloat(numberOfStocks);
    const pricePerStockValue = parseFloat(pricePerStock);
    const amountToApplyValue = parseFloat(amountToApply);

    if (
      !isNaN(numberOfStocksValue) &&
      !isNaN(pricePerStockValue) &&
      !isNaN(amountToApplyValue)
    ) {
      const calculatedNumberOfStocksToApply =
        Math.floor(amountToApplyValue / pricePerStockValue) *
        numberOfStocksValue;
      setNumberOfStocksToApply(calculatedNumberOfStocksToApply);
    } else {
      setNumberOfStocksToApply(null);
    }
  }, [numberOfStocks, pricePerStock, amountToApply]);

  return (
    <div>
      <h2>Apply Calculator</h2>
      <label>
        Number of Stocks in Each Lot:
        <input
          type="number"
          value={numberOfStocks}
          onChange={(e) => setNumberOfStocks(e.target.value)}
        />
      </label>
      <br />
      <label>
        Price Per Stock :
        <input
          type="number"
          value={pricePerStock}
          onChange={(e) => setPricePerStock(e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount You Want to Apply :
        <input
          type="number"
          value={amountToApply}
          onChange={(e) => setAmountToApply(e.target.value)}
        />
      </label>
      <br />
      {numberOfStocksToApply !== null && (
        <p>
          Number of Stocks to Apply: <strong>{numberOfStocksToApply}</strong>
        </p>
      )}
    </div>
  );
};

export default Calculator;
