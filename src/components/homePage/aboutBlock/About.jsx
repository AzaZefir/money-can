import React from 'react'
import aboutSliderImg from '../../../assets/images/homePageImg/3dSlider.png'
import prevBtn from '../../../assets/images/homePageImg/prevBtn.svg'
import nextBtn from '../../../assets/images/homePageImg/nextBtn.svg'


export const About = () => {
  return (
    <div className='about-block-bg container-fluid d-flex align-items-center justify-content-around' >
      <img src={prevBtn} alt="" />
      <img className='w-25' src={aboutSliderImg} alt="" />
      <img src={nextBtn} alt="" />
    </div>
  )
}
