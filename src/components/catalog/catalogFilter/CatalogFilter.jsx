import React, { useState } from 'react';
import { CatalogSort } from '../catalogSort/CatalogSort';

export const categories = [
  'Пальто',
  'Свитшоты',
  'Кардиганы',
  'Толстовки',
  'Производство',
  'Производство',
  'Производство',
  'Производство',
  'Производство',
  'Производство',
];

export const CatalogFilter = ({ activeCategory, setActiveCategory, filterPizzas }) => {
  const selectCategory = (index) => {
    setActiveCategory(index);
    filterPizzas(index);
  };

  return (
    <div className="catalog__category__filter d-flex align-items-center">
      <ul id="style__scroll">
        <li className={activeCategory === '' ? 'active' : ''} onClick={() => selectCategory('')}>
          Все
        </li>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => selectCategory(index)}
            className={activeCategory === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
      <CatalogSort />
    </div>
  );
};
