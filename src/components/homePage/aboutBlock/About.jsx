import React from 'react';
import Slider from 'react-slick';
import aboutSliderImg from './../../../assets/images/homePageImg/3dSlider.png'

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
    <div className="about-block-bg" id='about'>
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
    </div>
  );
};
