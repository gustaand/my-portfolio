import React from 'react';
import './card-divs.css';
import { FaPython } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiStrapi } from 'react-icons/si';
import { SiContentful } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';


const Backend = () => {
  return (
    <div className='experience-div'>
      <FaNodeJs title='Node JS' className='experience-icon ico-node' />
      <FaPython title='Python 3' className='experience-icon ico-py' />
      <SiStrapi title='Strapi' className='experience-icon ico-strapi' />
      <SiContentful title='Contentful' className='experience-icon ico-cont' />
      <SiGraphql title='GraphQL' className='experience-icon ico-ql' />
    </div>
  );
}

export default Backend;