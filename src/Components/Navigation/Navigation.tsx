import React from 'react';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = (props: any) => {
  return (
    <Fragment>
      <img
        src={require('../../Images/b4g_final-01.png')}
        alt="logo"
        width="300"
      />
      <nav className="navigation">
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
    </Fragment>
  );
};

export default Navigation;
