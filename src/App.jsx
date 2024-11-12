import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = ({ onLogin }) => {
  return (
    <div>
      <Navbar onLogin={onLogin} />
      <Hero />
      <div>
        <Title subTitle="Testimonials" title="What Our Customers Say?" />
        <Testimonials />
        <Title subTitle="Contact" title="Let's Get Connected!" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;