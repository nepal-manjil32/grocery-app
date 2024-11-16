import React, { useContext, useState } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import Title from '../Title/Title';
import '../Card/Card.css';
import '../../index.css';
import drinks from '../../assets/drinks.png';
import vegetables from '../../assets/vegetables.png';
import puja from '../../assets/puja.png';
import bakery from '../../assets/bakery.png';
import barbecue from '../../assets/barbecue.png';
import household from '../../assets/household.png';
import rice from '../../assets/rice.png';
import search from '../../assets/search.png';

const categoryLogos = {
  vegetables: vegetables,
  grains: rice,
  bakery: bakery,
  household: household,
  meat: barbecue,
  beverages: drinks,
  puja: puja,
};

const InsertProducts = () => {
  const { filteredProducts, searchQuery, currency } = useContext(ShopContext);

  const [selectedPrices, setSelectedPrices] = useState({});
  const [selectedDropdown, setSelectedDropdown] = useState({});

  const handleDropdown = (productId, size) => {
    setSelectedDropdown((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleSizeChange = (productId, price) => {
    setSelectedPrices((prev) => ({
      ...prev,
      [productId]: price,
    }));
  };

  let dynamicTitle = 'Search Results';
  let dynamicSubTitle = 'Your search results';
  let dynamicLogo = search;

  if (searchQuery) {
    dynamicTitle = `Results for "${searchQuery}"`;
    dynamicSubTitle = `Found ${filteredProducts.length} matching product(s)`;
    dynamicLogo =
      filteredProducts.length > 0
        ? categoryLogos[filteredProducts[0]?.category] || puja
        : search;
  }

  const renderProductCard = (item) => {
    const dropdownValue = selectedDropdown[item.id || item.name] || item.sizes[0]?.size;
  
    const productPrice = selectedPrices[item.id] || selectedPrices[item.name] || item.price;
  
    return (
      <div className="card" key={item.id || item.name}>
        <img src={item.image} alt={item.name} />
        <p>{item.company}</p>
        <h5>{item.name}</h5>
        <div className="btn-group categories">
          <button
            className="btn btn-secondary dropdown-toggle category-btn white-btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {dropdownValue} 
          </button>
          <ul className="dropdown-menu">
            <div className="size_menu">
              {item.sizes?.map((sizeObj, index) => (
                <button
                  className="size_btn"
                  key={index}
                  onClick={() => {
                    handleDropdown(item.id || item.name, sizeObj.size);
                    handleSizeChange(item.id || item.name, sizeObj.price || item.price);
                  }}
                >
                  {sizeObj.size}
                </button>
              ))}
            </div>
          </ul>
        </div>
        <h4>
          {currency}
          {productPrice}
        </h4>
        <button className="add_btn">Add</button>
      </div>
    );
  };

  const renderProductsSection = (title, subTitle, logo, category) => {
    const categoryProducts = filteredProducts.filter(
      (item) => item.category === category
    );

    return (
      <div key={category}>
        <Title subTitle={subTitle} title={title} logo={logo} />
        <div className="products">
          {categoryProducts.length > 0 ? (
            categoryProducts.map(renderProductCard)
          ) : (
            <p className="no-products">No products found in this category</p>
          )}
        </div>
      </div>
    );
  };

  if (searchQuery) {
    return (
      <div>
        <Title
          subTitle={dynamicSubTitle}
          title={dynamicTitle}
          logo={dynamicLogo}
        />
        <div className="products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(renderProductCard)
          ) : (
            <p className="no-products">No products match your search.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderProductsSection(
        'Seasonal Fruits and Vegetables',
        'मौसमी फलफूल र तरकारीहरू',
        vegetables,
        'vegetables'
      )}
      {renderProductsSection(
        'Food, Grains, and Oil',
        'खाद्य, अन्न, र तेल',
        rice,
        'grains'
      )}
      {renderProductsSection(
        'Bakery Cakes Dairy',
        'बेकरी, केक, र डेरी उत्पादनहरू',
        bakery,
        'bakery'
      )}
      {renderProductsSection(
        'Cleaning and Household',
        'सफाइ र घरायसी सामग्रीहरू',
        household,
        'household'
      )}
      {renderProductsSection(
        'Eggs, Fish, and Meat',
        'अण्डा, माछा, र मासु',
        barbecue,
        'meat'
      )}
      {renderProductsSection(
        'Beverages',
        'पेय पदार्थहरू',
        drinks,
        'beverages'
      )}
      {renderProductsSection(
        'Puja Samagri Items',
        'पूजा सामग्री सामग्रीहरू',
        puja,
        'puja'
      )}
    </div>
  );
};

export default InsertProducts;
