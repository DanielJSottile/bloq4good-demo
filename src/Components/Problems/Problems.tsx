import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Problems.scss';

const Problems = (props: any): JSX.Element => {
  // could modularize this in the future

  const randomNumber = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  let timesArr: any[] = [0, 0, 0, 0];

  timesArr = timesArr.map((time: number) => {
    return randomNumber(1, 1000);
  });

  return (
    <section className="problems-section">
      <ScrollAnimation animateIn="puff-in-center" animateOnce={true}>
        <h1 className="left">What We're Solving</h1>
      </ScrollAnimation>
      <div className="problems-container">
        <div className="problems">
          <ScrollAnimation
            animateIn="fade-in-up"
            animateOnce={true}
            delay={timesArr[0]}
          >
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
          <ScrollAnimation
            animateIn="fade-in-up"
            animateOnce={true}
            delay={timesArr[1]}
          >
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
          <ScrollAnimation
            animateIn="fade-in-up"
            animateOnce={true}
            delay={timesArr[2]}
          >
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
          <ScrollAnimation
            animateIn="fade-in-up"
            animateOnce={true}
            delay={timesArr[3]}
          >
            <h2>Problem 4</h2>
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
