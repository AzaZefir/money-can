import React from 'react';
import arr4 from './../../../assets/images/cooperationImg/Arrow 4.svg';
import minSvg from './../../../assets/images/cooperationImg/min.svg';
import sportSvg from './../../../assets/images/cooperationImg/sport.svg';
import bluzkaSvg from './../../../assets/images/cooperationImg/bluzka.svg';
import rubashkaSvg from './../../../assets/images/cooperationImg/rubashka.svg';
import paltoSvg from './../../../assets/images/cooperationImg/palto.svg';
import classicSvg from './../../../assets/images/cooperationImg/classic.svg';
import dressSvg from './../../../assets/images/cooperationImg/dress.svg';
import futbolkaSvg from './../../../assets/images/cooperationImg/futbolka.svg';
import pantsSvg from './../../../assets/images/cooperationImg/pants.svg';
import kurtkiSvg from './../../../assets/images/cooperationImg/kurtka.svg';

export const CooperationMinOrder = () => {
  return (
    <div className="container">
      <div className="cooperation__min_arrow">
        <img src={arr4} alt="" />
      </div>
      <div className="cooperation__min_content">
        <div>
          <img src={minSvg} alt="" />
          <h4>Минимальная партия</h4>
        </div>
        <ol>
          <li>
            <img src={sportSvg} alt="" /> Спортивные двойки 5 рулонов на одну модель. Примерно 20
            штук из одного рулона
          </li>
          <li>
            <img src={bluzkaSvg} alt="" /> Блузы, кофты, топы, боди 3 рулона на одну модель.
            Примерно 40-80 штук из рулона
          </li>
          <li>
            <img src={rubashkaSvg} alt="" /> Рубашки 3 рулона на одну модель. Примерно 40-70 штук из
            рулона
          </li>
          <li>
            <img src={paltoSvg} alt="" /> Пальто 4 рулона на одну модель. примерно 15-30 штук из 1
            рулона
          </li>
          <li>
            <img src={classicSvg} alt="" /> Классические двойки 5 рулонов на одну модель. Примерно
            35-45 штук из рулона
          </li>
          <li>
            <img src={dressSvg} alt="" /> Платья 3 рулона на одну модель. примерно 40-70 штук из
            рулона
          </li>
          <li>
            <img src={futbolkaSvg} alt="" /> Футболки 3 рулона на одну модель. Примерно 100-140 штук
            из рулона
          </li>
          <li>
            <img src={pantsSvg} alt="" /> Брюки любого формата 3 рулона на одну модель. Примерно
            65-95 штук из рулона
          </li>
          <li>
            <img src={kurtkiSvg} alt="" /> Куртки 4 рулона на одну модель. Примерно 15-30 штук из
            рулона
          </li>
        </ol>
      </div>
    </div>
  );
};
