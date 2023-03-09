import React from 'react';
import { SearchSvg } from '../../../assets/images/catalogImg/Svg';
import css from './CatalogSearchInput.module.scss';

export const CatalogSearchInput = () => {
  return (
    <div className={css.wrapper}>
      <SearchSvg className={css.icon}/>
      <input className={css.input} type="text" placeholder="Поиск товаров..." />
    </div>
  );
};
