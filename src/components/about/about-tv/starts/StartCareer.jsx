import React from 'react'
import './start-career.css'
import Courses from './start-career-components/Courses'
import Graduation from './start-career-components/Graduation'
import Langueges from './start-career-components/Langueges'
import { FaGraduationCap } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { CgGlobeAlt } from 'react-icons/cg'
import { useState } from 'react'

const StartCareer = ({ callBack }) => {

  const [choiceIcon, setChoiceIcon] = useState('')

  const Career = () => {
    switch (choiceIcon) {
      case 'study':
        return <Graduation />;
      
      case 'courses':
        return <Courses />;

      case 'lang':
        return <Langueges />;
      
      default:
        return <Graduation />;
    }
  }

  return (
    <div className='start-career-box'>

      <div className='my-career-icons'>

        <div className='career-icon-box'>
          <FaGraduationCap 
            onClick={() => setChoiceIcon('study')} 
            className={choiceIcon === 'study' ? 'career-icon-target career-icon' : 'career-icon'}
          />
          <TbCertificate 
            onClick={() => setChoiceIcon('courses')} 
            className={choiceIcon === 'courses' ? 'career-icon-target career-icon' : 'career-icon'}
          />
          <CgGlobeAlt 
            onClick={() => setChoiceIcon('lang')} 
            className={choiceIcon === 'lang' ? 'career-icon-target career-icon' : 'career-icon'}
          />
        </div>

        <div className='career-icon-screen'><Career /></div>

      </div>

      <div className='back-button' onClick={callBack} >BACK</div>
    </div>
  )
}

export default StartCareer