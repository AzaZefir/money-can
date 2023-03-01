import React from 'react';
import bossSvg from '../../../assets/images/designDepartment/boss.jpg';
import starSvg from '../../../assets/images/designDepartment/designStars.svg';
import { DesignBossWorks } from './designBossWorks/DesignBossWorks';


export const DesignBoss = () => {
  return (
    <section className="design-department__boss">
      <div className='design-dep__bg'>
        <div className="container">
        <figure>
          <img src={bossSvg} alt="Руководитель отдела" title="Руководитель дизайн отдела" />
        </figure>
        <div>
          
          <p>
            <strong>Руководитеь отдела:</strong> Бирдемкеева Зарина
          </p>
          <p>
            <strong>Услуги:</strong> разработка лекал, пошив образца
          </p>
          <p>
            <strong>Прайс:</strong>{' '}
            <ul>
              <li>
                худи - от <strong>2000</strong> руб.
              </li>
              <li>
                платья - от <strong>1800</strong> руб.
              </li>
              <li>
                пиджак - от <strong>2000</strong> руб.
              </li>
              <li>
                брюки - от <strong>500 </strong> руб.
              </li>
              <li>
                куртки - от <strong>1500</strong> руб.
              </li>
            </ul>
          </p>
          <figure>
            <img src={starSvg} alt="" />
          </figure>
        </div>
      </div>
      </div>
      
      <DesignBossWorks/>
    </section>
  );
};
