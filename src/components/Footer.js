import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h2>Contact Us</h2>
        <p>Email: breakoutpickr@gmail.com</p>
        <p>Phone: +91 </p>
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
        <form>
          <input type='email' placeholder='Your Email' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
