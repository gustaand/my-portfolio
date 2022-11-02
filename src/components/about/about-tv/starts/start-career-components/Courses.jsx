import React from 'react'
import './graduation.css'
import './course.css'
import { MdManageAccounts } from 'react-icons/md'
import { BsTerminal } from 'react-icons/bs'
import { VscJson } from 'react-icons/vsc'
import { FiDatabase } from 'react-icons/fi'
import { MdWeb } from 'react-icons/md'
import { BiCodeAlt } from 'react-icons/bi'
import { FaSearchengin } from 'react-icons/fa'
import { useState } from 'react'

const Courses = () => {

  const [course, setCourse] = useState('')

  return (
    <div className='courses-box'>

          <div className='courses-box-options'>

            <div className='course'>
              <MdManageAccounts 
                onClick={() => setCourse('adm')}
                className={course === 'adm' ? 'course-off' : 'courses-ico'}
              />
              <h6 onClick={() => setCourse('')} className={course === 'adm' ? 'text-course' : 'course-off'}>Management</h6>
            </div>

            <div className='course'>
              <BsTerminal
                onClick={() => setCourse('dev')} 
                className={course === 'dev' ? 'course-off' : 'courses-ico'} 
              />
              <h6 onClick={() => setCourse('')} className={course === 'dev' ? 'text-course' : 'course-off'}>Development</h6>
            </div>

            <div className='course'>
              <VscJson
                onClick={() => setCourse('back')} 
                className={course === 'back' ? 'course-off' : 'courses-ico'} 
              />
              <h6 onClick={() => setCourse('')} className={course === 'back' ? 'text-course' : 'course-off'}>Backend</h6>
            </div>

            <div className='course'>
              <FiDatabase
                onClick={() => setCourse('data')} 
                className={course === 'data' ? 'course-off' : 'courses-ico'} 
              />
              <h6 onClick={() => setCourse('')} className={course === 'data' ? 'text-course' : 'course-off'}>Data base</h6>
            </div>
            
            <div className='course'>
              <MdWeb
                onClick={() => setCourse('web')} 
                className={course === 'web' ? 'course-off' : 'courses-ico'} 
              />
              <h6 onClick={() => setCourse('')} className={course === 'web' ? 'text-course' : 'course-off'}>Web Dev</h6>
            </div>
            
            <div className='course'>
              <BiCodeAlt
                onClick={() => setCourse('front')} 
                className={course === 'front' ? 'course-off' : 'courses-ico'} 
              />
              <h6 onClick={() => setCourse('')} className={course === 'front' ? 'text-course' : 'course-off'}>Frontend</h6>
            </div>
            
            <div className='course'>
              <FaSearchengin
                onClick={() => setCourse('seo')} 
                className={course === 'seo' ? 'course-off' : 'courses-ico'} 
              />
              <h6 onClick={() => setCourse('')} className={course === 'seo' ? 'text-course' : 'course-off'}>SEO</h6>
            </div>
            
          </div>

    </div>
  )
}

export default Courses