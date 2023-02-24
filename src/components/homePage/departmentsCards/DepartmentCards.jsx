import React from 'react';
import departmentImg from '../../../assets/images/homePageImg/дизайн студия 3.png';
import departmentImg1 from '../../../assets/images/homePageImg/производство 4.png';
import departmentImg2 from '../../../assets/images/homePageImg/фуллфилмент 4.png';
import departmentImg3 from '../../../assets/images/homePageImg/каталог 3.png';
import { Button } from '../../common/button/Button';

export const DepartmentCards = () => {
  return (
    <section className="deportment-cards container">
      <div className="grid department-card-disign">
        {/* <img className="w-100 h-100" src={departmentImg} alt="" /> */}
        <figure class="effect-zoe">
          <img className="w-100 h-100" src={departmentImg} alt="" />
          <figcaption>
            <h2>
              Дизайн <span>отдел</span>
            </h2>
            <p class="icon-links">
              <Button>Перейти в отдел</Button>
            </p>
            <p class="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров Заказать свой индивидуальный предмет одежды, в разных цветовых
              оттенках, из разных тканей и размеров Заказать свой индивидуальный предмет одежды, в
              разных цветовых оттенках, из разных тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid department-card-production">
        {/* <img className=" w-100  h-100" src={departmentImg1} alt="" /> */}
        <figure class="effect-zoe">
          <img className="w-100 h-100" src={departmentImg1} alt="" />
          <figcaption>
            <h2>
              {/* Дизайн <span>отдел</span> */}
              Производство
            </h2>
            <p class="icon-links">
              <Button>Перейти в отдел</Button>
            </p>
            <p class="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid department-card-fulfilment">
        {/* <img className="w-100 h-100" src={departmentImg2} alt="" /> */}
        <figure class="effect-zoe">
          <img className="w-100 h-100" src={departmentImg2} alt="" />
          <figcaption>
            <h2>
              {/* Дизайн <span>отдел</span> */}
              Фулфилмент
            </h2>
            <p class="icon-links">
              <Button>Перейти в отдел</Button>
            </p>
            <p class="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
      <div className="grid department-card-catalog">
        {/* <img className="w-100 h-100" src={departmentImg3} alt="" /> */}
        <figure class="effect-zoe">
          <img className="w-100 h-100" src={departmentImg3} alt="" />
          <figcaption>
            <h2>
              {/* Дизайн <span>отдел</span> */}
              Каталог
            </h2>
            <p class="icon-links">
              <Button>Перейти в отдел</Button>
            </p>
            <p class="description">
              Заказать свой индивидуальный предмет одежды, в разных цветовых оттенках, из разных
              тканей и размеров
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
