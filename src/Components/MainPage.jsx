import React from 'react';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Mainpage = (props) => {
  return (
    <div className="main__page">
      <Header />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Mainpage;
