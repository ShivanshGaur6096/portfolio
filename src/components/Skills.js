import React, { useState } from "react";
import { skillsData } from "../data";

const Skills = () => {
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  const toggleFilter = (category) => {
    const newFilters = new Set(selectedFilters);
    if (newFilters.has(category)) {
      newFilters.delete(category);
    } else {
      newFilters.add(category);
    }
    setSelectedFilters(newFilters);
  };

  const filteredSkills = Array.from(selectedFilters).flatMap(
    (category) => skillsData[category] || []
  );

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="filter-buttons">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`filter-button ${selectedFilters.has(category) ? "active" : ""}`}
            onClick={() => toggleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="highlighted-skills">
        {filteredSkills.length > 0 ? (
          <ul>
            {filteredSkills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>Click on a filter to see skills</p>
        )}
      </div>
    </section>
  );
};

export default Skills;
