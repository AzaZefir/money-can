import React from 'react';
import { Button } from './../../common/button/Button';

export const CatalogFilter = () => {
  return (
    <div className="catalog__category__filter">
      <Button>Все</Button>
      <Button>Пальто</Button>
      <Button>Свитшоты</Button>
      <Button>Кардиганы</Button>
      <Button>Толстовки</Button>
      <Button>Под заказ</Button>
    </div>
  );
};
