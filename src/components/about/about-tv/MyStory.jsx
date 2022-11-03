import React from 'react'
import './my-career-story.css'
import MePixelArt from './about-images/me-pixel-art.png'
import StartStory from './starts/StartStory'
import { useState } from 'react'

const MyStory = ({ backCallback }) => {

  const [hobbies, setHobbies] = useState('')

  const onClickBack = () => {
    setHobbies('')
  }

  return (
    <div className='my-story-box'>

      {
        !hobbies &&
          <div className='menu'>
            <div className='top-components'>
              <img className='me-pixel-art' src={MePixelArt} alt='Gustavo Andrew' />
              <h6 className='dialog-box'>HI! Press START to see my hobbies</h6>
            </div>

            <div className='bottom-components'>
              <div onClick={() => setHobbies('start')} className='start-button'>START</div>
              <div className='back-button' onClick={backCallback}>Back</div>
            </div>
          </div>
      }
      {
        hobbies === 'start' &&
          <div className='start'>
            <StartStory callBack={onClickBack} />
          </div>
      }
      
    </div>
  )
}

export default MyStory

/* <div className='top-components'>
  <img className='me-pixel-art' src={MePixelArt} alt='Gustavo Andrew' />
  <div className='dialog-box'>HI!</div>
</div>

<div className='bottom-components'>
  <div className='start-story-button'>START</div>
  <div className='back-button' onClick={backCallback}>Back</div>
</div> */