// IPOCalculator.js
import React, { useState, useEffect } from 'react'

const IPOCalculator = () => {
  const [lotSize, setLotSize] = useState('')
  const [pricePerStock, setPricePerStock] = useState('')

  const [amountToApply, setAmountToApply] = useState('10')
  const [lotSizeToApply, setLotSizeToApply] = useState(null)

  useEffect(() => {
    // Calculate in real time when inputs change
    const lotSizeValue = parseFloat(lotSize)
    const pricePerStockValue = parseFloat(pricePerStock)
    const amountToApplyValue = parseFloat(amountToApply)

    if (
      !isNaN(lotSizeValue) &&
      !isNaN(pricePerStockValue) &&
      !isNaN(amountToApplyValue)
    ) {
      const divisionResult =
        (amountToApplyValue * 100000) / (pricePerStockValue * lotSizeValue)

      // Check if the division result is not an integer
      const isNotInteger = divisionResult % 1 !== 0

      const calculatedLotSizeToApply = isNotInteger
        ? Math.floor(divisionResult) + 1
        : Math.floor(divisionResult)

      setLotSizeToApply(calculatedLotSizeToApply * lotSizeValue)
    } else {
      setLotSizeToApply(null)
    }
  }, [lotSize, pricePerStock, amountToApply])

  const handleButtonClick = clickedAmount => {
    setAmountToApply(clickedAmount)
  }

  return (
    <div className='container'>
      <h2>IPO Shares to Apply Calculator</h2>
      <label>
        Lot Size :
        <input
          type='number'
          value={lotSize}
          onChange={e => setLotSize(e.target.value)}
        />
      </label>
      <br />
      <label>
        IPO Price :
        <input
          type='number'
          value={pricePerStock}
          onChange={e => setPricePerStock(e.target.value)}
        />
      </label>
      <br />
      <label>
        Amount (in lakhs) :
        <input
          type='number'
          value={amountToApply}
          onChange={e => setAmountToApply(e.target.value)}
        />
      </label>
      <br />
      <div className='button-container'>
        <button
          className='custom-button'
          onClick={() => handleButtonClick('2')}
        >
          2 Lakhs
        </button>
        <button
          className='custom-button'
          onClick={() => handleButtonClick('10')}
        >
          10 Lakhs
        </button>
      </div>

      {
        <p>
          Number of Stocks to Apply:<strong>{lotSizeToApply}</strong>
        </p>
      }
    </div>
  )
}

export default IPOCalculator
