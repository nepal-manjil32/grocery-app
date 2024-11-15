import React from 'react';
import InsertProducts from '../components/InsertProducts/InsertProducts';
import AfterLogNav from '../components/Navbr_inside/AfterLogNav';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

const Home = ({ onLogout }) => {
  return (
    <div>
      <AfterLogNav onLogout={onLogout} />
      <Carousel/>
      <InsertProducts />
      <Footer />
    </div>
  );
};

export default Home;
