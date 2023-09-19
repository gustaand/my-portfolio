import './Experience.css';
import { BiCodeAlt } from 'react-icons/bi';
import { VscJson } from 'react-icons/vsc';
import { VscFolderOpened } from 'react-icons/vsc';
import { useState } from 'react';
import Frontend from './cards-components/Frontend';
import Projects from './cards-components/Projects';
import Backend from './cards-components/Backend';


const Experience = () => {

  const [choice, setChoice] = useState('');

  const Card = () => {
    switch (choice) {
      case 'front':
        return <Frontend />;

      case 'back':
        return <Backend />;

      case 'projects':
        return <Projects />;

      default:
        return <Projects />;
    }
  }

  // switch = Condição

  return (
    <section id='experience'>
      <div className='experience-me'>
        <h5>What I Know </h5>
        <h2>{choice === 'front' ? 'Front-end' : choice === 'back' ? 'Back-end' : 'Some Projects'}</h2>
      </div>

      <div className='experience-box'>

        <div className='content-card-box'><Card /></div>

        <div className='card-box'>

          <button className='card' onClick={() => setChoice('projects')}>
            <VscFolderOpened className='card-icon' />
            <h5>Projects</h5>
          </button>

          <button className='card' onClick={() => setChoice('front')}>
            <BiCodeAlt className='card-icon' />
            <h5>Frontend</h5>
          </button>

          <button className='card' onClick={() => setChoice('back')}>
            <VscJson className='card-icon' />
            <h5>Backend</h5>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Experience;
