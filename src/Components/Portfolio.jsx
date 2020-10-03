import React from 'react';
import img1 from '../img/img-1.png';
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.png';
import img4 from '../img/img-4.png';
import img5 from '../img/img-5.png';
import img6 from '../img/img-6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
const itemArr = [
  { img: img1, category: 'web' },
  { img: img2, category: 'graphic' },
  { img: img5, category: 'flat' },
  { img: img4, category: 'flat' },
  { img: img5, category: 'flat' },
  { img: img6, category: 'graphic' },
  { img: img2, category: 'graphic' },
  { img: img3, category: 'web' },
];
export default function Portfolio(props) {
  const [category, setCategory] = React.useState('');
  const chooseCategory = (cat) => {
    setCategory(cat);
  };
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Portfolio</h2>
        <div className="portfolio__descr">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic repellendus, culpa voluptat
        </div>
        <div className="portfolio__nav">
          <ul>
            <li>
              <button onClick={() => chooseCategory('')} className="btn__main">
                All
              </button>
            </li>
            <li>
              <button onClick={() => chooseCategory('web')} className="btn__main">
                Web Design
              </button>
            </li>
            <li>
              <button onClick={() => chooseCategory('graphic')} className="btn__main">
                Graphic Design
              </button>
            </li>
            <li>
              <button onClick={() => chooseCategory('flat')} className="btn__main">
                Flat Design
              </button>
            </li>
          </ul>
        </div>
        <div className="portfolio__content">
          {itemArr
            .filter((item) => item.category.includes(category))
            .map((item, index) => (
              <div className="portfolio__content-item" key={item.category + index}>
                <div className="search-icon">
                  <FontAwesomeIcon icon={faSearch} />
                </div>

                <img src={item.img} alt="pic" />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
