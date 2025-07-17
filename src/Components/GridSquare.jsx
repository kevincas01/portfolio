import { useState, useRef } from "react";

const GridSquare = ({ shouldFade }) => {
  const [faded, setFaded] = useState(false);
  const squareRef = useRef(null);

  const triggerOnHover = () => {
    const square = squareRef.current;

    if (square) {
      square.classList.remove("fade-out");

      void square.offsetWidth;
      setFaded(false);
    }
  };
  
  const triggerOnHoverLeave = () => {
    const square = squareRef.current;

    if (square) {
      square.classList.add("fade-out");

      setFaded(true);
      setTimeout(() => setFaded(false), 10000);
    }
  };

  return (
    <div
      ref={squareRef}
      className={faded || shouldFade ? "fade-out" : ""}
      onMouseEnter={triggerOnHover}
      onMouseLeave={triggerOnHoverLeave}
    />
  );
};

export default GridSquare;
