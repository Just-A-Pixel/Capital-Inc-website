import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Burger = ({open}) => {
  const [isOpen, toggle] = useState(open);

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)"
  });
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)"
  });
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)"
  });

  return (
    <>
      <svg
        onClick={() => toggle(!isOpen)}
        width="40"
        height="32"
        viewBox="0 0 44 44"
        fill="#fafafa"
        style={{cursor:'pointer'}}
        // xmlns="http://www.w3.org/2000/svg"
      >
        <animated.rect width="40" height="4" rx="2" style={first} />
        <animated.rect width="40" height="4" rx="2" style={second} />
        <animated.rect width="40" height="4" rx="2" style={third} />
      </svg>
    </>
  );
};

export default Burger;