import React, { useEffect, useState } from "react";
import "../Styles/profile.css";
import GridSquare from "./GridSquare";
const Profile = () => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [headerName, setHeaderName] = useState("");
  const [showHeader, setShowHeader] = useState("");

  const name = "Kevin Castro";
  const title = "Hello World, I'm";

  const TOTAL_SQUARES = 300;
  const [fadingIndices, setFadingIndices] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Pick 3 random unique indices to fade
      const indices = new Set();
      while (indices.size < 20) {
        indices.add(Math.floor(Math.random() * TOTAL_SQUARES));
      }

      setFadingIndices([...indices]);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);
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
            setShowHeader("show");
          }
        }, 75);
      }
    }, 50); // Change the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, [title, name]);

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="background-grid" aria-hidden="true">
          {Array.from({ length: 300 }).map((_, i) => (
            <GridSquare key={i} shouldFade={fadingIndices.includes(i)} />
          ))}
        </div>

        <div className="profile-content">
          <h3 className="profile-greeting">{headerTitle} </h3>
          <h1 className="profile-name hover-text">{headerName}</h1>
          {showHeader && (
            <div className="hidden-content">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
