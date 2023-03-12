import { Button } from './../common/button/Button';
import cartSvg from './../../assets/images/homePageImg/Cart 1.svg';
import cartClearSvg from './../../assets/images/cart/trashBasket 1.svg';
import plusSvg from './../../assets/images/cart/plus-square 1.svg';
import minusSvg from './../../assets/images/cart/dash-square 1.svg';
import trashSvg from './../../assets/images/cart/x-square 1.svg';
import { ContuctUs } from './../common/callUs/ContuctUs';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './../../config/firebase';

export const ShoppingCart = () => {
  const [cartEmpty, setCartEmpty] = useState([]);
  const cartCollectionRef = collection(db, 'cartItems');

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const data = await getDocs(cartCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCartEmpty(filteredData);
      } catch (err) {
        console.log(err);
      }
    };
    getCartItems();
  }, []);
  
  return (
    <section className="shopping-cart">
      <div className="container">
        <div className="shopping-cart__header">
          <div className="shopping-cart__image">
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
          {cartEmpty.map((el) => (
            <section key={el.id} className="shopping-cart__item">
              <div>
                <figure>
                  <img src={el.image} alt="картинка товара" title="картинка товара" />
                </figure>
                <div className="shopping-cart__items_item">
                  <p>{el.title}</p>
                  <p>
                    <strong>Доп-но:</strong>лейбл. зип пакеты
                  </p>
                  <p>
                    <strong>Цвет:</strong>
                    {el.name.name}
                  </p>
                  <p>{/* <strong>Ткань:</strong>{el.textile} */}</p>
                  <p>
                    <strong>Размер:</strong>
                    {el.size}
                  </p>
                </div>
              </div>
              <div className="shopping-cart__items_count">
                <img src={plusSvg} alt="добавить один товар" title="добавить один товар" />
                <span>
                  <strong>{el.price}</strong>
                </span>
                <img src={minusSvg} alt="удалить один товар" title="удалить один товар" />
              </div>
              <div className="shopping-cart__items_price">
                <p>
                  <strong>25000 </strong>&nbsp;руб.
                </p>
                <img src={trashSvg} alt="удалить товар" title="удалить товар" />
              </div>
            </section>
          ))}
          {/* <section className="shopping-cart__item">
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
          </section> */}
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
