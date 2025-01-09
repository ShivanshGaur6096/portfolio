import React from "react";

const educations = [
  {
    logo: "assets/experience-logos/amity_university.png",
    title: "Amity University, Noida",
    degree: "B.Tech",
    period: "2016-2020",
  },
  {
    logo: "assets/experience-logos/radiant-stars-english-school.png",
    title: "Radiant Stars English School, Aligarh",
    degree: "12th",
    period: "2014-2016",
  },
  {
    logo: "assets/experience-logos/radiant-stars-english-school.png",
    title: "Radiant Stars English School, Aligarh",
    degree: "10th",
    period: "2012-2014",
  },
];

const Education = () => (
  <section id="education">
    <h2>Education</h2>
    <div className="carousel">
      {educations.map((edu, index) => (
        <div key={index} className="carousel-item">
          <img src={edu.logo} alt={edu.title} />
          <p>
            {edu.title}
            <br />
            {edu.degree}
            <br />
            {edu.period}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;