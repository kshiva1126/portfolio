import React, { FC } from "react";

import "./App.css";

import Heading from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <>
      <Heading />
      <About />
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
