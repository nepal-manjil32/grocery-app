import React from 'react';
import InsertProducts from '../components/InsertProducts/InsertProducts';
import AfterLogNav from '../components/Navbr_inside/AfterLogNav';
import Carousel from '../components/Carousel/Carousel';

const Home = ({ onLogout }) => {
  return (
    <div>
      <AfterLogNav onLogout={onLogout} />
      <Carousel/>
      <InsertProducts />
    </div>
  );
};

export default Home;
