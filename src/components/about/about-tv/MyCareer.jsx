import React from 'react'
import './my-career-story.css'
import MePixeled from './about-images/me-cut-cut-pixeled.png'
import StartCareer from './starts/StartCareer'
import { useState } from 'react'

const MyCareer = ({ backCallback }) => {

  const [startCareer, setStartCareer] = useState('')

  const onClickBack = () => {
    setStartCareer('')
  }

  return (
    <div className='my-story-box'>

      {
        !startCareer &&
          <div className='menu'>
            <div className='top-components'>
              <img className='me-pixeled-career' src={MePixeled} alt='Gustavo Andrew' />
              <div className='dialog-box'>HI! Press START to see my career!</div>
            </div>

            <div className='bottom-components'>
              <div onClick={() => setStartCareer('start') } className='start-button'>START</div>
              <div className='back-button' onClick={backCallback}>Back</div>
            </div>
          </div>
      }
      {
        startCareer === 'start' &&
          <div className='start'>
            <StartCareer callBack={onClickBack} />
          </div>
      }
      
    </div>
  )
}

export default MyCareer