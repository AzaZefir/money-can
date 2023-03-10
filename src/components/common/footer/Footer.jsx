import React from 'react';
import logoSvg from '../../../assets/images/homePageImg/money-can-low-resolution-logo-color-on-transparent-background.svg'
import LinkNav from './../../../hooks/LinkNav';
import { HashLink } from 'react-router-hash-link';

export const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container">
        <div className="row d-flex align-items-start justify-content-between">
          <nav className="footer__logo col d-flex align-items-center flex-column align-items-sm-start flex-sm-column align-items-md-start flex-md-column align-items-lg-start flex-lg-column">
            <LinkNav to="/"><img src={logoSvg} alt="logo" width={170}/></LinkNav>
            <LinkNav to="">Политика конфиденциальности</LinkNav>
            <LinkNav to="">Публичная оферта</LinkNav>
            <LinkNav to="/cooperation">Условия сотрудничества</LinkNav>
            <p>© Все права защищены</p>
          </nav>
          <nav className="col d-flex">
            <ul className="d-none d-sm-none d-md-none d-lg-block">
              <HashLink to="#/about" className="active" disabled>
                <li>Главная</li>
              </HashLink>
              <HashLink to="#/constructor">
                <li>Конструктор</li>
              </HashLink>
              <HashLink to="/#newCollection">
                <li>Новая коллекция</li>
              </HashLink>
              <HashLink to="/#reviews">
                <li>Отзывы</li>
              </HashLink>
            </ul>
            <ul>
              <LinkNav to="" className="active">
                <li>Каталог</li>
              </LinkNav>
              <LinkNav to="">
                <li>Пальто</li>
              </LinkNav>
              <LinkNav to="">
                <li>Свитшоты</li>
              </LinkNav>
              <LinkNav to="">
                <li>Кардиганы</li>
              </LinkNav>
              <LinkNav to="">
                <li>Толстовки</li>
              </LinkNav>
            </ul>
            <ul className="d-none d-sm-none d-md-none d-lg-block">
              <LinkNav to="/about" className="active">
                <li style={{ width: 42 }}>О нас</li>
              </LinkNav>
              <LinkNav to="">
                <li>Основатель</li>
              </LinkNav>
              <LinkNav to="">
                <li>Команда</li>
              </LinkNav>
              <LinkNav to="">
                <li>Дизайнер</li>
              </LinkNav>
            </ul>
            <ul>
              <LinkNav to="/contuct" className="active">
                <li>Контакты</li>
              </LinkNav>
              <LinkNav to="">
                <li>Email</li>
              </LinkNav>
              <LinkNav to="">
                <li>Telegram</li>
              </LinkNav>
              <LinkNav to="">
                <li>Whatsapp</li>
              </LinkNav>
              <LinkNav to="">
                <li>Facebook</li>
              </LinkNav>
            </ul>
          </nav>
          <nav className="col">
            <ul>
              <LinkNav to="">
                <li className="text-center text-sm-center text-md-center text-lg-end">
                  9550 S Eastern Ave ste 253-A102 Las Vegas NV 89123
                </li>
              </LinkNav>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
