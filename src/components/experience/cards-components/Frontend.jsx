import React from 'react';
import './card-divs.css';
import { TbBrandHtml5 } from 'react-icons/tb';
import { TbBrandCss3 } from 'react-icons/tb';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import { GrGatsbyjs } from 'react-icons/gr';
import { SiMaterialui } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import { BsWordpress } from 'react-icons/bs';


const Frontend = () => {
  return (
    <div>

      <div className='experience-div'>
        <TbBrandHtml5 title='HTML 5' className='experience-icon ico-html' />
        <TbBrandCss3 title='CSS 3' className='experience-icon ico-css' />
        <TbBrandJavascript title='JavaScript' className='experience-icon ico-js' />
        <FaReact title='React' className='experience-icon ico-react' />
        <SiRedux title='Redux' className='experience-icon ico-redux' />
        <SiNextdotjs title='NextJs' className='experience-icon ico-react' />
        <GrGatsbyjs title='Gatsby' className='experience-icon ico-gatsby' />
        <SiMaterialui title='Material UI' className='experience-icon ico-mui' />
        <SiStyledcomponents title='Styled Components' className='experience-icon ico-styled' />
        <BsWordpress title='WordPress' className='experience-icon ico-wp' />
      </div>

    </div>
  );
}

export default Frontend;