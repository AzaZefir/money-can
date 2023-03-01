import React from 'react';
import arr5 from './../../../assets/images/cooperationImg/Arrow 6.svg';
import timeSvg from './../../../assets/images/cooperationImg/time.svg';

export const CooperationLimits = () => {
  return (
    <div className="container">
      <div className="cooperation__time_arrow">
        <img src={arr5} alt="" />
      </div>
      <div className="cooperation__time_content">
        <div>
          <img src={timeSvg} alt="" />
          <h4>Сроки</h4>
        </div>
        <ol>
          <li>Раработка модели 2-3 дня</li>
          <li>Срок пошива партии зависит от колличества и сложности работы</li>
        </ol>
      </div>
    </div>
  );
};
