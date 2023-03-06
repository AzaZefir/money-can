import React from 'react';
import { Button } from './../../common/button/Button';
import addBtnSvg from './../../../assets/images/catalogImg/cart-plus 1.svg';

export const CatalogCards = ({ catalogItems }) => {
  return (
    <div className="catalog__cards">
      {catalogItems.map((item) => (
        <div key={item.id} className="catalog__card">
          <div>
            <img src={item.image} alt="" />
          </div>
          <div className="catalog__card_description">
            <h4>{item.title}</h4>
            <div className="catalog__card__colors">
              <span className="green"></span>
              <span className="violet"></span>
              <span className="red"></span>
              <span className="dark"></span>
              <span className="khaki"></span>
            </div>
            <div className="catalog__card__sizes">
              <span className="">
                <strong>xs</strong>
              </span>
              <span className="">
                <strong>s</strong>
              </span>
              <span className="">
                <strong>l</strong>
              </span>
              <span className="">
                <strong>xl</strong>
              </span>
              <span className="">
                <strong>xxl</strong>
              </span>
            </div>
            <div className="catalog__card_add">
              <p>Цена {item.price} руб.</p>
              <Button>
                <img src={addBtnSvg} alt="" />4
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
