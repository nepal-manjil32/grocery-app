import React from "react";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
=======
>>>>>>> b3f5f7cbd349e18ad389e2261c8ee13b9ff9c297
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = ({ onLogin }) => {
  return (
<<<<<<< HEAD
    <>
      <Navbar />
=======
    <div>
      <Navbar onLogin={onLogin} />
>>>>>>> b3f5f7cbd349e18ad389e2261c8ee13b9ff9c297
      <Hero />
      <div>
        <Title subTitle="Testimonials" title="What Our Customers Say?" />
        <Testimonials />
        <Title subTitle="Contact" title="Let's Get Connected!" />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;