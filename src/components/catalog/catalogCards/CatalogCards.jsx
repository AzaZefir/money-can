import React from 'react';
import catalogItem1 from '../../../assets/images/catalogImg/catalog1.svg';
import catalogItem2 from '../../../assets/images/catalogImg/catalog2.svg';
import { Button } from './../../common/button/Button';
import addBtnSvg from './../../../assets/images/catalogImg/cart-plus 1.svg'

export const CatalogCards = ({ catalogItems }) => {
  return (
    <div className="catalog__cards">
      {catalogItems.map((item) => (
        <div className="catalog__card">
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
            <div className='catalog__card_add'>
            <p>Цена {item.price} руб.</p>
            <Button><img src={addBtnSvg} alt="" /> 300</Button>
            </div>
          </div>
        </div>
      ))}

      {/* <div className="catalog__card">
        <div>
          <img src={catalogItem2} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div>
      <div className="catalog__card">
        <div>
          <img src={catalogItem1} alt="" />
        </div>
        <h4>Футболка USA</h4>
        <p>Цена 450 руб.</p>
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
        <Button>добавить в корзину</Button>
      </div> */}
    </div>
  );
};
