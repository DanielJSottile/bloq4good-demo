import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './HowItWorks.scss';

const HowItWorks = (props: any): JSX.Element => {
  return (
    <section className="works-section">
      <ScrollAnimation animateIn="fade-in" animateOnce={true}>
        <h1 className="left">How our Products Work</h1>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fade-in-top" animateOnce={true}>
        <div className="product-container">
          <div className="text-container">
            <h2>Product 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="product-image heartbeat">
            <img
              src={require('../../Images/source4good-logo-final.png')}
              alt="logo"
              width="300"
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fade-in-top" animateOnce={true}>
        <div className="product-container">
          <div className="text-container">
            <h2>Product 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="product-image heartbeat">
            <img
              src={require('../../Images/dept-of-good.png')}
              alt="logo"
              width="300"
            />
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fade-in-top" animateOnce={true}>
        <div className="product-container">
          <div className="text-container">
            <h2>Product 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="product-image heartbeat">
            <img
              src={require('../../Images/myvroom_logo-final.png')}
              alt="logo"
              height="50"
            />
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default HowItWorks;
