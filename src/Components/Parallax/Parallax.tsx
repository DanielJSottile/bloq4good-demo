import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Parallax.scss';

const calc = (x: any, y: any) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];
const trans1 = (x: any, y: any) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x: any, y: any) => `translate3d(${x / 8}px,${y / 8}px,0)`;
const trans3 = (x: any, y: any) => `translate3d(${x / 6}px,${y / 6}px,0)`;
const trans4 = (x: any, y: any) => `translate3d(${x / 4.75}px,${y / 4.75}px,0)`;
const trans5 = (x: any, y: any) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`;
const trans6 = (x: any, y: any) => `translate3d(${x / 1.5}px,${y / 1.5}px,0)`;

const Parallax = (): JSX.Element => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div
      className="container"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        className="card1"
        style={{ transform: props.xy.interpolate(trans1 as any) }}
      />
      <animated.div
        className="card2"
        style={{ transform: props.xy.interpolate(trans2 as any) }}
      />
      <animated.div
        className="card3"
        style={{ transform: props.xy.interpolate(trans3 as any) }}
      />
      <animated.div
        className="card4"
        style={{ transform: props.xy.interpolate(trans4 as any) }}
      />
      <animated.div
        className="card5"
        style={{ transform: props.xy.interpolate(trans5 as any) }}
      />
      <animated.div
        className="card6"
        style={{ transform: props.xy.interpolate(trans6 as any) }}
      />
    </div>
  );
};

export default Parallax;
