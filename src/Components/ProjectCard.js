import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.imagePath && (
        <div className="project-image">
          <img src={project.imagePath}></img>
        </div>
      )}
      <div className="project-content">
        <h3>{project.title}</h3>
        <div className="project-description">
          <p>{project.description}</p>
        </div>
        <div className="project-skills">
          {project.skills.map((skill, index) => (
            <div className="project-skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
