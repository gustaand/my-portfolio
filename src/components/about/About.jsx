import React from 'react';
import './About.css';
import { FaPowerOff } from 'react-icons/fa';
import { useState } from 'react';
import MyCareer from './about-tv/MyCareer';
import MyStory from './about-tv/MyStory';


const About = () => {

  const [powerOn, setPowerOn] = useState(false);

  const [screen, setScreen] = useState('');

  const onClickBack = () => {
    setScreen('')
  }


  return (
    <div>

      <div id='about' className='about-me-presentation'>
        <h5>Get to Know </h5>
        <h2>About Me</h2>
      </div>
      
      <section className='about-section'>
        <div className='tv-box'>

          <div className={powerOn ? 'tv-glass' : 'tv-glass-off'}>

            {
              !screen && 
                <div className='about-screen'>
                  <div onClick={()=> setScreen('career')} className="my-about"> <h2>Career</h2> </div>
                  <div onClick={()=> setScreen('story')} className="my-about"> <h2>Hobbies</h2> </div>
                </div>
            }
            {
              screen === 'career' &&
                <div className='career-box'>
                  <MyCareer backCallback={onClickBack} />
                </div>
            }
            {
              screen === 'story' && 
                <div className='story-box'>
                  <MyStory backCallback={onClickBack} />
                </div>
            }

          </div>

          <button 
            onClick={() => {
              setPowerOn(!powerOn)
              onClickBack('')
            }}
            className={powerOn ? 'tv-power-on' : 'tv-power-off'}
          >
            <FaPowerOff />
          </button>

        </div>
      </section>

    </div>
  );
}

export default About;