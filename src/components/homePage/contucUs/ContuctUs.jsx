import React from 'react';
import { Button } from '../../common/button/Button';
import contuctUsBgImg from '../../../assets/images/homePageImg/contact-us-Img.svg';

export const ContuctUs = () => {
  return (
    <section className="contuctUs">
      <div className="container">
        <h2>Связаться с нами</h2>
        <form action="" className="d-flex align-items-end justify-content-between">
          <div className="d-flex flex-column">
            <label htmlFor="">Имя</label>
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className="d-flex flex-column">
            <label htmlFor="">Номер телефона</label>
            <input type="text" placeholder="+ 996" />
          </div>
          <Button>Связаться</Button>
        </form>
        <p>
          Нажимая на кнопку "Заказать звонок", я подтверждаю, что ознакомлен и согласен с условиями
          <a href="">
            <strong> политики конфиденциальности </strong>
          </a>
          и
          <a href="">
            <strong>правилами обработки персональных данных </strong>
          </a>
        </p>
      </div>
      <img className="contuctUsBgImg" src={contuctUsBgImg} alt="" />
    </section>
  );
};
