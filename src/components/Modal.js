// Modal.js

import React from 'react'
import './Modal.css'

const Modal = ({ onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <span className='close' onClick={onClose}>
          &times;
        </span>
        <iframe
          src='https://breakoutpickr.substack.com/embed'
          width='480'
          height='320'
          frameBorder='0'
          scrolling='no'
        ></iframe>
      </div>
    </div>
  )
}

export default Modal
