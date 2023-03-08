import React from 'react';
import { ContuctUs } from '../common/callUs/ContuctUs';
import { CatalogCards } from './catalogCards/CatalogCards';
import { CatalogFilter } from './catalogFilter/CatalogFilter';
import { CatalogSort } from './catalogSort/CatalogSort';
import { Button } from './../common/button/Button';
import { CatalogPagination } from './catalogPagination/CatalogPagination';

export const Catalog = ({catalogItems}) => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__sort">
          <h2>Каталог</h2>
        </div>
        <CatalogFilter />
        <CatalogCards catalogItems={catalogItems}/>
      </div>
      <CatalogPagination/>
      <ContuctUs />
    </div>
  );
};
