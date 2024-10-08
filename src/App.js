// App.js
import React from 'react'
import './App.css'
import IPOWebsite from './components/IPOWebsite'
import IPOCalculator from './components/IPOCalculator'
import Calculator from './components/Calculator'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: '.5rem' }}>
        <div id='root' className='app-container'>
          <div className='row'>
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
        </div>
      </div>
      <Footer className='Footer' />
    </>
  )
}

export default App
