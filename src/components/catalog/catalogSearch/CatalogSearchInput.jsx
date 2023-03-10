import React from 'react';
import { DeleteSvg, SearchSvg } from '../../../assets/images/catalogImg/Svg';
import css from './CatalogSearchInput.module.scss';

export const CatalogSearchInput = ({ searchQuary, setSearchQuary }) => {
  return (
    <div className={css.wrapper}>
      <SearchSvg className={css.icon} />
      <input
        value={searchQuary}
        onChange={(e) => setSearchQuary(e.target.value)}
        className={css.input}
        type="text"
        placeholder="Поиск товаров..."
      />
      {searchQuary && <DeleteSvg setSearchQuary={setSearchQuary}/>}
    </div>
  );
};
