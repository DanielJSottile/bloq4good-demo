import React from 'react';
import { Fragment } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Parallax from '../../Components/Parallax/Parallax';
import Problems from '../../Components/Problems/Problems';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import Clients from '../../Components/Clients/Clients';
import Footer from '../../Components/Footer/Footer';

const LandingPage = (props: any) => {
  return (
    <Fragment>
      <Navigation />
      <Parallax />
      <Problems />
      <HowItWorks />
      <Clients />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
