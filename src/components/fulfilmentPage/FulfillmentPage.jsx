import React from 'react';
import fullfilmentPng from './../../assets/images/fulfillmentImages/фуллфилмент.png';

export const FulfillmentPage = () => {
  return (
    <section className="fulfillment">
      <section className="fulfillment__description">
        <div className="container">
          <h2>Фулфилмент</h2>
          <p>
            Фулфилмент в швейном произодстве это собирание всех необходимых компонентов, необходимых
            для производства одежды. Это может включать в себя ткани, пошивочные нити, кнопки,
            пуговицы, застежки, молнии и т. д. Фуллфилмент должен быть достаточно вместительным,
            чтобы удовлетворить потребности швейного производства, и должен быть тщательно
            просмотрен для проверки качества и соответствия требованиям.
          </p>
        </div>
      </section>
      <section className="fulfillment__content">
        <div className="container">
          <figure>
            <img src={fullfilmentPng} alt="Картинка отдела фулфилмент" />
          </figure>
          <div className="fulfillment__about">
            <p>
              <strong>Руководитель отдела:</strong> Бирдемкеев Бирдемке
            </p>
            <p>
              <strong>Услуги:</strong>
              <form action="">
                <div>
                  <input type="checkbox" id="brak" /><label htmlFor="brak">Проверка на брак</label>
                </div>
                <div>
                  <input type="checkbox" id="brak" /><label htmlFor="send">Отправка</label>
                </div>
                <div>
                  <input type="checkbox" id="clean" />
                  <label htmlFor="clean">Дополнительная чистка</label>
                </div>
                <div>
                  <input type="checkbox" id="lable" />
                  <label htmlFor="lable">Распечатка лейблов, этикеток, составников</label>
                </div>
                <div>
                  <input type="checkbox" id="brand" />
                  <label htmlFor="brand">Упаковка товаров (зип пакеты) с вашим брендом</label>
                </div>
                <div>
                  <input type="checkbox" id="paint" /><label htmlFor="paint">Нанесение краски на упаковочные товары</label>
                </div>
                <div>
                  <input type="checkbox" id="mark" /><label htmlFor="mark">Маркировка</label>
                </div>
              </form>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};
