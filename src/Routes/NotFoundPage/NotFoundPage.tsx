import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Parallax from '../../Components/Parallax/Parallax';
import './NotFoundPage.scss';

const NotFoundPage = (props: any): JSX.Element => {
  return (
    <Fragment>
      <div>
        <div className="notfound-heading">
          <h2>404: Not Found!</h2>
          <Link className="back" to="/">
            Go Back!
          </Link>
        </div>
        <div className="typing">
          <ScrollAnimation animateIn="typewriter" animateOnce={true}>
            <p>Oops! Probably on a non-existent link. </p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="typewriter"
            animateOnce={true}
            delay={1000}
          >
            <p>Right now Links are just for show!</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="typewriter"
            animateOnce={true}
            delay={2000}
          >
            <p>Please head back!</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="typewriter"
            animateOnce={true}
            delay={3000}
          >
            <p>...or stay here and play with this image.</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="typewriter-end"
            animateOnce={true}
            delay={4000}
          >
            <p>I'm not your dad.</p>
          </ScrollAnimation>
        </div>

        <div className="make-lotta-space">
          <Parallax />
        </div>
      </div>
    </Fragment>
  );
};

export default NotFoundPage;
