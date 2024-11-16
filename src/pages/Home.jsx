import React from 'react';
import InsertProducts from '../components/InsertProducts/InsertProducts';
import AfterLogNav from '../components/Navbr_inside/AfterLogNav';
import Carousel from '../components/Carousel/Carousel';
import BottomCarousel from '../components/BottomCarousel/BottomCarousel';
// import AfterLogFooter from '../components/AfterLogFooter/AfterLogFooter';
import Footer from '../components/Footer/Footer';

const Home = ({ onLogout }) => {
  return (
    <div>
      <AfterLogNav onLogout={onLogout} />
      <Carousel/>
      <InsertProducts />
      <BottomCarousel/>
      <Footer />
    </div>
  );
};

export default Home;
