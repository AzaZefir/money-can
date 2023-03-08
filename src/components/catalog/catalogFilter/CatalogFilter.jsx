import React, { useState } from 'react';
import { CatalogSort } from '../catalogSort/CatalogSort';

export const categories = [
  'Все',
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

export const CatalogFilter = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const selectCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="catalog__category__filter d-flex align-items-center">
      <ul id="style__scroll">
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
