import React from 'react';
import logo from '../img/b-logo.png';
import Menu from './Menu';
import cln from 'classnames';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Header(props) {
  const [menuVisible, setMenuvisible] = React.useState(false);
  const showMenu = () => {
    setMenuvisible(!menuVisible);
  };
  return (
    <section className="header" id="header">
      <div className="container">
        <div className="header__content">
          <a href="/" className="header__logo">
            <div className="header__logo-img">
              <img src={logo} alt="logo" />
            </div>

            <div className="header__logo-descr">
              <div className="header__logo-title">BlaBla</div>
              <div className="header__logo-subtitle">One Page Flat Template</div>
            </div>
          </a>
          <div className={cln({ burger_active: menuVisible }, 'burger')} onClick={showMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="header__nav">
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <Menu menuVisible={menuVisible} />
        </div>
      </div>
    </section>
  );
}
