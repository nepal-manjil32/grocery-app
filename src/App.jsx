import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
