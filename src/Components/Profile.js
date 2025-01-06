import React, { useEffect } from "react";
import "../Styles/profile.css";
const Profile = () => {
  const [headerTitle, setHeaderTitle] = React.useState("");
  const [headerName, setHeaderName] = React.useState("");
  const [showHeader, setShowHeader] = React.useState("");

  const name = "Kevin Castro";
  const title = "Hello World, I'm";
  React.useEffect(() => {
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

  useEffect(() => {
    if (headerName != name) return;
    const spans = document.querySelectorAll(".hover-text span");
    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "700";
        this.style.color = "rgb(255, 255, 255)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(191,255,255)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(191,255,255)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "300";
        this.style.color = "cyan";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "300";
          leftNeighbor.style.color = "cyan";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "300";
          rightNeighbor.style.color = "cyan";
        }
      });
    });
  }, [headerName]);

  return (
    <>
      <div className="profile">
        <div className="profile-headshot">
          <img
            src="/images/KevinC.jpeg"
            alt="Kevin Castro Headshot"
            id="photo"
          ></img>
        </div>
        <div className="profile-content">
          <h3 className="profile-greeting">{headerTitle} </h3>
          <h1 className="profile-name hover-text">
            {headerName.split("").map((child, idx) => (
              <span
                style={{
                  transition: "0.35s font-weight, 0.35s color",
                }}
                key={idx}
              >
                {child}
              </span>
            ))}
          </h1>
          {showHeader && (
            <div className="hidden-content">
              <p>
                A <span className="special-word">passionate </span> and{" "}
                <span className="special-word">eager</span> software developer
              </p>

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
    </>
  );
};

export default Profile;
