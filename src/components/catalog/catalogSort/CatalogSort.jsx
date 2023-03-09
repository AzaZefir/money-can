import React, { useState } from 'react';
import { IsVisiblePopup } from '../../../assets/images/catalogImg/Svg.jsx';

export const CatalogSort = ({ catalogItems, setCatalogItems, setActiveSort, activeSort }) => {
  const sortItems = [
    { name: 'популярности', type: 'rating' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'title' },
    { name: 'мужские', type: 'male' },
    { name: 'женские', type: 'female' },
    { name: 'детские', type: 'child' },
  ];
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);

  // const activeLabel = sortItems.find((item) => item.type === activeSort.type).name;

  //!Сортировка каталога
  const onSortCatalog = (type) => {
    setActiveSort(type);
    const sortedCatalog = catalogItems.sort((a, b) => a[type.type].localeCompare(b[type.type]));
    setCatalogItems(sortedCatalog);
    console.log(sortedCatalog);
  };
  const onSelectSortType = (index) => {
    if (onSortCatalog) {
      onSortCatalog(index);
    }
    setActiveSort(index);
    setIsVisiblePopup(false);
  };
  return (
    <div className="sort-popup">
      <p
        className="sort-popup__name d-flex align-items-center gap-2"
        onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
        <IsVisiblePopup isVisiblePopup={isVisiblePopup} className="sort__lable" /> Сортировка по:
        &nbsp;
        <strong>{activeSort.name}</strong>
      </p>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul className="d-flex flex-column align-items-start">
            {sortItems.map((obj, index) => (
              <li
                className={activeSort.type === obj.type ? 'active' : ''}
                onClick={() => onSelectSortType(obj,index)}
                key={`${obj.id}_${index}`}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
