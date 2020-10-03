import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/fontawesome-free-regular';
import { faChevronUp } from '@fortawesome/fontawesome-free-solid';
import { Link, animateScroll as scroll } from 'react-scroll';
import { scrollToTop } from 'react-scroll';
export default function Footer(props) {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__credits">
            <div className="footer__copyright">
              <FontAwesomeIcon icon={faCopyright} />
              <a href="#"> Copyright 2016 Bla Bla Studio </a>
            </div>
            <div className="footer__ref">
              <a href="#"> One Page Flat Template </a>
            </div>
          </div>
          <div className="footer__upbtn">
            <button>
              <Link onClick={scrollToTop}>
                <FontAwesomeIcon icon={faChevronUp} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
