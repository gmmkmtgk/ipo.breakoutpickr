// Navbar.js

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Modal from './Modal' // Import the Modal component

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-brand'>
        <h1>IPO Breakoutpickr</h1>
      </Link>
      <ul className='navbar-links'>
        <li>
          {/* Use a button instead of Link to trigger the modal */}
          <button className='navbar-link subscribe-link' onClick={openModal}>
            Subscribe for Latest IPO Details
          </button>
        </li>
        {/* <li>
          <Link to='/page2' className='navbar-link login-link'>
            Login
          </Link>
        </li> */}
      </ul>
      {modalOpen && <Modal onClose={closeModal} />}{' '}
    </nav>
  )
}

export default Navbar
