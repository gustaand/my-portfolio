import React from 'react'
import './graduation.css'
import { GiSchoolBag } from 'react-icons/gi'
import { IoIosSchool } from 'react-icons/io'
import { FaUserGraduate } from 'react-icons/fa'
import { TiArrowLeftOutline } from 'react-icons/ti'
import { useState } from 'react'

const Graduation = () => {

  const [school, setSchool] = useState('')

  return (
    <div className='courses-box'>

      {
        school === '' &&
          <div className='courses-box-options'>
            <div onClick={() => setSchool('middle')} className='course-lvls'>
              <GiSchoolBag className='course-icon'/>
              <h6 className='course-text'>M-School</h6>
            </div>
            <div onClick={() => setSchool('high')} className='course-lvls'>
              <IoIosSchool className='course-icon'/>
              <h6 className='course-text'>H-School</h6>
            </div>
            <div onClick={() => setSchool('college')} className='course-lvls'>
              <FaUserGraduate className='course-icon'/>
              <h6 className='course-text'>College</h6>
            </div>
          </div>
      }
      {
        school === 'middle' &&
          <div className='courses-box-options'>
            <div className='arrow-div'>
              <TiArrowLeftOutline className='back-arrow' onClick={() => setSchool('')} />
            </div>
            <p>(2010 - 2016) I started middle school in Bazil. <br /> 
              (2015) I moved to Spain, where I finished it.</p>
          </div>
      }
      {
        school === 'high' &&
          <div className='courses-box-options'>
            <div className='arrow-div'>
              <TiArrowLeftOutline className='back-arrow' onClick={() => setSchool('')} />
            </div>
            <p>
              (2017 - 2023) In Spain I started high school and due to a surgery I had to stop studying.<br />
              (2019) I returned in the scientific modality.
            </p>
          </div>
      }
      {
        school === 'college' &&
          <div className='courses-box-options'>
            <div className='arrow-div'>
              <TiArrowLeftOutline className='back-arrow' onClick={() => setSchool('')} />
            </div>
            <p>
              Since I became a dev, my passion has been technology. I want to continue my career as a 
              Software Engineer, making the leap from developer to engineer.
            </p>
          </div>
      }

    </div>
  )
}

export default Graduation