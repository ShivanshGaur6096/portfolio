import React from "react";
import { projects } from "../data";

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="carousel">
      {projects.map((project, index) => (
        <div
          key={index}
          className="carousel-item"
          onClick={() => alert(`Details about ${project.name}`)} // Replace with modal logic
        >
          <img src={project.logo} alt={project.name} />
          <p>{project.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
