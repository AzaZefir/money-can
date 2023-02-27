import React from 'react';
import cartSvg from '../../../assets/images/homePageImg/Cart 1.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="header__brand__logo">
          <Link to="/">Moneycan</Link>
        </nav>
        <nav className="d-flex align-items-center">
          <ul className="d-flex align-items-center  justify-content-between w-100 p-0 m-0">
            <li>
              <Link to="/catalog">Каталог</Link>
            </li>
            <li>
              <Link to="/design">Дизайн отдел</Link>
            </li>
            <li>
              <Link to="/production">Производство</Link>
            </li>
            <li>
              <Link to="fulfilment">Фулфилмент</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/contuct">Контакты</Link>
            </li>
            <li>
              <Link to="/constructor">Конструктор</Link>
            </li>
          </ul>
        </nav>
        <nav className="header__cart">
          <Link to="/cart">
            <img src={cartSvg} alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
