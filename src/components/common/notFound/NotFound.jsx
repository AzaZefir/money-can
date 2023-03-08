import React from 'react';
import './NotFound.scss';
export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
      <p>К сожалению данная страница отсутствует в нашем магазине!</p>
    </div>
  );
};
