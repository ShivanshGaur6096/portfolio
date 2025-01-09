import React from "react";

const Hero = () => (
  <header id="hero">
    <div className="container">
      <img src="assets/profile.png" alt="Shivansh Gaur" className="profile-pic" />
      <h1>
        Hi, I'm <span>Shivansh Gaur</span>
      </h1>
      <p>iOS Developer | Creative Thinker | Problem Solver</p>
      <a href="#contact" className="btn primary">Let’s Connect</a>
      <a href="assets/resume/Shivansh_Gaur_Resume.pdf" className="btn secondary" download>Download Resume</a>
    </div>
  </header>
);

export default Hero;