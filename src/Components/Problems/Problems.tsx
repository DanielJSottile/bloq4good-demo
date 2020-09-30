import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Problems.scss';

const Problems = (props: any): JSX.Element => {
  // could modularize this in the future

  return (
    <section className="problems-section">
      <h1 className="left">What We're Solving</h1>
      <div className="problems-container">
        <div className="problems">
          <ScrollAnimation animateIn="fade-in-up">
            <h2>Problem 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ScrollAnimation>
        </div>
        <div className="problems">
          <ScrollAnimation animateIn="fade-in-up">
            <h2>Problem 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ScrollAnimation>
        </div>
        <div className="problems">
          <ScrollAnimation animateIn="fade-in-up">
            <h2>Problem 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ScrollAnimation>
        </div>
        <div className="problems">
          <ScrollAnimation animateIn="fade-in-up">
            <h2>Problem 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Problems;
