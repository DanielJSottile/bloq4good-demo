import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Parallax from '../Parallax/Parallax';
import './Intro.scss';

const Intro = (props: any): JSX.Element => {
  return (
    <section>
      <div className="parallax-section-container">
        <div className="words-container">
          <div className="typing-box">
            <ScrollAnimation animateIn="typewriter" animateOnce={true}>
              <h1 className="word">Blockchain.</h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="typewriter-end"
              animateOnce={true}
              delay={1000}
            >
              <h1 className="word">Re-invented.</h1>
            </ScrollAnimation>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <Parallax />
      </div>
    </section>
  );
};

export default Intro;
