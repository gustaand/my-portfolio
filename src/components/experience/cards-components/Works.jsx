import React from 'react';
import './card-divs.css';
import Typewriter from 'typewriter-effect';


const Works = () => {
  return (
    <div className='works-div'>
      <Typewriter 
        options={{
          strings: "I did internships on projects with senior developers helping with frontend design, optimization and modernization. Now I'm working on my own two projects.",
          autoStart: true,
          delay: 100
        }}
      />
    </div>
  );
}

export default Works;