import React from 'react';
import Slider from 'react-slick';
// import item1 from '../../../../assets/images/designDepartment/pexels-anubhaw-anand-3756030'
import item1 from '../../../../assets/images/designDepartment/pexels-anubhaw-anand-3756030.jpg';
import item2 from '../../../../assets/images/designDepartment/pexels-godisable-jacob-959751.jpg';
import item3 from '../../../../assets/images/designDepartment/pexels-los-muertos-crew-8030150.jpg';
import item4 from '../../../../assets/images/designDepartment/pexels-nappy-3097438.jpg';
import item5 from '../../../../assets/images/designDepartment/pexels-sachin-bharti-1631181.jpg';
import item6 from '../../../../assets/images/designDepartment/pexels-anubhaw-anand-3756086.jpg';

export const DesignBossWorks = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <section className="design-boss__works">
      <div className="container">
        <h4>Работы</h4>
        <Slider className="design-boss__works__cards" {...settings}>
          <div className='design-boss__works__card'>
            <img src={item1} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item2} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item3} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item4} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item5} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item6} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item6} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item6} alt="" />
          </div>
          <div className='design-boss__works__card'>
            <img src={item6} alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};
