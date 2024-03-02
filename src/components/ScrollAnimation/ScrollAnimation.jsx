import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import "./Scroll.css"
const ScrollAnimation = ({ children }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`opacity-0 ${isVisible && 'animate-fade-in'}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation;
