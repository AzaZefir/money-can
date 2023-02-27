import React from 'react';
import { Button } from './../common/button/Button';
import cartSvg from './../../assets/images/homePageImg/Cart 1.svg';
import cartClearSvg from './../../assets/images/cart/trashBasket 1.svg';
import cartItemSvg from './../../assets/images/cart/cartItem.svg';
import plusSvg from './../../assets/images/cart/plus-square 1.svg';
import minusSvg from './../../assets/images/cart/dash-square 1.svg';
import trashSvg from './../../assets/images/cart/x-square 1.svg';
import { ContuctUs } from './../common/callUs/ContuctUs';

export const ShoppingCart = () => {
  return (
    <section className="shopping-cart">
      <div className="container">
        <div className="shopping-cart__header">
          <div>
            <figure>
              <img src={cartSvg} alt="карзина" />
            </figure>
            <h2>Корзина</h2>
          </div>
          <Button>
            <img src={cartClearSvg} alt="очистить карзину" />
            Очистить карзину
          </Button>
        </div>
        <div className="shopping-cart__extra">
          <p>
            Дополнительно:<strong> упаковка</strong>
          </p>
        </div>
        <section className="shopping-cart__items">
          <section className="shopping-cart__item">
            <div>
              <figure>
                <img src={cartItemSvg} alt="картинка товара" title="картинка товара" />
              </figure>
              <div className="shopping-cart__items_item">
                <p>Футболка USA</p>
                <p>
                  <strong>Доп-но:</strong>лейбл. зип пакеты
                </p>
                <p>
                  <strong>Цвет:</strong>Черный
                </p>
                <p>
                  <strong>Ткань:</strong>Полиэстер
                </p>
                <p>
                  <strong>Размер:</strong>S
                </p>
              </div>
            </div>
            <div className="shopping-cart__items_count">
              <img src={plusSvg} alt="добавить один товар" title="добавить один товар" />
              <span>
                <strong>300</strong>
              </span>
              <img src={minusSvg} alt="удалить один товар" title="удалить один товар" />
            </div>
            <div className="shopping-cart__items_price">
              <p>
                <strong>25000 </strong> руб.
              </p>
              <img src={trashSvg} alt="удалить товар" title="удалить товар" />
            </div>
          </section>
          <section className="shopping-cart__item">
            <div>
              <figure>
                <img src={cartItemSvg} alt="картинка товара" title="картинка товара" />
              </figure>
              <div className="shopping-cart__items_item">
                <p>Футболка USA</p>
                <p>
                  <strong>Доп-но:</strong>лейбл. зип пакеты
                </p>
                <p>
                  <strong>Цвет:</strong>Черный
                </p>
                <p>
                  <strong>Ткань:</strong>Полиэстер
                </p>
                <p>
                  <strong>Размер:</strong>S
                </p>
              </div>
            </div>
            <div className="shopping-cart__items_count">
              <img src={plusSvg} alt="добавить один товар" title="добавить один товар" />
              <span>
                <strong>300</strong>
              </span>
              <img src={minusSvg} alt="удалить один товар" title="удалить один товар" />
            </div>
            <div className="shopping-cart__items_price">
              <p>
                <strong>25000 </strong> руб.
              </p>
              <img src={trashSvg} alt="удалить товар" title="удалить товар" />
            </div>
          </section>
          <section className="shopping-cart__item">
            <div>
              <figure>
                <img src={cartItemSvg} alt="картинка товара" title="картинка товара" />
              </figure>
              <div className="shopping-cart__items_item">
                <p>Футболка USA</p>
                <p>
                  <strong>Доп-но:</strong>лейбл. зип пакеты
                </p>
                <p>
                  <strong>Цвет:</strong>Черный
                </p>
                <p>
                  <strong>Ткань:</strong>Полиэстер
                </p>
                <p>
                  <strong>Размер:</strong>S
                </p>
              </div>
            </div>
            <div className="shopping-cart__items_count">
              <img src={plusSvg} alt="добавить один товар" title="добавить один товар" />
              <span>
                <strong>300</strong>
              </span>
              <img src={minusSvg} alt="удалить один товар" title="удалить один товар" />
            </div>
            <div className="shopping-cart__items_price">
              <p>
                <strong>25000 </strong> руб.
              </p>
              <img src={trashSvg} alt="удалить товар" title="удалить товар" />
            </div>
          </section>
          <section className="shopping-cart__item">
            <div>
              <figure>
                <img src={cartItemSvg} alt="картинка товара" title="картинка товара" />
              </figure>
              <div className="shopping-cart__items_item">
                <p>Футболка USA</p>
                <p>
                  <strong>Доп-но:</strong>лейбл. зип пакеты
                </p>
                <p>
                  <strong>Цвет:</strong>Черный
                </p>
                <p>
                  <strong>Ткань:</strong>Полиэстер
                </p>
                <p>
                  <strong>Размер:</strong>S
                </p>
              </div>
            </div>
            <div className="shopping-cart__items_count">
              <img src={plusSvg} alt="добавить один товар" title="добавить один товар" />
              <span>
                <strong>300</strong>
              </span>
              <img src={minusSvg} alt="удалить один товар" title="удалить один товар" />
            </div>
            <div className="shopping-cart__items_price">
              <p>
                <strong>25000 </strong> руб.
              </p>
              <img src={trashSvg} alt="удалить товар" title="удалить товар" />
            </div>
          </section>
        </section>
        <section className="shopping-cart__payment">
          <p>
            Всего: <strong>1500</strong> шт.
          </p>
          <p>
            Сумма заказа: <strong>125000</strong> руб.
          </p>
          <Button>Оплатить сейчас</Button>
          <Button>Вернуться назад</Button>
        </section>
      </div>
      <ContuctUs />
    </section>
  );
};
