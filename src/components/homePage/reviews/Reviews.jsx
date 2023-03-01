import React from 'react';
import revStartSvg from '../../../assets/images/homePageImg/revStars.svg';
import Slider from 'react-slick';

export const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    // className: "center",
    //   centerMode: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // initialSlide: 0,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2,
    //         initialSlide: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
  };
  return (
    <section className="reviews">
      <div className="container">
        <h2>Отзывы</h2>
        <div className="reviews__block">
          <Slider className="" {...settings}> 
            <div  className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
          </Slider>

          {/* <img src={revArrLSvg} alt="" />
          <div className="reviews-cards">
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="reviews__card">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
          </div>
          <img src={revArrRSvg} alt="" /> */}
        </div>
      </div>
    </section>
  );
};
