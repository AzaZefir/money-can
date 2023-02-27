import React from 'react';
import designStars from '../../assets/images/designDepartment/designStars.svg';
import { DesignBoss } from './designBoss/DesignBoss';

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
      <DesignBoss/>
    </section>
  );
};
