import React from 'react';
import { CatalogCard } from './catalogCard/CatalogCard';

export const CatalogCards = ({ catalogItems }) => {
  return (
    <div className="catalog__cards">
      {catalogItems.map((item) => (
        <CatalogCard
        key={item.image}
          {...item}
        />
      ))}
    </div>
  );
};
