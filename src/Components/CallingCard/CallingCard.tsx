import React from 'react';
import { useSpring, animated } from 'react-spring';
import ScrollAnimation from 'react-animate-on-scroll';
import './CallingCard.scss';

const calc = (x: any, y: any) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: any, y: any) => `translate3d(${x / 80}px,${y / 80}px,0)`;
const trans2 = (x: any, y: any) => `translate3d(${x / 25}px,${y / 25}px,0)`;
const trans3 = (x: any, y: any) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const trans4 = (x: any, y: any) => `translate3d(${x / 30}px,${y / 30}px,0)`;
const trans5 = (x: any, y: any) => `translate3d(${x / 23}px,${y / 23}px,0)`;
const trans6 = (x: any, y: any) => `translate3d(${x / 17.5}px,${y / 17.5}px,0)`;
const trans7 = (x: any, y: any) => `translate3d(${x / 7.5}px,${y / 7.5}px,0)`;

const CallingCard = (): JSX.Element => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <section className="calling-card-section">
      <ScrollAnimation animateIn="fade-in" animateOnce={true}>
        <div
          className="Ccontainer"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className="Ccard1"
            style={{ transform: props.xy.interpolate(trans1 as any) }}
          />
          <animated.div
            className="Ccard2"
            style={{ transform: props.xy.interpolate(trans2 as any) }}
          />
          <animated.div
            className="Ccard3"
            style={{ transform: props.xy.interpolate(trans3 as any) }}
          />
          <animated.div
            className="Ccard4"
            style={{ transform: props.xy.interpolate(trans4 as any) }}
          />
          <animated.div
            className="Ccard5"
            style={{ transform: props.xy.interpolate(trans5 as any) }}
          />
          <animated.div
            className="Ccard6"
            style={{ transform: props.xy.interpolate(trans6 as any) }}
          />
          <animated.div
            className="Ccard7"
            style={{ transform: props.xy.interpolate(trans7 as any) }}
          />
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default CallingCard;
