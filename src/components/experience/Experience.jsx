import './Experience.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderOpened} from 'react-icons/vsc';
import { useState } from 'react';
import Skills from './cards-components/Skills';
import Projects from './cards-components/Projects';
import Works from './cards-components/Works';


const Experience = ()=> {
  
  const [choice, setChoice] = useState('');

  const Card = ()=> {
    switch (choice) {
      case 'skills':
        return <Skills />;

      case 'works':
        return <Works />;
    
      case 'projects':
        return <Projects />;
        
      default:
        return <Skills />;
    }
  }

  // switch = Condição

  return (
    <section id='experience'>
      <div className='experience-me'>
        <h5>What I Know </h5>
        <h2>My Experience</h2>
      </div>

      <div className='experience-box'>

        <div className='content-card-box'><Card /></div>
                
        <div className='card-box'>

          <button className='card' onClick={()=> setChoice('skills')}>
              <FaAward className='card-icon' />
              <h5>Skills</h5>
              <small>0.8 Years</small>
          </button>

          <button className='card' onClick={()=> setChoice('works')}>
            <FiUsers className='card-icon' />
            <h5>Works</h5>
            <small>6 works</small>
          </button>

          <button className='card' onClick={()=> setChoice('projects')}>
            <VscFolderOpened className='card-icon' />
            <h5>Projects</h5>
            <small>coming soon</small>
          </button>

        </div>      
      </div>    
    </section>
  )
}

export default Experience;
