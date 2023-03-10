import React from 'react';
import { ContuctUs } from '../common/callUs/ContuctUs';
import { CatalogCards } from './catalogCards/CatalogCards';
import { CatalogFilter } from './catalogFilter/CatalogFilter';
import { CatalogSort } from './catalogSort/CatalogSort';
import { CatalogPagination } from './catalogPagination/CatalogPagination';
import { CatalogSearchInput } from './catalogSearch/CatalogSearchInput';

export const Catalog = ({
  catalogItems,
  setCatalogItems,
  isLoading,
  activeCategory,
  setActiveCategory,
  filterPizzas,
  activeSort,
  setActiveSort,
  searchQuary,
  setSearchQuary,
  searchedCatalogItems,
  setCurrentPage,
}) => {
  return (
    <div className="catalog">
      <div className="container">
        <div className="catalog__sort">
          <h2>Каталог</h2>
          <div className="d-flex align-items-center">
            <CatalogSearchInput searchQuary={searchQuary} setSearchQuary={setSearchQuary} />
            <CatalogSort
              catalogItems={catalogItems}
              setCatalogItems={setCatalogItems}
              activeSort={activeSort}
              setActiveSort={setActiveSort}
            />
          </div>
        </div>
        <CatalogFilter
          activeSort={activeSort}
          setActiveSort={setActiveSort}
          catalogItems={catalogItems}
          setCatalogItems={setCatalogItems}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          filterPizzas={filterPizzas}
        />
        <CatalogCards
          catalogItems={catalogItems}
          isLoading={isLoading}
          searchedCatalogItems={searchedCatalogItems}
        />
      </div>
      <CatalogPagination onChangePage={(num)=> setCurrentPage(num)} />
      <ContuctUs />
    </div>
  );
};
