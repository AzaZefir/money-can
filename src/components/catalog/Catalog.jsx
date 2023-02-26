import React from 'react';
import { ContuctUs } from '../common/callUs/ContuctUs';
import { CatalogCards } from './catalogCards/CatalogCards';
import { CatalogFilter } from './catalogFilter/CatalogFilter';
import { CatalogSort } from './catalogSort/CatalogSort';

export const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__sort">
          <h2>Каталог</h2>
          <CatalogSort />
        </div>
        <CatalogFilter />
        <CatalogCards />
      </div>
      <ContuctUs />
    </div>
  );
};
