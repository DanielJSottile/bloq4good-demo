import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Form from '../Form/Form';
import './Clients.scss';

const Clients = (props: any): JSX.Element => {
  return (
    <section className="clients-section">
      <ScrollAnimation animateIn="bounce-in-top" animateOnce={true}>
        <h1 className="center">Our Clients</h1>
      </ScrollAnimation>
      <div className="client-container">
        <ScrollAnimation animateIn="scale-in-center" animateOnce={true}>
          <img
            className="client"
            src={require('../../Images/wendys.png')}
            alt="logo"
            height="100"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="scale-in-center" animateOnce={true}>
          <img
            className="client"
            src={require('../../Images/danper.png')}
            alt="logo"
            height="100"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="scale-in-center" animateOnce={true}>
          <img
            className="client"
            src={require('../../Images/atando-cabos.png')}
            alt="logo"
            height="100"
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="scale-in-center" animateOnce={true}>
          <img
            className="client"
            src={require('../../Images/multiexports.png')}
            alt="logo"
            height="100"
          />
        </ScrollAnimation>
      </div>

      <ScrollAnimation animateIn="fade-in-top" animateOnce={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fade-in-top" animateOnce={true}>
        <Form />
      </ScrollAnimation>
    </section>
  );
};

export default Clients;
