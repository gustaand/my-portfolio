import React from 'react';
import ME from '../../images/me-cut.png'
import CVcontact from './CVcontact';
import './header.css';
import HeaderSocials from './HeaderSocials';

const header = () => {
  return (
    <header>
      <div id='home' className='presentation-container'>
        <h5>Hello, I'm</h5>
        <h1>Gustavo Andrew Marques</h1>
        <h5>Frontend Developer</h5>
      </div>
      
      <CVcontact />

      <div className='img-container'>
        <div className='space-arround space-one'>
          <HeaderSocials />
        </div>

        <div className='img-back'>
          <img src={ME} alt='Me' />
        </div>

        <div className='space-arround space-two'>
          <a href="#footer" className='scroll-down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
};

export default header;