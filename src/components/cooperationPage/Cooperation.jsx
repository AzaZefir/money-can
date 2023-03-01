import React from 'react';
import { CooperationCatalog } from './cooperationCatalog/CooperationCatalog';
import { CooperationProduction } from './cooperationProduction/CooperationProduction';
import { CooperationWork } from './cooperationWork/CooperationWork';
import { CooperationMinOrder } from './cooperationMinOrder/CooperationMinOrder';
import { Button } from './../common/button/Button';
import { ContuctUs } from './../common/callUs/ContuctUs';
import { CooperationLimits } from './cooperationLimits/CooperationLimits';
import { CooperationDelivery } from './cooperationDelivery/CooperationDelivery';

export const Cooperation = () => {
  return (
    <section className="cooperation">
      <div className="cooperation__catalog_section">
        <CooperationCatalog />
      </div>

      <section className="cooperation-production">
        <CooperationProduction />
      </section>

      <section className="how-we-work">
        <CooperationWork />
      </section>

      <section className="cooperation__min">
        <CooperationMinOrder />
      </section>

      <section className="cooperation__limits">
        <CooperationLimits/>
      </section>

      <section className="cooperation__delivery">
        <CooperationDelivery/>
      </section>

      <div className='cooperation__arr_back'>
        <Button>Вернуться назад</Button>
      </div>

      <ContuctUs/>
    </section>
  );
};
