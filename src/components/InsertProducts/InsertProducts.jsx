import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import ProductsItems from '../Products/ProductsItems';
import Title from '../Title/Title';
import '../Card/Card.css';
import '../../index.css'

const InsertProducts = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]); 

  return (
    <div>
      <Title subTitle="Winter" title="Seasonal Vegetables" />
      <div className="products">
        {latestProducts.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.company}</p>
            <h5>{item.name}</h5>
            <h4>{item.price}</h4>
            <button>Add</button>
          </div>
        ))}
      </div>
      <Title subTitle="Snacks" title="Haldiram Snacks"/>
      <div className="products">
        {latestProducts.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.company}</p>
            <h5>{item.name}</h5>
            <h4>{item.price}</h4>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsertProducts;
