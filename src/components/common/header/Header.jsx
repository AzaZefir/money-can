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
              <Link to="/designPage">Дизайн отдел</Link>
            </li>
            <li>
              <a href="">Производство</a>
            </li>
            <li>
              <a href="">Фулфилмент</a>
            </li>
            <li>
              <Link to="/aboutUsPage">О нас</Link>
            </li>
            <li>
              <Link to="/contuctPage">Контакты</Link>
            </li>
          </ul>
        </nav>
        <nav className="header__cart">
          <Link to="/shoppingCart">
            <img src={cartSvg} alt="" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
