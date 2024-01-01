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
        <Calculator />
      </div>
      <div className='IPOWebsite'>
        <IPOWebsite />
      </div>
    </div>
  )
}

export default App
