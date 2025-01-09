import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles.css";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Hero />
      <main>
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Achievements />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;