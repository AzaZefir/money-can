import React from 'react';
import designStars from '../../assets/images/designDepartment/designStars.svg';
import { DesignBoss } from './designBoss/DesignBoss';
import { Button } from './../common/button/Button';
import { ContuctUs } from './../common/callUs/ContuctUs';

export const DesignDepPage = () => {
  return (
    <section className="design-department">
      <section className="design__description">
        <section className="container">
          <div>
            <h2>Дизайн отдел</h2>
            <p>
              Руководитель дизайн-отдела по пошиву одежды отвечает за разработку и реализацию
              дизайнов одежды для производства. Он должен понимать тенденции в одежде, а также
              предпочтения потребителей и использовать эту информацию для создания дизайнов одежды,
              которые будут привлекать покупателей. Он должен также координировать работу своего
              отдела и предоставлять консультации другим отделам в организации.
            </p>
          </div>
        </section>
      </section>

      <DesignBoss />
      <DesignBoss />
      <section className="des-dep__constructor">
        <div className="container">
          <h4>
            <strong>3D</strong> конструктор
          </h4>
          <p>
            В конструкторе вы можете подобрать цвет, ткань, размер искомой вами одежды и заказать в
            нужном колличестве{' '}
          </p>
          <Button>Перейти в конструктор</Button>
        </div>
      </section>
      <ContuctUs />
    </section>
  );
};
