// App.js
import React from 'react'
import './App.css'
import IPOWebsite from './components/IPOWebsite'
import IPOCalculator from './components/IPOCalculator'
import Calculator from './components/Calculator'

function App() {
  return (
    <div id='root'>
      <div className='IPOCalculator'>
        <IPOCalculator />
        <u>
          <h4>Calculator for any other calculation:</h4>
        </u>
        <Calculator />
      </div>
      <div className='IPOWebsite'>
        <IPOWebsite />
      </div>
    </div>
  )
}

export default App
