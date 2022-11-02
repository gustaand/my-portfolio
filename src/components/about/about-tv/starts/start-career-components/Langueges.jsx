import React from 'react'
import './langueges.css'
import Brazil from './start-images/brazil-flag.png'
import Inglish from './start-images/usa-flag.png'
import Spain from './start-images/spain-flag.png'
import Catalan from './start-images/catalonia-flag.png'
import { useState } from 'react'


const Langueges = () => {

  const [lang, setLanguege] = useState('')

  return (
    <div className='languege-box'>

      <div className='flag-box'>
        <img 
          src={Brazil} 
          alt='Portuguese Languege' 
          className={lang === 'br' ? 'all-off' : 'flag-icon'}
          onClick={() => setLanguege('br')}
        />
        <h6 onClick={() => setLanguege('')} className={lang === 'br' ? 'text-lang' : 'all-off'}>PORTUGUÊS</h6>
      </div>
      
      <div className='flag-box'>
        <img 
          src={Inglish} 
          alt='Inglish Languege' 
          className={lang === 'eng' ? 'all-off' : 'flag-icon eng'}
          onClick={() => setLanguege('eng')}
        />
        <h6 onClick={() => setLanguege('')} className={lang === 'eng' ? 'text-lang' : 'all-off'}>ENGLISH</h6>
      </div>
      
      <div className='flag-box'>
        <img 
          src={Spain} 
          alt='Spanish languege' 
          className={lang === 'es' ? 'all-off' : 'flag-icon'}
          onClick={() => setLanguege('es')}
        />
        <h6 onClick={() => setLanguege('')} className={lang === 'es' ? 'text-lang' : 'all-off'}>ESPAÑOL</h6>
      </div>
      
      <div className='flag-box'>
        <img 
          src={Catalan} 
          alt='Catalan Languege'
          className={lang === 'cat' ? 'all-off' : 'flag-icon'}
          onClick={() => setLanguege('cat')}
          />
        <h6 onClick={() => setLanguege('')} className={lang === 'cat' ? 'text-lang' : 'all-off'}>CATALÁ</h6>
      </div>
      
    </div>
  )
}

export default Langueges