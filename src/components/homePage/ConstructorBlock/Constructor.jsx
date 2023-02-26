import React from 'react';
import { Button } from '../../common/button/Button';
import { Link } from 'react-router-dom';

export const Constructor = () => {
  return (
    <section className="constructor-block">
      <div className=" container d-flex align-items-center justify-content-around flex-column ">
        <p className="py-5 w-50 text-center">
          Представляем вашему вниманию <strong>3D конструктор</strong>, благодаря которому вы
          сможете не только выбрать, собрать любой образ. Но и ощутить, насколько сильно мы
          заботимся о вашем удобстве и времени.
        </p>
        <Button to='constructor'>перейти в конструктор</Button>
      </div>
    </section>
  );
};
