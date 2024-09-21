// IPOCalculator.js
import React, { useState, useEffect } from 'react'
import './IPOCalculator.css'

const IPOCalculator = () => {
  const [lotSize, setLotSize] = useState('')
  const [pricePerStock, setPricePerStock] = useState('')

  const [amountToApply, setAmountToApply] = useState('10')
  const [lotSizeToApply, setLotSizeToApply] = useState(null)

  const [toggled, setToggled] = useState(false)

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
      {toggled ? <label>
        Lot Size :
        <input
          type='number'
          value={lotSize}
          onChange={e => setLotSize(e.target.value)}
        />
      </label> :
        <label>
          IPO Price :
          <input
            type='number'
            value={pricePerStock}
            onChange={e => setPricePerStock(e.target.value)}
          />
        </label>}
      <div className="toggle-area">
        <button className={`toggle-btn ${toggled ? "toggled" : ""}`} onClick={() => {
          setToggled(!toggled)
        }}>
          <div className="thumb"></div>
        </button>
        <div className="toggle-area-text">{toggled?<span>Switch to IPO Price</span>:<span>Switch to Lot Size</span>}</div>
      </div>
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
          <u>Number of Stocks to Apply:</u> <strong>{lotSizeToApply} </strong>
        </p>
      }
      <p>
        (Total lots to Apply:{' '}
        {lotSize && pricePerStock && amountToApply
          ? lotSizeToApply / lotSize
          : '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'}
        {'\u00A0'})
      </p>
    </div>
  )
}

export default IPOCalculator
