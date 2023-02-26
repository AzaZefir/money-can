import React from 'react';
import { Button } from './../../common/button/Button';
import paginArr from '../../../assets/images/catalogImg/paginationArr.svg';

export const CatalogPagination = () => {
  return (
    <div className="catalog__pagination">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>
        <img src={paginArr} alt="" />
      </Button>
    </div>
  );
};
