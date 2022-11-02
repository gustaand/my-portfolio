import React from 'react';
import './Contact.css';
import { MdEmail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';

const Contact = () => {
  return (
    <div>
      <section id="contact">

        <div className='contact-text'>
          <h5>Get in Touch</h5>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-div">

          <div className="contact-card">
            <MdEmail className='contact-icon'/>
            <h4>Email</h4>
            <h5>gusta.and21@gmail.com</h5>
            <a href='mailto:gusta.and21@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </div>

          <div className='contact-card'>
            <BsTelegram className='contact-icon'/>
            <h4>Telegram</h4>
            <h5>gusta_and</h5>
            <a href='https://t.me/gusta_and' target='_blank' rel='noreferrer'>Send a message</a>
          </div>

          <div className="contact-card">
            <IoLogoWhatsapp className='contact-icon'/>
            <h4>WhatsApp</h4>
            <h5>+34747474739</h5>
            <a href='https://api.whatsapp.com/send?phone=34747474739' target='_blank' rel='noreferrer'>Send a message</a>
          </div>

        </div>


      </section>
    </div>
  )
};

export default Contact;