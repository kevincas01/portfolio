import React, { useEffect, useRef, useState } from "react";
import "../Styles/profile.css";
import GridSquare from "./GridSquare";
const Profile = () => {
  const profileRef = useRef(null);
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerName, setHeaderName] = useState("");
  const [showHeader, setShowHeader] = useState(false);

  const name = "Kevin Castro";
  const title = "Hello World, I'm";

  const [gridSize, setGridSize] = useState({ rows: 0, cols: 0, squareSize: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      if (profileRef.current) {
        const { offsetWidth: width, offsetHeight: height } = profileRef.current;

        const cols = Math.floor(width / 75);
        const rows = Math.floor(height / 75);

        setGridSize({ cols, rows });
      }
    };

    calculateGrid();

    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, []);

  const squaresLength = gridSize.rows * gridSize.cols;

  const [fadingIndices, setFadingIndices] = useState([]);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setHeaderTitle(title.substring(0, i));
      i++;

      if (i > title.length) {
        clearInterval(intervalId);

        let j = 0;
        const nameIntervalId = setInterval(() => {
          setHeaderName(name.substring(0, j));
          j++;

          if (j > name.length + 5) {
            clearInterval(nameIntervalId);
            setShowHeader(true);
          }
        }, 75);
      }
    }, 50); // Change the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [title, name]);

  const calculateInitialsIndices = () => {
    const min = Math.floor(squaresLength * 0.25);
    const max = Math.floor(squaresLength * 0.75);
    let kMidPoint = Math.floor(Math.random() * (max - min) + min);
    const remainder = kMidPoint % gridSize.cols;

    if (remainder + 5 >= gridSize.cols) {
      kMidPoint = kMidPoint - 5;
    }

    const indices = [];

    // Make line for K
    indices.push(kMidPoint);
    for (let i = 0; i < 2; i++) {
      if (kMidPoint - (i + 1) * gridSize.cols >= 0) {
        indices.push(kMidPoint - (i + 1) * gridSize.cols);
      }
      if (kMidPoint + (i + 1) * gridSize.cols <= squaresLength) {
        indices.push(kMidPoint + (i + 1) * gridSize.cols);
      }
    }
    //Make diagonals from k midpoint
    indices.push(kMidPoint + 1);
    for (let i = 0; i < 2; i++) {
      if (kMidPoint + 1 - (i + 1) * gridSize.cols + (i + 1) >= 0) {
        indices.push(kMidPoint + 1 - (i + 1) * gridSize.cols + (i + 1));
      }
      if (kMidPoint + 1 + (i + 1) * gridSize.cols + (i + 1) <= squaresLength) {
        indices.push(kMidPoint + 1 + (i + 1) * gridSize.cols + (i + 1));
      }
    }

    console.log(indices);
    setFadingIndices(indices);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 3 random unique indices to fade
      calculateInitialsIndices();
    }, 5000); // every 3 seconds

    return () => clearInterval(interval);
  }, [gridSize]);

  return (
    <div className="profile-container">
      <div className="profile" ref={profileRef}>
        <div className="background-grid" aria-hidden="true">
          {Array.from({ length: squaresLength }).map((_, i) => (
            <GridSquare key={i} shouldFade={fadingIndices.includes(i)} />
          ))}
        </div>

        <div className="profile-content">
          <h3 className="profile-greeting">
            <span className="invisible-placeholder">{title}</span>
            <span className="animated-overlay">{headerTitle}</span>
          </h3>

          <h1 className="profile-name">
            <span className="invisible-placeholder">{name}</span>
            <span className="animated-overlay">{headerName}</span>
          </h1>

          <div className={`hidden-content ${showHeader ? "show" : ""}`}>
            <p>Fullstack Software Developer</p>

            <div className="profile-buttons">
              <button
                className="profile-button"
                onClick={() =>
                  window.open("/resume.pdf", "_blank", "noopener,noreferrer")
                }
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
