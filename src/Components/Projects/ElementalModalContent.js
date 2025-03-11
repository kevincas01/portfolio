import React from "react";

const ElementalModalContent = () => {
  return (
    <>
      <p>
        A web app that showcases reusable UI components with interactive demos
        and code snippets for developers. Built with React and Tailwind CSS,
        Elemental highlights real-world UI solutions with clean, reusable code.
        Explore components in action, review their implementation, and
        seamlessly integrate them into your own projects.
      </p>

      <div className="feature-section">
        <h2>Features</h2>
        <ul>
          <li>Explore fully interactive UI components in action.</li>
          <li>
            Gain access to clean, reusable code examples for every component
          </li>

          <li>
            Discover a curated collection of essential UI elements, from buttons
            to cards, designed for seamless integration.
          </li>
        </ul>
      </div>
      <div className="media-section">
        <h2>Explore the App</h2>
        <div className="media-gallery">
          <div className="media-item">
            <h3>All Components Page</h3>
            <img
              src="/projects/Elemental/components.png"
              alt="All Components Page"
            />
          </div>
          <div className="media-item">
            <h3>Card Components Page</h3>
            <img
              src="/projects/Elemental/cardComponents.png"
              alt="Card Components Page"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ElementalModalContent;
