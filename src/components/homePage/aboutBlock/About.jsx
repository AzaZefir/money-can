import React from 'react'
import aboutSliderImg from '../../../assets/images/homePageImg/3dSlider.png'
import prevBtn from '../../../assets/images/homePageImg/prevBtn.svg'
import nextBtn from '../../../assets/images/homePageImg/nextBtn.svg'
import Slider from 'react-slick';


export const About = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='about-block-bg' >
       <Slider className="slider" {...settings}>
        <div>
        <img className='w-30' src={aboutSliderImg} alt="" />

        </div>
        <div>
        <img className='w-30' src={aboutSliderImg} alt="" />

        </div>
        <div>
        <img className='w-30' src={aboutSliderImg} alt="" />

        </div>
        <div>
        <img className='w-30' src={aboutSliderImg} alt="" />

        </div>
        <div>
        <img className='w-30' src={aboutSliderImg} alt="" />

        </div>
        <div>
        <img className='w-30' src={aboutSliderImg} alt="" />

        </div>
      </Slider>
      {/* <img src={prevBtn} alt="" />
      <img className='w-25' src={aboutSliderImg} alt="" />
      <img src={nextBtn} alt="" /> */}
    </div>
  )
}
