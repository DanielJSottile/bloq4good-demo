import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './CallingCard.scss';

const CallingCard = (props: any): JSX.Element => {
  // will be remade with parallax images later

  return (
    <section className="calling-card-section">
      <ScrollAnimation animateIn="fade-in" animateOnce={true}>
        <img
          className="calling-card"
          src={require('../../Images/b4g-calling-card.png')}
          alt="calling-card"
        />
      </ScrollAnimation>
    </section>
  );
};

export default CallingCard;
