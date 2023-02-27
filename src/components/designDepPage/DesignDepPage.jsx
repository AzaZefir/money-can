import React from 'react';
import designStars from '../../assets/images/designDepartment/designStars.svg';
import { DesignBoss } from './designBoss/DesignBoss';
import { Button } from './../common/button/Button';
import { ContuctUs } from './../common/callUs/ContuctUs';

export const DesignDepPage = () => {
  return (
    <section className="design-department">
      <section className="container">
        <div>
          <h2>Дизайн отдел</h2>
          <figure>
            <img src={designStars} alt="Оценка отдела" title="оценка работы отдела" />
          </figure>
        </div>
      </section>
      <DesignBoss />
      <DesignBoss />
      <section className="des-dep__constructor">
        <div className="container">
          <h4><strong>3D</strong>  конструктор</h4>
          <p>
            В конструкторе вы можете подобрать цвет, ткань, размер искомой вами одежды и заказать в
            нужном колличестве{' '}
          </p>
          <Button>Перейти в конструктор</Button>
        </div>
      </section>
      <ContuctUs/>
    </section>
  );
};
