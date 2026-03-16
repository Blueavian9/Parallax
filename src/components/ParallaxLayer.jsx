import React from "react";
import useScrollPosition from "../hooks/useScrollPosition";

const ParallaxLayer = ({ speed = 0.3, children }) => {
  const scrollY = useScrollPosition();

  const style = {
    transform: `translate3d(0, ${scrollY * speed}px, 0)`,
  };

  return (
    <div style={style} className="absolute w-full">
      {children}
    </div>
  );
};

export default ParallaxLayer;
