import React from "react";

const experiences = [
  {
    logo: "assets/experience-logos/blackNgreen-logo.png",
    title: "Tech Mahindra",
    position: "Software Engineer",
    period: "Nov, 2023 - Present",
  },
  {
    logo: "assets/experience-logos/tech-mahindra.png",
    title: "Tech Mahindra",
    position: "Software Engineer",
    period: "Feb, 2021 - Nov, 2023",
  },
  {
    logo: "assets/experience-logos/tech-mahindra.png",
    title: "Tech Mahindra",
    position: "Software Engineer, Trainee",
    period: "Nov, 2020 - Feb, 2021",
  },
];

const Experience = () => (
  <section id="experience">
    <h2>Experience</h2>
    <div className="carousel">
      {experiences.map((exp, index) => (
        <div key={index} className="carousel-item">
          <img src={exp.logo} alt={exp.title} />
          <p>
            {exp.title}
            <br />
            {exp.position}
            <br />
            {exp.period}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;