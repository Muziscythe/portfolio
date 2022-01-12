import React from "react";
import "./App.css";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="app">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}
