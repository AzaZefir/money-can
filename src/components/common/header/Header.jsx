import React, { useState } from 'react';
import cartSvg from '../../../assets/images/homePageImg/Cart 1.svg';
import { Link } from 'react-router-dom';
import toggleMenu from './../../../assets/images/homePageImg/toggleMenu.svg';
import closeMenu from './../../../assets/images/homePageImg/closeMenu.svg';
// import logoSvg from './../../../assets/images/homePageImg/money-can-high-resolution-logo-color-on-transparent-background.svg';
import logoSvg from './../../../assets/images/homePageImg/money-can-low-resolution-logo-color-on-transparent-background.svg';
import { navsLinks } from '../../constants';

export const Header = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="container d-flex align-items-center justify-content-between">
        <nav className="header__brand__logo">
          <Link
            to="/"
            onClick={() => {
              setActive('');
              window.scroll(0, 0);
            }}>
            <img src={logoSvg} width="100" alt="" />
          </Link>
        </nav>
        <nav className="d-flex align-items-center">
          <ul className="d-flex align-items-center  justify-content-between w-100 p-0 m-0">
            {navsLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  className={`${active === link.title ? 'links-lightBlue' : ''}`}
                  onClick={() => setActive(link.title)}>
                  {link.title}
                </Link>
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
                  <Link
                    to={link.id}
                    className={`${active === link.title ? 'links-lightBlue' : ''}`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/cart">
            <img src={cartSvg} alt="cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
