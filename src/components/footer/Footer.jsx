import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div id='footer'>

      <div className="footer">
        <div className="footer-text">
          <h3>GUSTAVO ANDREW MARQUES</h3>
          <h5>Frontend Developer</h5>
        </div>

        <div className='footer-links'>
          <a href="https://github.com/gustaand" target='_blank' rel='noreferrer'>Github</a>
          <a href="https://www.linkedin.com/in/gustaand" target='_blank' rel='noreferrer'>LinkedIn</a>
          <a href='mailto:gusta.and21@gmail.com' target='_blank' rel='noreferrer'>gusta.and21@gmail.com</a>
        </div>

      </div>

      <div className='footer-down'></div>

    </div>
  );
}

export default Footer;