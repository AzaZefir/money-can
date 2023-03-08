import React from 'react';
import comandSvg from '../../../assets/images/aboutUsPage/pexels-ron-lach-9850088.jpg';
import { Button } from './../../common/button/Button';

export const ComandSection = () => {
  return (
    <section className="about-us-page__comand">
      <div className="container">
        <h4>Наша команда</h4>
        <p>
          Наша команда – это креативный коллектив из профессиональных специалистов с разными
          навыками и опытом работы в сфере производства одежды. Наша команда имеет многолетний опыт
          в создании эффективных решений для одежды, аксессуаров. Мы предлагаем комплексные решения
          по разработке новинок и продвижению бренда на рынке. Наша задача – обеспечить вам доступ к
          инновационным решениям, которые помогут ускорить и открыть новые горизонты в вашем
          бизнесе.
        </p>
        <figure>
          <img src={comandSvg} alt="Наша команда" title='Наша команда'/>
        </figure>
        <Button to='/cooperation'>Условия сотрудничества</Button>
      </div>
    </section>
  );
};
