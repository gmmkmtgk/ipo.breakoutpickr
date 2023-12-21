// IPOCalculator.js
import React, { useState, useEffect } from "react";

const IPOIPOCalculator = () => {
  const [lotSize, setLotSize] = useState("");
  const [pricePerStock, setPricePerStock] = useState("");
  const [amountToApply, setAmountToApply] = useState("");
  const [lotSizeToApply, setLotSizeToApply] = useState(null);

  useEffect(() => {
    // Calculate in real time when inputs change
    const lotSizeValue = parseFloat(lotSize);
    const pricePerStockValue = parseFloat(pricePerStock);
    const amountToApplyValue = parseFloat(amountToApply);

    if (
      !isNaN(lotSizeValue) &&
      !isNaN(pricePerStockValue) &&
      !isNaN(amountToApplyValue)
    ) {
      const calculatedLotSizeToApply =
        (Math.floor(
          (amountToApplyValue * 100000) / (pricePerStockValue * lotSizeValue)
        ) +
          1) *
        lotSizeValue;
      setLotSizeToApply(calculatedLotSizeToApply);
    } else {
      setLotSizeToApply(null);
    }
  }, [lotSize, pricePerStock, amountToApply]);

  return (
    <div>
      <h2>IPO Shares to Apply Calculator</h2>
      <label>
        Lot Size :
        <input
          type="number"
          value={lotSize}
          onChange={(e) => setLotSize(e.target.value)}
        />
      </label>
      <br />
      <label>
        IPO Price : 
        <input
          type="number"
          value={pricePerStock}
          onChange={(e) => setPricePerStock(e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount (in lakhs) :
        <input
          type="number"
          value={amountToApply}
          onChange={(e) => setAmountToApply(e.target.value)}
        />
      </label>
      <br />
      {lotSizeToApply !== null && (
        <p>
          Number of Stocks to Apply: <strong>{lotSizeToApply}</strong>
        </p>
      )}
    </div>
  );
};

export default IPOIPOCalculator;
