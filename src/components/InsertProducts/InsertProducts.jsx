import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import ProductsItems from '../Products/ProductsItems';
import Title from '../Title/Title';
import '../Card/Card.css';
import '../../index.css'
import drinks from '../../assets/drinks.png'
import vegetables from '../../assets/vegetables.png'
import puja from '../../assets/puja.png'
import bakery from '../../assets/bakery.png'
import barbecue from '../../assets/barbecue.png'
import household from '../../assets/household.png'
import rice from '../../assets/rice.png'

const InsertProducts = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]); 

  return (
    <div>
      <Title subTitle="मौसमी फलफूल र तरकारीहरू" title="Seasonal Fruits and Vegetables" logo={vegetables}/>
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
      <Title subTitle="खाद्य, अन्न, र तेल" title="Food, Grains, and Oil" logo={rice}/>
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
      <Title subTitle="बेकरी, केक, र डेरी उत्पादनहरू" title="Bakery Cakes Dairy" logo={bakery}/>
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
      <Title subTitle="सफाइ र घरायसी सामग्रीहरू" title="Cleaning and Household" logo={household}/>
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
      <Title subTitle="अण्डा, माछा, र मासु" title="Eggs, Fish, and Meat" logo={barbecue}/>
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
      <Title subTitle="पेय पदार्थहरू" title="Beverages" logo={drinks}/>
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
      <Title subTitle="पूजा सामग्री सामग्रीहरू" title="Puja Samagri Items" logo={puja}/>
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
