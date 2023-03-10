import React, { useState, useEffect } from 'react';
import cartSvg from '../../../assets/images/homePageImg/Cart 1.svg';
import { useLocation } from 'react-router-dom';
import toggleMenu from './../../../assets/images/homePageImg/toggleMenu.svg';
import closeMenu from './../../../assets/images/homePageImg/closeMenu.svg';
import logoSvg from './../../../assets/images/homePageImg/money-can-low-resolution-logo-color-on-transparent-background.svg';
import { navsLinks } from '../../constants';
import LinkNav from '../../../hooks/LinkNav';

export const Header = () => {
  const [active, setActive] = useState('Главная');
  const [toggle, setToggle] = useState(false);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      setActive('Главная');
    } else if (location.pathname === '/catalog') {
      setActive('Каталог');
    } else if (location.pathname === '/constructor') {
      setActive('Конструктор');
    } else if (location.pathname === '/about') {
      setActive('О нас');
    } else if (location.pathname === '/design') {
      setActive('Дизайн отдел');
    } else if (location.pathname === '/contact') {
      setActive('Контакты');
    } else if (location.pathname === '/cart') {
      setActive('Корзина');
    } else if (location.pathname === '/production') {
      setActive('Производство');
    } else if (location.pathname === '/cooperation') {
      setActive('Условия сотрудничества');
    } else if (location.pathname === '/fulfillment') {
      setActive('Фулфилмент');
    }
  }, [location]);

  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="header__brand__logo">
          <LinkNav
            to="/"
            onClick={() => {
              setActive('');
            }}>
            <img src={logoSvg} width="100" alt="" />
          </LinkNav>
        </nav>
        <nav className="d-flex align-items-center">
          <ul className="d-flex align-items-center  justify-content-between w-100 p-0 m-0">
            {navsLinks.map((link) => (
              <li key={link.id}>
                <LinkNav
                  to={link.id}
                  className={`${active === link.title ? 'links-lightBlue' : ''}`}
                  onClick={() => setActive(link.title)}>
                  {link.title}
                </LinkNav>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="header__cart">
          <img
            className="toggle__menu"
            src={toggle ? closeMenu : toggleMenu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'toggleMenu'}`}>
            <ul className="d-flex align-items-center  justify-content-between w-100 p-0 m-0">
              {navsLinks.map((link) => (
                <li key={link.id}>
                  <LinkNav
                    to={link.id}
                    className={`${active === link.title ? 'links-lightBlue' : ''}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    {link.title}
                  </LinkNav>
                </li>
              ))}
            </ul>
          </div>
          <LinkNav to="/cart">
            <img src={cartSvg} alt="cart" />
          </LinkNav>
        </nav>
      </div>
    </header>
  );
};
