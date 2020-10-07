import React from 'react';
import { useTrail, animated, interpolate } from 'react-spring';
import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = (props: any): JSX.Element => {
  const [toggle, setToggle] = useState(false);

  const linkRefAbout = useRef<HTMLAnchorElement>(null);
  const linkRefContact = useRef<HTMLAnchorElement>(null);
  const linkRefSource = useRef<HTMLAnchorElement>(null);
  const linkRefDept = useRef<HTMLAnchorElement>(null);
  const linkRefVroom = useRef<HTMLAnchorElement>(null);

  const smallLinks = [
    <NavLink
      className="small-navlink isDisabled"
      ref={linkRefAbout}
      to="/about"
    >
      Learn More
    </NavLink>,
    <NavLink
      className="small-navlink isDisabled"
      ref={linkRefContact}
      to="/contact"
    >
      Contact Us
    </NavLink>,
    <NavLink
      className="small-navlink isDisabled"
      ref={linkRefSource}
      to="/source4good"
    >
      Source4Good
    </NavLink>,
    <NavLink
      className="small-navlink isDisabled"
      ref={linkRefDept}
      to="/deptofgood"
    >
      Dept of Good
    </NavLink>,
    <NavLink
      className="small-navlink isDisabled"
      ref={linkRefVroom}
      to="/myvroom"
    >
      My V-room 4Good
    </NavLink>,
  ];

  const trail = useTrail(smallLinks.length, {
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 20 : 0,
    width: 150,
    from: { opacity: 0, x: 20, height: 0 },
  });

  const onButtonClick = () => {
    setToggle((state) => !state);

    if (!toggle) {
      linkRefAbout?.current?.classList.remove('isDisabled');
      linkRefContact?.current?.classList.remove('isDisabled');
      linkRefSource?.current?.classList.remove('isDisabled');
      linkRefDept?.current?.classList.remove('isDisabled');
      linkRefVroom?.current?.classList.remove('isDisabled');
    } else {
      linkRefAbout?.current?.classList.add('isDisabled');
      linkRefContact?.current?.classList.add('isDisabled');
      linkRefSource?.current?.classList.add('isDisabled');
      linkRefDept?.current?.classList.add('isDisabled');
      linkRefVroom?.current?.classList.add('isDisabled');
    }
  };

  const renderMenu = () => {
    return (
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="menu-expand"
            style={{
              ...rest,
              transform: interpolate([x], (x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{smallLinks[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    );
  };

  return (
    <div className="full-navigation">
      <div className="upper-nav">
        <img
          src={require('../../Images/b4g_final-01.png')}
          alt="logo"
          width="300"
          height="100"
        />
        <nav className="navigation-small">
          <button className="hamburger" onClick={onButtonClick}></button>
          {renderMenu()}
        </nav>
      </div>

      <nav className="navigation-large">
        <NavLink className="navlink" to="/about">
          Learn More
        </NavLink>
        <NavLink className="navlink" to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="navlink" to="/source4good">
          Source4Good
        </NavLink>
        <NavLink className="navlink" to="/deptofgood">
          Dept of Good
        </NavLink>
        <NavLink className="navlink" to="/myvroom">
          My V-room 4Good
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
