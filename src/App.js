import "./App.css";
import { useEffect, useState, useRef } from "react";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const navbarRefs = [aboutRef, experienceRef, projectsRef, contactRef];

  const navbarHomeElements = [
    {
      text: "About",
      value: "about",
      className: "section-container-grid",
      element: <About />,
      ref: aboutRef,
    },
    {
      text: "Experience",
      value: "experience",
      className: "section-container-grid",
      element: <Experience />,
      ref: experienceRef,
    },
    {
      text: "Projects",
      value: "projects",
      className: "section-container",
      element: <Projects />,
      ref: projectsRef,
    },
    {
      text: "Contact",
      value: "contact",
      className: "section-container-grid",
      element: <Contact />,
      ref: contactRef,
    },
  ];
  const [activeElement, setActiveElement] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const windowYScroll = window.scrollY;

      const viewportHeight = window.innerHeight;

      navbarRefs.forEach((elementRef) => {
        if (elementRef.current) {
          const rect = elementRef.current.getBoundingClientRect();

          const topHeight = rect.top + windowYScroll;
          const bottomHeight = rect.bottom + windowYScroll;

          if (
            windowYScroll + viewportHeight > topHeight &&
            windowYScroll < bottomHeight
          ) {
            setActiveElement(elementRef.current.dataset.element);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar
        navbarHomeElements={navbarHomeElements}
        activeElement={activeElement}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />

      <div>
        <Profile />
        {navbarHomeElements.map((element, index) => (
          <div
            key={index}
            className={`${element.value} ${element.className}`}
            ref={element.ref}
            data-element={element.value}
          >
            {element.element}
          </div>
        ))}
      </div>

      <div onClick={scrollToTop} className="back-to-top">
        <KeyboardArrowUpIcon fontSize="inheir"/>
        <p className="back-to-top-text">Back to top</p>
      </div>
    </div>
  );
}

export default App;
