import React from 'react';
import CV from '../../images/curriculum-gustavo-en.pdf'

const CVcontact = () => {
  return (
    <div className='cv-container'>
      <a href={CV} download className='btn-download'>Download CV</a>
      <a href='#contact' className='btn-contact'>Let's Talk</a>
    </div>
  )
};

export default CVcontact;