import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row d-flex align-items-start justify-content-between">
          <nav className="footer__logo col d-flex align-items-start flex-column">
            <h2>LOGO</h2>
            <a href="">Политика конфиденциальности</a>
            <a href="">Публичная оферта</a>
            <a href="">Условия сотрудничества</a>
            <p>© Все права защищены</p>
          </nav>
          <nav className="col d-flex">
            <ul>
              <a href="" className="active" disabled>
                <li>Главная</li>
              </a>
              <Link to="/constructor">
                <li>Конструктор</li>
              </Link>
              <a href="">
                <li>Новая коллекция</li>
              </a>
              <a href="">
                <li>Отзывы</li>
              </a>
            </ul>
            <ul>
              <a href="" className="active">
                <li>Каталог</li>
              </a>
              <a href="">
                <li>Пальто</li>
              </a>
              <a href="">
                <li>Свитшоты</li>
              </a>
              <a href="">
                <li>Кардиганы</li>
              </a>
              <a href="">
                <li>Толстовки</li>
              </a>
            </ul>
            <ul>
              <a href="" className="active">
                <li style={{ width: 42 }}>О нас</li>
              </a>
              <a href="">
                <li>Основатель</li>
              </a>
              <a href="">
                <li>Команда</li>
              </a>
              <a href="">
                <li>Дизайнер</li>
              </a>
            </ul>
            <ul>
              <a href="" className="active">
                <li>Контакты</li>
              </a>
              <a href="">
                <li>Email</li>
              </a>
              <a href="">
                <li>Telegram</li>
              </a>
              <a href="">
                <li>Whatsapp</li>
              </a>
              <a href="">
                <li>Facebook</li>
              </a>
            </ul>
          </nav>
          <nav className="col">
            <ul>
              <a href="">
                <li className="text-end">9550 S Eastern Ave ste 253-A102 Las Vegas NV 89123</li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
