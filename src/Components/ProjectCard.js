import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {project.imagePath && (
        <div className="project-image">
          <img src={project.imagePath}></img>
        </div>
      )}
      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank">
              <GitHubIcon />
            </a>
          )}
        </div>
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
