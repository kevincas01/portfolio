import React from "react";
import "../Styles/navbar.css";

const Navbar = ({
  navbarHomeElements,
  activeElement,
  isDarkMode,
  toggleTheme,
}) => {
  const [scrolled, setScrolled] = React.useState(false);

  const [isNavToggled, setIsNavToggled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={scrolled ? "navbar scrolled" : "navbar"}>
        <div className="nav-name">
          <span
            className={`nav-item ${
              activeElement === "profile" ? "active" : ""
            }`}
            style={{ fontWeight: "bold" }}
          >
            Kevin C
          </span>
        </div>
        <div
          className={`menu ${isNavToggled ? "menu-toggled" : ""}`}
          onClick={() => {
            setIsNavToggled(!isNavToggled);
          }}
        >
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className={`nav-links ${isNavToggled ? "nav-toggled" : ""}`}>
          {navbarHomeElements.map((element) => (
            <span
              key={element.value}
              className={`nav-item ${
                activeElement === element.value ? "active" : ""
              }`}
              onClick={() => {
                setIsNavToggled(false);
                element.ref.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
            >
              {element.text}
            </span>
          ))}
          <span
            className={`switch-mode-container ${
              isDarkMode ? "active" : "inactive"
            }`}
          >
            <input
              type="checkbox"
              name="stepByStepMode"
              checked={isDarkMode}
              onChange={toggleTheme}
              className="settings-checkbox"
            />
          </span>
        </div>
      </div>

      <div className={`nav-bars ${isNavToggled ? "toggled" : ""}`}>
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className={`nav-bar ${isNavToggled ? "toggled" : "nontoggled"}`}
            id={`${isNavToggled ? "toggled-" : "nontoggled-"}nav-bar-${index}`}
            style={{ animationDelay: `${(index + 1) * 0.05}s` }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
