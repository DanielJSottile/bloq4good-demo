import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationListLarge = (props: any): JSX.Element => {
  return (
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
  );
};

export default NavigationListLarge;
