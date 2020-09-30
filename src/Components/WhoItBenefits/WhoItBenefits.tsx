import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './WhoItBenefits.scss';

const WhoItBenefits = (props: any): JSX.Element => {
  return (
    <section className="benefits-section">
      <ScrollAnimation animateIn="swing-in-top-fwd" animateOnce={true}>
        <h1 className="left">Who Benefits?</h1>
      </ScrollAnimation>
      <div className="benefits-container">
        <ScrollAnimation animateIn="tilt-in-bottom-1" animateOnce={true}>
          <div className="benefits">
            <h2>Farmers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="tilt-in-bottom-1" animateOnce={true}>
          <div className="benefits-2">
            <h2>Markets</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="tilt-in-bottom-1" animateOnce={true}>
          <div className="benefits-3">
            <h2>People</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default WhoItBenefits;
