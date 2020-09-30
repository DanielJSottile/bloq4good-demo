import React from 'react';
import { Fragment } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Parallax from '../../Components/Parallax/Parallax';
import Problems from '../../Components/Problems/Problems';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import WhoItBenefits from '../../Components/WhoItBenefits/WhoItBenefits';
import Clients from '../../Components/Clients/Clients';
import Footer from '../../Components/Footer/Footer';

const LandingPage = (props: any): JSX.Element => {
  return (
    <Fragment>
      <Navigation />
      <Parallax />
      <Problems />
      <HowItWorks />
      <WhoItBenefits />
      <Clients />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
