import React from "react";
import "../Styles/projects.css";
import ProjectCard from "./ProjectCard";
import { projectsList } from "../Constants/projects";

const Projects = () => {
  return (
    <>
      <div className="projects-header">
        <h1>PROJECTS</h1>
      </div>

      <div className="card-container">
        {projectsList.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </>
  );
};

export default Projects;
