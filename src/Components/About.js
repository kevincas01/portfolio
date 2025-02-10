import React from "react";
import "../Styles/about.css";

const About = () => {
  const skillsList = [
    "HTML",
    "CSS",
    "Tailwind",
    "Bootstrap",
    "Javascript",
    "Typescript",
    "React",
    "Next",
    "Express",
    "Node",
    "Python",
    "Flask",
    "SQL",
    "GIT",
    "Github",
  ];
  return (
    <>
      <div className="about-header">
        <h1>About</h1>
      </div>

      <div className="about-info">
        <div className="about-info-text">
          <h2>Get to know me!</h2>
          <p>
            My experience in various software projects has allowed me to
            showcase my ability to create robust, scalable, and maintainable
            applications.
          </p>

          <p>
            As a passionate software developer, I am dedicated to perfecting my
            craft and continuously expanding my{" "}
            <span className="special-word">knowledge</span>. I am actively
            seeking new opportunities where I can contribute and grow. If you
            have an exciting opportunity that resonates with my skills and
            experience, I'd be thrilled to connect. Do not hesitate to reach
            out!
          </p>
        </div>

        <div className="about-info-skills">
          <h2>Skills</h2>
          <div className="skills">
            {skillsList.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
