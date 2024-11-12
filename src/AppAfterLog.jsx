import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import PalceOrder from "./pages/PalceOrder";
import Orders from "./pages/Orders";
import AfterLogNav from "./components/Navbr_inside/AfterLogNav";

const AppAfterLog = ({ onLogout }) => {
  return (
    <div>
      <AfterLogNav onLogout={onLogout} />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PalceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default AppAfterLog;