import React from "react";
import "../Styles/experience.css";
import ExperienceElement from "./ExperienceElement";

const Experience = () => {
  const experienceList = [
    {
      stepNumber: 1,
      startDate: "Sept 2024",
      role: "Freelance Software Developer",
      description: [
        "Designed and developed a full-stack application using Next.js and TypeScript, architecting a scalable system with a PostgreSQL database for efficient data management and storage.",
        "Engineered a robust, menu-driven Point of Sale (POS) system with  secure payment processing via the Stripe API, enhancing transaction efficiency and business operations.",
        "Led the end-to-end system design and architecture, ensuring scalability, maintainability, and optimal performance.",
        "Collaborated closely with client to translate requirements into well-structured features and high-performance user interfaces.",
      ],
      skills: ["Next.js", "TypeScript", "React", "HTML & CSS", "Stripe API"],
      url: "",
    },

    {
      stepNumber: 2,
      startDate: "April 2024",
      endDate: "Aug 2024",
      role: "Fullstack Software Engineer",
      company: "Bioverse",
      description: [
        "Designed, architected, and implemented a robust tagging system for order management, streamlining the revision and tracking process for company personnel, resulting in a 20% increase in completed orders.",
        "Translated over 50 Figma designs into fully responsive web pages, ensuring consistency with design specifications and enhancing the overall user experience.",
        "Developed automated scripts that tracked the status of products using the Pharmacy and EasyPost APIs, improving operational efficiency and reducing manual oversight.",
      ],
      skills: ["Next.js", "Typescript", "EasyPost", "Stripe API"],
      url: "https://app.gobioverse.com/",
    },
    {
      stepNumber: 3,
      startDate: "June 2022",
      endDate: "Aug 2022",
      role: "Software Engineer Intern",
      company: "Mantula Solar",
      description: [
        "Led an overhaul of an existing web application by replacing its legacy framework with React, improving responsiveness and interactivity.",
        "Optimized performance by integrating TypeScript and compressing images, reducing loading times by 30% and enhancing the experience for prospective customers.",
        "Developed an automated contact sheet system with real-time email distribution to designated company recipients, streamlining internal communication.",
        "Reviewed and resolved code issues submitted by other interns, contributing to overall project efficiency and code quality.",
      ],
      skills: ["Javascript", "HTML", "CSS", "Firebase", "React"],
      url: "https://mantula.co.za/",
    },
    {
      stepNumber: 4,
      startDate: "Sept 2021",
      endDate: "Sept 2022",
      role: "Tutor",
      company: "Princeton University Mcgraw Center",
      description: [
        "Provided personalized, one-on-one tutoring to help students grasp statistical concepts and coding fundamentals.",
        "Led group sessions for over 40 students, facilitating advanced coding exercises and fostering collaborative problem-solving.",
        "Ensured students gained a thorough understanding of statistical theory and its application in the social sciences through interactive teaching methods.",
      ],
      skills: [],
      url: "https://mcgraw.princeton.edu/",
    },
  ];
  return (
    <>
      <div className="experience-header">
        <h1>EXPERIENCE</h1>
      </div>
      <div className="experiences-container">
        {experienceList.map((experience, index) => (
          <ExperienceElement
            stepNumber={experience.stepNumber}
            role={experience.role}
            company={experience.company}
            description={experience.description}
            experience={experience}
          />
        ))}
      </div>
    </>
  );
};

export default Experience;
