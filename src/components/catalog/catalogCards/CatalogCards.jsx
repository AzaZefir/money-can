import React, { useState } from 'react';
import CatalogSkeleton from '../../common/skeleton/CatalogSeleton';
import { CatalogCard } from './catalogCard/CatalogCard';

export const CatalogCards = ({ catalogItems, isLoading }) => {
  return (
    <div className="catalog__cards">
      {isLoading
        ? [...new Array(6)].map((_, index) => <CatalogSkeleton key={index} />)
        : catalogItems.map((item) => <CatalogCard key={item.image} {...item} />)}
    </div>
  );
};
