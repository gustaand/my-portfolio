import React from 'react';
import './card-divs.css';
import vet from '../../../images/veterinary.png';
import ordering from '../../../images/ordering-screen.png'
import ecommerce from '../../../images/ecommerce-pc.png'
import city from '../../../images/city-management.png'


const Projects = () => {
  return (
    <div className='projects-div'>

      <a className='project-1' href="https://ordering-screen.vercel.app/" rel="noreferrer" target='_blank'>
        <img src={ordering} alt="app ordering" />
      </a>


      <a className='project-1' href="https://ecommerce-pc-front.vercel.app/" rel="noreferrer" target='_blank'>
        <img src={ecommerce} alt="app ecommerce" />
      </a>


      <a className='project-1' href="https://appveterinary.netlify.app/" rel="noreferrer" target='_blank'>
        <img src={vet} alt="app veterinary" />
      </a>


      <a className='project-1' href="https://rpg-city-management.vercel.app/" rel="noreferrer" target='_blank'>
        <img src={city} alt="app city management" />
      </a>

    </div>
  );
}

export default Projects;