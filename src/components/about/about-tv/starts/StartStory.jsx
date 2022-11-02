import React from 'react'
import './start-story.css'
import './icons.css'
import { GiGClef } from 'react-icons/gi'
import { IoGameController } from 'react-icons/io5'
import { GiChessQueen } from 'react-icons/gi'
import { GiTabletopPlayers } from 'react-icons/gi'
import { SiDungeonsanddragons } from 'react-icons/si'
import { MdOutlineSkateboarding } from 'react-icons/md'
import { GiRollerSkate } from 'react-icons/gi'
import { GiBasketballBall } from 'react-icons/gi'
import { GiWaterGun } from 'react-icons/gi'
import { TbMovie } from 'react-icons/tb'
import { IoIosCreate } from 'react-icons/io'
import { MdTravelExplore } from 'react-icons/md'
import { useState } from 'react'

const StartStory = ({ callBack }) => {

  const [icon, setIcon] = useState('')

  return (
    <div className='start-story-box'>

      <div className='hobbies-box'>

        <div className='icon-box' >
          <GiGClef onClick={() => setIcon('sol') } className={icon === 'sol' ? 'icon-off' : 'hobby-icon sol-icon icon-on'} /> 
          <h6 onClick={() => setIcon('')} className={icon === 'sol' ? 'text-icon' : 'text-off'}>Play Music</h6>
        </div>
        
        <div className='icon-box' >
          <IoGameController onClick={() => setIcon('game')} className={icon === 'game' ? 'icon-off' : 'hobby-icon game-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'game' ? 'text-icon' : 'text-off'}>Games</h6>
        </div>

        <div className='icon-box' >
          <GiChessQueen onClick={() => setIcon('chess')} className={icon === 'chess' ? 'icon-off' : 'hobby-icon chess-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'chess' ? 'text-icon' : 'text-off'}>Chess</h6>
        </div>

        <div className='icon-box' >
          <GiTabletopPlayers onClick={() => setIcon('table')} className={icon === 'table' ? 'icon-off' : 'hobby-icon table-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'table' ? 'text-icon' : 'text-off'}>Tabletop Games</h6>
        </div>

        <div className='icon-box' >
          <SiDungeonsanddragons onClick={() => setIcon('dnd')} className={icon === 'dnd' ? 'icon-off' : 'hobby-icon dnd-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'dnd' ? 'text-icon' : 'text-off'}>Dungeons & Dragons</h6>
        </div>

        <div className='icon-box' >
          <MdOutlineSkateboarding onClick={() => setIcon('skate')} className={icon === 'skate' ? 'icon-off' : 'hobby-icon stk-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'skate' ? 'text-icon' : 'text-off'}>Skateboarding</h6>
        </div>
        
        <div className='icon-box' >
          <GiRollerSkate onClick={() => setIcon('roller')} className={icon === 'roller' ? 'icon-off' : 'hobby-icon rover-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'roller' ? 'text-icon' : 'text-off'}>Rollerblading</h6>
        </div>
        
        <div className='icon-box' >
          <GiBasketballBall onClick={() => setIcon('basket')} className={icon === 'basket' ? 'icon-off' : 'hobby-icon bskt-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'basket' ? 'text-icon' : 'text-off'}>Basketball</h6>
        </div>

        <div className='icon-box' >
          <GiWaterGun onClick={() => setIcon('ptn')} className={icon === 'ptn' ? 'icon-off' : 'hobby-icon ptn-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'ptn' ? 'text-icon' : 'text-off'} >Paintball</h6>
        </div>
        
        <div className='icon-box' >
          <TbMovie onClick={() => setIcon('mv')} className={icon === 'mv' ? 'icon-off' : 'hobby-icon mv-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'mv' ? 'text-icon' : 'text-off'}>Movies & Series</h6>
        </div>

        <div className='icon-box' >
          <IoIosCreate onClick={() => setIcon('design')} className={icon === 'design' ? 'icon-off' : 'hobby-icon design-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'design' ? 'text-icon' : 'text-off'}>Digital Drawing</h6>
        </div>
        
        <div className='icon-box' >
          <MdTravelExplore onClick={() => setIcon('trvl')} className={icon === 'trvl' ? 'icon-off' : 'hobby-icon trvl-icon icon-on'} />
          <h6 onClick={() => setIcon('')} className={icon === 'trvl' ? 'text-icon' : 'text-off'}>Travel & Explore</h6>
        </div>
        
      </div>
      
      <div className='back-button-story' onClick={callBack} >BACK</div>

    </div>
  )
}

export default StartStory