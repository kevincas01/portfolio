import React from "react";
import "../Styles/projects.css";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  const projectsList = [
    {
      title: "Elemental",
      description: `A web app that showcases reusable UI components with interactive demos and code snippets for developers. Built with React and Tailwind CSS, Elemental highlights real-world UI solutions with clean, reusable code. Explore components in action, review their implementation, and seamlessly integrate them into your own projects.`,
      skills: ["Typescript", "Next", "Next Auth", "Spotify API"],
      imagePath: "/projects/elemental1.png",
      githubLink: "https://github.com/kevincas01/Vibify",
    },
    {
      title: "Vibify - Spotify social media app",
      description: `A full-stack web app that enhances your Spotify experience with personalized insights and social recommendations. Explore top artists, tracks, and recently played songs. The Recommendations Page lets you discover new music, share favorites, and seamlessly add them to your Spotify playlists.`,
      skills: ["Typescript", "Next", "Next Auth", "Spotify API"],
      imagePath: "/projects/vibify1.png",
      githubLink: "https://github.com/kevincas01/Vibify",
    },
    {
      title: "Unlimited",
      description: `A fully functional replica of the NYT Wordle and Connections games, enabling users to play unlimited games without the daily restriction. The application mirrors the core gameplay mechanics of the original games, offering users the same word puzzle challenges and variety, but with the added benefit of unlimited gameplay, making it accessible at any time.`,
      skills: ["React", "Javascript", "HTML", "CSS"],
      imagePath: "/projects/unlimited1.png",
      githubLink: "https://github.com/kevincas01/gamecenter-single-player",
      siteLink: "https://gamecenter-single-player.vercel.app/",
    },
    {
      title: "AlgoLens",
      description: `A web app that helps to visualize how data structures and algorithms work, including pathfinding and sorting techniques. Watch as algorithms like Depth First Search, QuickSort, and MergeSort execute step by step. Designed for students and developers, AlgoLens provides an interactive way to explore and understand how algorithms work.`,
      skills: ["React", "Javascript", "CSS", "SVG"],
      imagePath: "/projects/algolens1.png",
      githubLink: "https://github.com/kevincas01/AlgoLens",
    },

    {
      title: "Vidload",
      description: `A video streaming application that allows users to upload, edit, and view videos. To support these features, I built a Node.js API server that facilitates video and image uploads to an AWS S3 bucket, transfers media via AWS CloudFront for fast delivery, and stores user data securely in a PostgreSQL database.`,
      skills: ["AWS S3 & Cloudfront", "Typescript", "React", "Authentication"],
      githubLink: "https://github.com/kevincas01/Video-Upload",
    },
    {
      title: "Tigerfit",
      description: `A full-stack fitness app for Princeton students to track workouts and visualize progress, gaining 100+ active users. Features interactive charts and analytics on weight and lifted weight. Published on TigerApps, Princeton’s student-built app hub.`,
      skills: ["Python", "Flask", "Javascript", "HTML", "CSS"],
    },
    {
      title: "Spaceship Trainer",
      description: `Developed and designed a 3D first person shooting game built with the Three.js 3D computer graphics framework.`,
      skills: ["Three.js", "HTML", "Javascript", "CSS"],
      githubLink: "https://github.com/kevincas01/SpaceShipTrainer",
    },
  ];
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
