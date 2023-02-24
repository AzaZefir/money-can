import React from 'react';
import revArrLSvg from '../../../assets/images/homePageImg/revArrL.svg';
import revStartSvg from '../../../assets/images/homePageImg/revStars.svg';
import revArrRSvg from '../../../assets/images/homePageImg/revArrR.svg';

export const Reviews = () => {
  return (
    <section className="reviews">
      <div className="container d-flex align-items-center flex-column justify-content-between">
        <h2>Отзывы</h2>
        <div className="d-flex align-items-center justify-content-between w-100">
          <img src={revArrLSvg} alt="" />
          <div className="reviews-cards row d-flex  justify-content-between">
            <div className="col d-flex align-items-center flex-column justify-content-around">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="col d-flex align-items-center flex-column justify-content-around">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
            <div className="col d-flex align-items-center flex-column justify-content-around">
              <h4>Very Good Design Services</h4>
              <p>"Used for many years. Never have any problem in my computer."</p>
              <img src={revStartSvg} alt="" />
              <p>by Ugur D.</p>
            </div>
          </div>
          <img src={revArrRSvg} alt="" />
        </div>
      </div>
    </section>
  );
};
