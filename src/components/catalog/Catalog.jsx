import React from 'react';
import { ContuctUs } from '../common/callUs/ContuctUs';
import { CatalogCards } from './catalogCards/CatalogCards';
import { CatalogFilter } from './catalogFilter/CatalogFilter';
import { CatalogSort } from './catalogSort/CatalogSort';
import { Button } from './../common/button/Button';
import { CatalogPagination } from './catalogPagination/CatalogPagination';

export const Catalog = ({
  catalogItems,
  isLoading,
  activeCategory,
  setActiveCategory,
  filterPizzas,
}) => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__sort">
          <h2>Каталог</h2>
        </div>
        <CatalogFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filterPizzas={filterPizzas}
        />
        <CatalogCards catalogItems={catalogItems} isLoading={isLoading} />
      </div>
      <CatalogPagination />
      <ContuctUs />
    </div>
  );
};
