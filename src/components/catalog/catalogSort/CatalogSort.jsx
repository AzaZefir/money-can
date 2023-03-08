import React, { useState } from 'react';
import { IsVisiblePopup } from '../../../assets/images/catalogImg/Svg.jsx';

export const CatalogSort = () => {
  const sortItems = ['Цене','Алфавиту','Популярности']
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const onSelectSortType = (index) =>{
    setActiveSort(index)
    setIsVisiblePopup(false)
  }
  return (
    <div className="sort-popup">
      <p className="d-flex align-items-center gap-2" onClick={() => setIsVisiblePopup(!isVisiblePopup)}>
        <IsVisiblePopup isVisiblePopup={isVisiblePopup} className="sort__lable" /> Сортировка по:
        &nbsp;
        <strong>{sortItems[activeSort]}</strong>
      </p>
      {isVisiblePopup && (
        <div className="sort__popup">
          <ul className='d-flex flex-column align-items-start'>
            {sortItems.map((obj, index) => (
              <li
                className={activeSort === index ? 'active' : ''}
                onClick={()=>onSelectSortType(index)}
                key={`${obj.id}_${index}`}>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
