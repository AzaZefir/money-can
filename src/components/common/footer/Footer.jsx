import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row d-flex align-items-start justify-content-between">
          <nav className="footer__logo col d-flex align-items-start flex-column">
            <h2>LOGO</h2>
            <Link to="">Политика конфиденциальности</Link>
            <Link to="">Публичная оферта</Link>
            <Link to="/cooperation">Условия сотрудничества</Link>
            <p>© Все права защищены</p>
          </nav>
          <nav className="col d-flex">
            <ul>
              <Link to="/" className="active" disabled>
                <li>Главная</li>
              </Link>
              <Link to="/constructor">
                <li>Конструктор</li>
              </Link>
              <Link to="">
                <li>Новая коллекция</li>
              </Link>
              <Link to="">
                <li>Отзывы</li>
              </Link>
            </ul>
            <ul>
              <Link to="" className="active">
                <li>Каталог</li>
              </Link>
              <Link to="">
                <li>Пальто</li>
              </Link>
              <Link to="">
                <li>Свитшоты</li>
              </Link>
              <Link to="">
                <li>Кардиганы</li>
              </Link>
              <Link to="">
                <li>Толстовки</li>
              </Link>
            </ul>
            <ul>
              <Link to="/about" className="active">
                <li style={{ width: 42 }}>О нас</li>
              </Link>
              <Link to="">
                <li>Основатель</li>
              </Link>
              <Link to="">
                <li>Команда</li>
              </Link>
              <Link to="">
                <li>Дизайнер</li>
              </Link>
            </ul>
            <ul>
              <Link to="/contuct" className="active">
                <li>Контакты</li>
              </Link>
              <Link to="">
                <li>Email</li>
              </Link>
              <Link to="">
                <li>Telegram</li>
              </Link>
              <Link to="">
                <li>Whatsapp</li>
              </Link>
              <Link to="">
                <li>Facebook</li>
              </Link>
            </ul>
          </nav>
          <nav className="col">
            <ul>
              <Link to="">
                <li className="text-end">9550 S Eastern Ave ste 253-A102 Las Vegas NV 89123</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
