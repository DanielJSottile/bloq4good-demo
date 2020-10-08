import React from 'react';
import NavigationListLarge from '../NavigationList-Large/NavigationList-Large';
import NavigationListSmall from '../NavigationList-Small/NavigationList-Small';
import './Navigation.scss';

const Navigation = (props: any): JSX.Element => {
  return (
    <div className="full-navigation">
      <div className="upper-nav">
        <img
          src={require('../../Images/b4g_final-01.png')}
          className="main-logo"
          alt="logo"
        />
        <NavigationListSmall />
      </div>
      <NavigationListLarge />
    </div>
  );
};

export default Navigation;
