import React from 'react';
import { CooperationCatalog } from './cooperationCatalog/CooperationCatalog';
import { CooperationProduction } from './cooperationProduction/CooperationProduction';
import { CooperationWork } from './cooperationWork/CooperationWork';

export const Cooperation = () => {
  return (
    <section className="cooperation">
      <div className="cooperation__catalog_section">
        <CooperationCatalog/>
      </div>

      <section className="cooperation-production">
        <CooperationProduction/>
      </section>

      <section className="how-we-work">
        <CooperationWork/>
      </section>
    </section>
  );
};
