import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <h2>Contact Us</h2>
        <p>Email: breakoutpickr@gmail.com</p>
        <p>Phone: +91 8233249989</p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href='/policy'>Privacy Policy</a>
          </li>
          <li>
            <a href='/terms'>Terms of Service</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Subscribe to Our Newsletter</h2>
        <iframe
          src='https://breakoutpickr.substack.com/embed'
          width='480'
          height='150'
          frameborder='0'
          scrolling='no'
        ></iframe>
      </div>
    </footer>
  )
};

export default Footer;
