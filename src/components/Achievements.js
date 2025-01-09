import React from "react";

const achievements = [
  {
    badge: "assets/skill-images/safe6_badge.png",
    title: "SAFe 6 Practitioner",
    details: "Certificate ID: xxxxxxxxxxx",
  },
  {
    badge: "assets/skill-images/bravo_award.png",
    title: "Bravo Award",
    details: "Date: 03/2022",
  },
  {
    badge: "assets/skill-images/bravo_award.png",
    title: "Bravo Award",
    details: "Date: 09/2023",
  },
];

const Achievements = () => (
  <section id="achievements">
    <h2>Achievements</h2>
    <div className="carousel">
      {achievements.map((achievement, index) => (
        <div key={index} className="carousel-item">
          <img src={achievement.badge} alt={achievement.title} />
          <p>
            {achievement.title}
            <br />
            {achievement.details}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Achievements;