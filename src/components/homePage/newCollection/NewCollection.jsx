import React from 'react';
import item from '../../../assets/images/homePageImg/newCol2.svg';
import item2 from '../../../assets/images/homePageImg/newCol1.svg';
import { Button } from '../../common/button/Button';
import Slider from 'react-slick';

export const NewCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay:true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="new-collection container">
      <h2>Новая коллекция</h2>
      <Slider className="slider" {...settings}>
        <div>
          <img src={item} alt="" />
        </div>
        <div>
          <img src={item2} alt="" />
        </div>
        <div>
          <img src={item} alt="" />
        </div>
        <div>
          <img src={item2} alt="" />
        </div>
        <div>
          <img src={item} alt="" />
        </div>
        <div>
          <img src={item2} alt="" />
        </div>
      </Slider>
      <div className="newCollection-btn">
        <Button to="/catalog">Перейти в каталог</Button>
      </div>
    </div>
  );
};
