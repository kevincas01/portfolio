import React, { useEffect, useRef, useState } from "react";
import "../Styles/navbar.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SlidingTabSelector } from "./SlidingLinksSelector";
const Navbar = ({
  navbarHomeElements,
  activeElement,
  isDarkMode,
  toggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);

  const [isNavToggled, setIsNavToggled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsNavToggled(false);
      }
    };

    if (isNavToggled) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNavToggled]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTabSelect = (elementRef) => {
    setIsNavToggled(false);
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <>
      <div
        className={`navbar ${scrolled ? "scrolled" : ""} ${
          isNavToggled ? "toggled" : ""
        }`}
        ref={headerRef}
      >
        <div className="nav-name">
          <span className="nav-name">
            <span className="k-letter special-word">K</span>
            <span className="c-letter">C</span>
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

        <div
          className={`nav-tabs-container ${isNavToggled ? "nav-toggled" : ""}`}
        >
          <div className="nav-tabs-inner">
            <div className="nav-tabs">
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
            </div>

            <SlidingTabSelector
              onTabSelect={handleTabSelect}
              tabs={navbarHomeElements}
              activeTab={activeElement}
            />
            <div className="navbar-group">
              <GitHubIcon
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://github.com/kevincas01", "_blank")
                }
              />

              <span className={`switch-mode-container`} onClick={toggleTheme}>
                <input
                  type="checkbox"
                  name="stepByStepMode"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className="settings-checkbox"
                />
                <LightModeIcon
                  fontSize="inherit"
                  sx={{
                    zIndex: 20,
                    color: "white",
                    opacity: isDarkMode ? 0.3 : 1,
                  }}
                />
                <DarkModeIcon
                  fontSize="inherit"
                  sx={{
                    zIndex: 20,
                    color: "black",
                    opacity: isDarkMode ? 1 : 0.3,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
