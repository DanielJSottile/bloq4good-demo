import React from 'react';
import { Fragment } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Intro from '../../Components/Intro/Intro';
import Problems from '../../Components/Problems/Problems';
import HowItWorks from '../../Components/HowItWorks/HowItWorks';
import WhoItBenefits from '../../Components/WhoItBenefits/WhoItBenefits';
import Clients from '../../Components/Clients/Clients';
import CallingCard from '../../Components/CallingCard/CallingCard';
import Footer from '../../Components/Footer/Footer';

const LandingPage = (props: any): JSX.Element => {
  return (
    <Fragment>
      <Navigation />
      <Intro />
      <Problems />
      <HowItWorks />
      <WhoItBenefits />
      <Clients />
      <CallingCard />
      <Footer />
    </Fragment>
  );
};

export default LandingPage;
