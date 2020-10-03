import React from 'react';
import cln from 'classnames';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Menu({ menuVisible }) {
  return (
    <>
      <ul className={cln({ menu_active: menuVisible }, 'menu')}>
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
    </>
  );
}
