import React from "react";
import "../Styles/experience.css";

const Experience = (props) => {
  const experienceList = [
    {
      startDate: "Sept 2024",
      role: "Freelance Software Developer",
      description: `Developing a full stack application using Next.js and Tyepscript, integrating a PostgreSQL database for efficient data management and storage. Implemented a menu-driven Point of Sale(POS) system with integrated secure paymenet processing via Stripe API, enabling seamless transactions, real-time inventory tracking, and operationial efficiency `,
      skills: ["Next,js", "Typescript", "React", "HTML & CSS", "Stripe API"],
      url: "",
    },
    {
      startDate: "April 2024",
      endDate: "Aug 2024",
      role: "Fullstack Software Engineer",
      company: "Bioverse",
      description: `I designed, architected, and implemented a robust tagging system for order management, streamlining the revision and tracking process for company personnel, which resulted in a 20% increase in the number of orders completed. Additionally, I translated over 50 Figma designs into fully responsive web pages, ensuring consistency with design specifications and enhancing the overall user experience. To further optimize operations, I developed automated scripts that tracked the status of products using the pharmacy and EasyPost APIs, improving efficiency and reducing manual oversight.`,
      skills: ["Next,js", "Typescript", "EasyPost", "Stripe API"],
      url: "https://app.gobioverse.com/",
    },
    {
      startDate: "June 2022",
      endDate: "Aug 2022",
      role: "Software Engineer Intern",
      company: "Mantula Solar",
      description: `Led an overhaul of an existing web application by replacing its legacy framework with React, ensuring a more responsive and interactive user experience. To optimize performance, I integrated TypeScript and compressed images, resulting in a 30% reduction in loading times, which enhanced the experience for prospective customers. Additionally, I developed an automated contact sheet system with real-time email distribution to designated company recipients. I also reviewed and resolved code issues submitted by other interns, contributing to the overall efficiency and quality of the project.`,
      skills: ["Javascript", "HTML & CSS"],
      url: "https://mantula.co.za/",
    },
    {
      startDate: "Sept 2021",
      endDate: "Sept 2022",
      role: "Tutor",
      company: "Princeton University Mcgraw Center",
      description: `As a tutor, I provided personalized, one-on-one assistance to help students better understand statistical concepts and coding fundamentals. 
      I also led group sessions for over 40 students, facilitating advanced coding exercises and promoting collaborative problem-solving. Through these interactions, I ensured that students gained a thorough understanding of statistical theory and its application in the social sciences.`,
      skills: [],
      url: "https://mcgraw.princeton.edu/",
    },
  ];
  return (
    <>
      <div className="experience-header">
        <h1>Experience</h1>
      </div>
      <div className="experiences-container">
        {experienceList.map((experience, index) => (
          <div className="experience-component" key={index}>
            <div className="experience-dates">
              {experience.startDate} -{" "}
              {experience.endDate ? experience.endDate : "Present"}
            </div>
            <div
              className={`experience-content ${
                experience.url ? "hoverable" : ""
              }`}
              onClick={() => {
                if (experience.url) {
                  window.open(experience.url, "_blank");
                }
              }}
              style={{ cursor: experience.url ? "pointer" : "default" }}
            >
              <h3>
                {experience.role}{" "}
                {experience.company && " ~ " + experience.company}
              </h3>
              <p>{experience.description}</p>
              <div className="experience-skills">
                {experience.skills.map((skill, index) => (
                  <div className="skill" key={skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </>
  );
};

export default Experience;
