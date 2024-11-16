import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import PalceOrder from "./pages/PalceOrder";
import Orders from "./pages/Orders";
import AfterLogNav from "./components/Navbr_inside/AfterLogNav";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Card/Card";
import Title from "./components/Title/Title";
import Home from "./pages/Home";

const AppAfterLog = ({ onLogout }) => {
  return (
    <>
      <Home onLogout={onLogout} />
      <Routes>
        {/* <Route path="/" element={<Home onLogout={onLogout} />}/> */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PalceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </>
  );
};

export default AppAfterLog;