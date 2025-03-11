import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
const ProjectContentContainer = ({ project }) => {
  return (
    <>
      <p>{project.description}</p>

      <div className="project-skills">
        {project.skills.map((skill, index) => (
          <div className="project-skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>

      <div className="feature-section">
        <h2>Features</h2>
        <ul>
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="media-section">
        <div className="media-section-header">
          <h2>Explore the App</h2>
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
        <div className="media-gallery">
          {project.media.map((mediaItem, index) => (
            <div className="media-item" key={index}>
              <h3>{mediaItem.title}</h3>
              {mediaItem.fileType === "image" ? (
                <img src={mediaItem.src} alt={mediaItem.alt} />
              ) : (
                <video controls>
                  <source src={mediaItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectContentContainer;
