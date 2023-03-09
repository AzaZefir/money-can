import React from 'react';
import departmentImg from '../../../assets/images/homePageImg/pexels-photo-4620624.jpeg';
import departmentImg1 from '../../../assets/images/homePageImg/pexels-photo-4622215.webp';
import departmentImg2 from '../../../assets/images/homePageImg/фуллфилмент 4.png';
import departmentImg3 from '../../../assets/images/homePageImg/pexels-mirto-kon-4492631 (1).jpg';
import { Button } from '../../common/button/Button';

export const DepartmentCards = () => {
  return (
    <section className="deportment-cards container">
      <div className="grid department-card-disign">
        <figure className="effect-zoe">
          <img className="w-100 h-100" src={departmentImg} alt="картинка" />
          <figcaption>
            <h2>Дизайн отдел</h2>
            <p className="icon-links">
              <Button to="/design">Перейти в отдел</Button>
            </p>
            <p className="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров Заказать свой индивидуальный предмет одежды, в разных цветовых
              оттенках, из разных тканей и размеров Заказать свой индивидуальный предмет одежды, в
              разных цветовых оттенках, из разных тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid department-card-production">
        <figure className="effect-zoe">
          <img className="w-100 h-100" src={departmentImg1} alt="" />
          <figcaption>
            <h2>Производство</h2>
            <p className="icon-links">
              <Button to="/production">Перейти в отдел</Button>
            </p>
            <p className="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid department-card-fulfilment">
        <figure className="effect-zoe">
          <img className="w-100 h-100" src={departmentImg2} alt="" />
          <figcaption>
            <h2>Фулфилмент</h2>
            <p className="icon-links">
              <Button to="/fulfillment">Перейти в отдел</Button>
            </p>
            <p className="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid department-card-catalog">
        <figure className="effect-zoe">
          <img className="w-100 h-100" src={departmentImg3} alt="" />
          <figcaption>
            <h2>Каталог</h2>
            <p className="icon-links">
              <Button to="/catalog">Перейти в отдел</Button>
            </p>
            <p className="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
