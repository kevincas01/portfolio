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
        <div className="about-info">
          <div className="image-wrapper">
            <img
              src="/images/KevinC.jpeg"
              alt="Kevin Castro Headshot"
              id="about-photo"
            />

            <p className="about-text">
              My curiosity fuels everything I do—I'm fascinated by how products
              are built, the challenges they solve, and how I might approach
              those same problems myself. I'm constantly exploring new
              technologies, sharpening my problem-solving skills, and growing as
              a developer. More than anything, I love the process of turning an
              idea into a seamless, functional experience that people can rely
              on.
            </p>
          </div>
        </div>
      </div>

      <div className="about-info">
        {/* Education Section */}
        <div className="education-section">
          <h2>Education</h2>

          <div className="edu-details">
            <h3>PRINCETON UNIVERSITY</h3>
            <div className="edu-info">
              <p className="edu-year">2019 – 2023</p>
              <p className="edu-degree">B.S. in Computer Science</p>
            </div>

            <div className="edu-courses">
              <h4>Relevant Coursework</h4>
              <ul>
                <li>Algorithms and Data Structures</li>
                <li>Advanced Programming Techniques</li>
                <li>Reasoning about Computation</li>
                <li>Natural Language Processing</li>
                <li>Machine Learning</li>
                <li>Data Science</li>
                <li>Economics and Computing</li>
                <li>Computer Graphics</li>
                <li>Computer System Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
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
