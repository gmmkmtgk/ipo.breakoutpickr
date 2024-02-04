// Navbar.js

import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>
        <h1>IPO Breakoutpickr</h1>
      </Link>
      <ul className='navbar-links'>
        <li>
          <Link to='/page1' className='navbar-link subscribe-link'>
            Subscribe for Latest IPO Details
          </Link>
        </li>
        <li>
          <Link to='/page2' className='navbar-link login-link'>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
