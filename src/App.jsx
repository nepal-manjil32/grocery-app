<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import PalceOrder from "./pages/PalceOrder";
import Orders from "./pages/Orders";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
=======
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
>>>>>>> 127c77d (new components added)

const App = () => {
  return (
    <div>
      <Navbar />
<<<<<<< HEAD
      <Routes>
        <Route path="/hero" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PalceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};
=======
      <Hero />
    </>
  )
}
>>>>>>> 127c77d (new components added)

export default App;
