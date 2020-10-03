import React from 'react';
import YmapsInit from './YmapsInit';

export default function Contact(props) {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">Contact Us</h2>
        <div className="contact__subtitle">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit
        </div>
        <div className="contact__content">
          <div className="contact__feedback">
            <form action="">
              <div className="contact__feedback-personal">
                <input name="name" type="text" placeholder="Your name" />
                <input name="email" type="text" placeholder="Your email" />
              </div>

              <textarea name="message" id="" placeholder="Your message"></textarea>
              <div className="contact__feedback-submit">
                <button className="btn__feedback btn__main">Submit</button>
              </div>
            </form>
          </div>
          <div className="contact__map">
            <YmapsInit />
          </div>
        </div>
      </div>
    </section>
  );
}
