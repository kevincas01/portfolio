import React from "react";
import "../Styles/projects.css";
const Projects = () => {
  const projectsList = [
    {
      title: "Vibify - Spotify social media app",
      description: `A Fullstack web app that brings your Spotify experience to life with personalized data and social recommendations.
View your most-listened-to artists, top tracks, recently played songs, and detailed audio information for each track. 
The core feature of Vibify is the Recommendations Page, where you can explore new music, share your favorite artists, albums, songs, and playlists with others, and seamlessly add them to your personal playlists or save them directly to your Spotify profile.`,
      skills: ["Typescript", "Next", "Next Auth", "Spotify API"],
    },
    {
      title: "Vidload",
      description: `A video streaming application that allows users to upload, edit, and view videos. To support these features, I built a Node.js API server that facilitates video and image uploads to an AWS S3 bucket, transfers media via AWS CloudFront for fast delivery, and stores user data securely in a PostgreSQL database. 
      This architecture ensures smooth media handling and efficient data management for an optimized user experience.`,
      skills: ["AWS S3 & Cloudfront", "Typescript", "React", "Authentication"],
    },
    {
      title: "Unlimited",
      description: `A fully functional replica of the NYT Wordle and Connections games, enabling users to play unlimited games without the daily restriction. The application mirrors the core gameplay mechanics of the original games, offering users the same word puzzle challenges and variety, but with the added benefit of unlimited gameplay, making it accessible at any time.`,
      skills: ["React", "Javascript", "HTML", "CSS"],
    },
    {
      title: "Tigerfit",
      description: `A Fullstack fitness web app designed specifically for Princeton University students to track their workouts, visualize progress, and promote healthy lifestyles on campus, attracting over 100 active users. The app included a suite of charting and graphing tools to provide in-depth analytics and visual insights into user data, such as weight and lifted weight. The app was published on TigerApps, a Princeton University platform showcasing innovative, student-built applications that enhance campus life.`,
      skills: ["Python", "Flask", "Javascript", "HTML", "CSS"],
    },
    {
      title: "Spaceship Trainer",
      description: `Developed and designed a 3D first person shooting game built with the Three.js 3D computer graphics framework.`,
      skills: ["Three.js", "Javascript", "CSS"],
    },
  ];
  return (
    <>
      <div className="projects-header">
        <h1>PROJECTS</h1>
      </div>

      <div className="card-container">
        {projectsList.map((project, index) => (
          <div className="project-card" key={index}>
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
        ))}
      </div>
    </>
  );
};

export default Projects;
