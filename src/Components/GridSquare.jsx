import { useState, useRef } from "react";

const GridSquare = () => {
  const [faded, setFaded] = useState(false);
  const squareRef = useRef(null);

  const triggerAnimation = () => {
    const square = squareRef.current;

    if (square) {
      square.classList.remove("fade-out");

      void square.offsetWidth;

      square.classList.add("fade-out");

      setFaded(true);
      setTimeout(() => setFaded(false), 10000);
    }
  };

  return (
    <div
      ref={squareRef}
      className={faded ? "fade-out" : ""}
      onMouseEnter={triggerAnimation}
    />
  );
};

export default GridSquare;
