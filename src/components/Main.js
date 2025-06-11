import React from "react";
import NavBar from "./NavBar";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Contact from "./Contact";
import Skills from "./Skills"

function Main() {
  return (
    <>
      <NavBar />
      <Home />
      <About/>
      <Experience/>
      <Contact />
      <Skills />
    </>
  );
}

export default Main;
