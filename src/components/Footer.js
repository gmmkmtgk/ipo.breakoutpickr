import React from 'react'

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '2rem', // Add margin at the top to separate from the content
      }}
    >
      <div>
        <h2>Contact Us</h2>
        <p>Email: info@breakoutpickr.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <a
              href='/policy'
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0.5rem',
              }}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='/terms'
              style={{
                color: 'white',
                textDecoration: 'none',
                margin: '0.5rem',
              }}
            >
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Subscribe to Our Newsletter</h2>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <input
            type='email'
            placeholder='Your Email'
            style={{ margin: '0.5rem', padding: '0.5rem', borderRadius: '5px' }}
          />
          <button
            type='submit'
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Footer
