import React from 'react'
import { contactLinksData } from '../../constants'
import { BallCanvas } from './../../three/ballCanvas/BallCanvas';



const ContactLinks = () => {
  return (
    <div className='contact-links'>
      {contactLinksData.map((link,index)=>
        <div key={index}>
          <BallCanvas icon={link.icon}/>
        </div>
        )}
    </div>
  )
}

export default ContactLinks