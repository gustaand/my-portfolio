import React from 'react';
import './card-divs.css';
import { TbBrandHtml5 } from 'react-icons/tb';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { GrGatsbyjs } from 'react-icons/gr';
import { SiGraphql } from 'react-icons/si';


const Experience = () => {
  return (
    <div>

      <div className='experience-div'>
        <TbBrandHtml5 title='HTML 5' className='experience-icon ico-html'/>
        <TbBrandCss3 title='CSS 3' className='experience-icon ico-css'/>
        <TbBrandJavascript title='JavaScript' className='experience-icon ico-js'/>
        <FaReact title='React' className='experience-icon ico-react'/>
        <GrGatsbyjs title='Gatsby' className='experience-icon ico-gatsby' />
        <FaNodeJs title='Node JS' className='experience-icon ico-node'/>
        <FaPython title='Python 3' className='experience-icon ico-py'/>
        <SiGraphql title='GraphQL' className='experience-icon ico-ql' />
      </div>

    </div>
  );
}

export default Experience;