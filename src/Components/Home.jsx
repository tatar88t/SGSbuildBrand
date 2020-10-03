import React from 'react';
import bgHome from '../img/home-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/fontawesome-free-solid';
import { Link, animateScroll as scroll } from 'react-scroll';
export default function Home(props) {
  return (
    <section className="home" style={{ backgroundImage: `url(${bgHome})` }} id="home">
      <div className="container">
        <h1 className="home__title">
          We Build <span>Brand</span>
        </h1>
        <div className="home__descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellendus, culpa voluptat
          Lorem ipsum, dolor sit amet Lorem ipsum, dolor sit amet
        </div>
        <div className="home__btn ">
          <button className="btn__main">Learn More</button>
        </div>
        <div className="home__btn-down">
          <button className="btn__down">
            <Link to="portfolio" smooth={true} duration={500}>
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
