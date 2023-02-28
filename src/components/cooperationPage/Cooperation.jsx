import React from 'react';
import { CooperationCatalog } from './cooperationCatalog/CooperationCatalog';
import { CooperationProduction } from './cooperationProduction/CooperationProduction';
import { CooperationWork } from './cooperationWork/CooperationWork';
import { CooperationMinOrder } from './cooperationMinOrder/CooperationMinOrder';

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
        <div className="container">
          <div>
            <img src='' alt="" />
          </div>
          <div>
            <div>
              <img src="" alt="" />
              <h4>СРОКИ</h4>
            </div>
            <ul>
              <li>Раработка модели 2-3 дня</li>
              <li>Срок пошива партии зависит от колличества и сложности работы</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};
