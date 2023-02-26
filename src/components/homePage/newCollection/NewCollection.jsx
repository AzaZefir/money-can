import React from 'react';
import item from '../../../assets/images/homePageImg/newCol2.svg';
import item2 from '../../../assets/images/homePageImg/newCol1.svg';
import { Button } from '../../common/button/Button';
import Slider from 'react-slick';

export const NewCollection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
        <Button>Перейти в каталог</Button>
      </div>
    </div>
  );
};
