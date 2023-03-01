import React from 'react';
import arr3 from '../../../assets/images/cooperationImg/Arrow 3.svg';
import workSvg from '../../../assets/images/cooperationImg/work.svg';

export const CooperationWork = () => {
  return (
    <div className="container">
      <div className='how-we-work__arrow'>
        <img src={arr3} alt="" />
      </div>
      <div className='how-we-work__content'>
        <div>
          <img src={workSvg} alt="" />
          <h4>Как мы работаем</h4>
        </div>
        <ol>
          <li>Согласование пошива по образцу</li>
          <li>Согласование цен изделий</li>
          <li>Сроки отшива всей партии</li>
          <li>Дополнительные параметры - лейблы, упаковка, этикетка и т.д</li>
          <li>
            Согласование фулфилмента
            <ul>
              <li>Маркировка</li>
              <li>Упаковка в зип пакеты с нанесенным логотипом</li>
              <li>Проверка на брак по всем регламентам</li>
              <li>отправка </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
};
