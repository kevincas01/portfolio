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
            I graduated from Princeton University with a Bachelor's Degree in
            Computer Science, which ignited my spark for technology.
          </p>
          <p>
            Now, that spark is fueled by my curiosity—how products are built,
            the challenges solved, and how I&rsquo;d approach them. This
            curiosity drives me to explore new technologies, refine my
            problem-solving skills, and continuously grow as a developer. More
            than anything, I love the process of transforming an idea into a
            fully functional, seamless experience that people could rely on.
          </p>

          <p>
            If you have an exciting opportunity that resonates with my skills
            and experience, I&rsquo;d love to connect and collaborate!
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
