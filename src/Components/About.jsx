import React from 'react';
import ava1 from '../img/ava-1.png';
import ava2 from '../img/ava-2.png';
import ava3 from '../img/ava-3.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebookF,
  faTwitter,
  faGooglePlus,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
export default function About(props) {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">About Us</h2>
        <div className="about__descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellendus, culpa voluptat
        </div>
        <div className="about__cards">
          <div className="about__cards-item">
            <div className="about__cards-item-img">
              <img src={ava1} alt="avatar" />

              <div className="social__links">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about__cards-item-capture">
              <div className="about__cards-item-name">Melanie Doe</div>
              <div className="about__cards-item-position">Project Manager</div>
              <div className="about__cards-item-descr">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellendus, culpa
                voluptat, Hic repellendus, culpa voluptat
              </div>
            </div>
          </div>

          <div className="about__cards-item">
            <div className="about__cards-item-img">
              <img src={ava2} alt="avatar" />

              <div className="social__links">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="about__cards-item-capture">
              <div className="about__cards-item-name">Melanie Doe</div>
              <div className="about__cards-item-position">Project Manager</div>
              <div className="about__cards-item-descr">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellendus, culpa
                voluptat, Hic repellendus, culpa voluptat
              </div>
            </div>
          </div>

          <div className="about__cards-item">
            <div className="about__cards-item-img">
              <img src={ava3} alt="avatar" />

              <div className="social__links">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faDribbble} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about__cards-item-capture">
              <div className="about__cards-item-name">Melanie Doe</div>
              <div className="about__cards-item-position">Project Manager</div>
              <div className="about__cards-item-descr">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellendus, culpa
                voluptat, Hic repellendus, culpa voluptat Lorem ipsum, dolor sit amet
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
