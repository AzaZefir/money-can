import React from 'react';
import contuctImg from '../../../assets/images/contuctUsimg/contucUs.png'
import { Button } from './../../common/button/Button';


export const ContucForm = () => {
  return (
    <div className="container">
      <figure>
        <img src={contuctImg} alt="" />
      </figure>
      <form action="">
        <h4>Оставить заявку</h4>
        <label htmlFor="email">Ваш email</label>
        <input required id="email" type="text" placeholder="Введите email" />
        <label htmlFor="text">Напишите нам, чем мы можем вам помочь</label>
        <textarea name="" id="text" cols="30" rows="10">
          Здравствуйте,
        </textarea>
        <Button type="button">Отправить</Button>
      </form>
    </div>
  );
};
