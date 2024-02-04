import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav
      style={{
        position: 'fixed',
        width: '98%',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '1rem',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ margin: 0 }}>IPO Breakoutpickr</h1>
      </Link>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0 }}>
        <li style={{ marginRight: '1rem' }}>
          <Link
            to='/page1'
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              background: '#2196F3',
            }}
          >
            Subscribe for Latest IPO Details
          </Link>
        </li>
        <li>
          <Link
            to='/page2'
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              background: '#4CAF50',
            }}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
