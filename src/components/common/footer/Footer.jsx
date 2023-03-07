import React from 'react';
import { Link } from 'react-router-dom';
import logoSvg from '../../../assets/images/homePageImg/money-can-low-resolution-logo-color-on-transparent-background.svg'

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row d-flex align-items-start justify-content-between">
          <nav className="footer__logo col d-flex align-items-center flex-column align-items-sm-start flex-sm-column align-items-md-start flex-md-column align-items-lg-start flex-lg-column">
            <Link to="/"><img src={logoSvg} alt="logo" width={170}/></Link>
            <Link to="">Политика конфиденциальности</Link>
            <Link to="">Публичная оферта</Link>
            <Link to="/cooperation">Условия сотрудничества</Link>
            <p>© Все права защищены</p>
          </nav>
          <nav className="col d-flex">
            <ul className="d-none d-sm-none d-md-none d-lg-block">
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
            <ul className="d-none d-sm-none d-md-none d-lg-block">
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
                <li className="text-center text-sm-center text-md-center text-lg-end">
                  9550 S Eastern Ave ste 253-A102 Las Vegas NV 89123
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
