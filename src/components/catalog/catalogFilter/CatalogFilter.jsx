import React, { useState } from 'react';

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
    <div className="catalog__category__filter" id="style__scroll">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => selectCategory(index)}
            className={activeCategory === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
