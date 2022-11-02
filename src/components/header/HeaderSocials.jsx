import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const HeaderSocials = () => {
  return (
    <div className='header-socials'>

      <a href="https://www.linkedin.com/in/gustaand" target='_blank' rel='noreferrer'><BsLinkedin /></a>

      <a href='https://github.com/gustaand' target='_blank' rel='noreferrer'><BsGithub /></a>
      
    </div>
  );
}

export default HeaderSocials;