import React, { useEffect } from "react";

const TextGlow = () => {
  const [headerTitle, setHeaderTitle] = React.useState("");
  const [headerName, setHeaderName] = React.useState("");
  const [showHeader, setShowHeader] = React.useState("");

  const name = "Kevin Castro";
  const title = "Hello World, I'm";

  useEffect(() => {
    if (headerName !== name) return;
    const spans = document.querySelectorAll(".hover-text span");
    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "700";
        this.style.color = "var(--main-text-color)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "var(--main-gradient-secondary-color)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "var(--main-gradient-secondary-color)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "300";
        this.style.color = "var(--main-color)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "300";
          leftNeighbor.style.color = "var(--main-color)";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "300";
          rightNeighbor.style.color = "var(--main-color)";
        }
      });
    });
  }, [headerName]);
  return (
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
  );
};

export default TextGlow;
