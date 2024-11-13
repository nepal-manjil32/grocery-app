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

const AppAfterLog = ({ onLogout }) => {
  return (
    <>
      <AfterLogNav onLogout={onLogout} />
      {/* <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PalceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes> */}
      <div>
      <Title subTitle="Winter" title="Seasonal Vegetables"/>
      <div className="products">
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/40233964_1-wai-wai-ready-to-eat-noodles-instant-chicken-flavour.jpg?tr=w-154,q-80" company="Chaudhary Group" name="Wai Wai" price="Rs 20"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/10000204_17-fresho-tomato-local.jpg?tr=w-154,q-80" company="Sital Urban Farm" name="Tomato" price="Rs 180"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/40233964_1-wai-wai-ready-to-eat-noodles-instant-chicken-flavour.jpg?tr=w-154,q-80" company="Chaudhary Group" name="Wai Wai" price="Rs 20"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/10000204_17-fresho-tomato-local.jpg?tr=w-154,q-80" company="Sital Urban Farm" name="Tomato" price="Rs 180"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/40233964_1-wai-wai-ready-to-eat-noodles-instant-chicken-flavour.jpg?tr=w-154,q-80" company="Chaudhary Group" name="Wai Wai" price="Rs 20"/>
      </div>
      <Title subTitle="Snacks" title="Handiram Snacks"/>
      <div className="products">
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/40233964_1-wai-wai-ready-to-eat-noodles-instant-chicken-flavour.jpg?tr=w-154,q-80" company="Chaudhary Group" name="Wai Wai" price="Rs 20"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/10000204_17-fresho-tomato-local.jpg?tr=w-154,q-80" company="Sital Urban Farm" name="Tomato" price="Rs 180"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/40233964_1-wai-wai-ready-to-eat-noodles-instant-chicken-flavour.jpg?tr=w-154,q-80" company="Chaudhary Group" name="Wai Wai" price="Rs 20"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/10000204_17-fresho-tomato-local.jpg?tr=w-154,q-80" company="Sital Urban Farm" name="Tomato" price="Rs 180"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/30001186_14-fresho-lemon.jpg?tr=w-154,q-80" company="Himal Farm" name="Lemon" price="Rs 200"/>
        <Card image = "https://www.bigbasket.com/media/uploads/p/m/40233964_1-wai-wai-ready-to-eat-noodles-instant-chicken-flavour.jpg?tr=w-154,q-80" company="Chaudhary Group" name="Wai Wai" price="Rs 20"/>
      </div>
      </div>
    </>
  );
};

export default AppAfterLog;