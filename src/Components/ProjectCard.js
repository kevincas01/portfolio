import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ModalContainer from "./ModalContainer";
const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    if (!project.modalContent) return;
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      className="project-card"
      onClick={() => openModal(project)}
      style={{ cursor: project.modalContent ? "pointer" : "default" }}
    >
      {project.imagePath && (
        <div className="project-image">
          <img src={project.imagePath}></img>
        </div>
      )}
      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <div className="project-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank">
                <GitHubIcon />
              </a>
            )}
            {project.siteLink && (
              <a href={project.siteLink} target="_blank">
                <LaunchIcon />
              </a>
            )}
          </div>
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
      {isModalOpen && (
        <ModalContainer title={project.title} onClose={closeModal}>
          {project.modalContent}
        </ModalContainer>
      )}
    </div>
  );
};

export default ProjectCard;
