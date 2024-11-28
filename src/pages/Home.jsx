import React from 'react';
import InsertProducts from '../components/InsertProducts/InsertProducts';
import Carousel from '../components/Carousel/Carousel';
import BottomCarousel from '../components/BottomCarousel/BottomCarousel';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Carousel/>
      <InsertProducts />
      <BottomCarousel/>
      <Footer />
    </div>
  );
};

export default Home;
