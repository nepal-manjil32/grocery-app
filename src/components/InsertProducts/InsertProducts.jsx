import React, { useContext, useState, useRef } from "react";
import { ShopContext } from "../../context/Shopcontext";
import Title from "../Title/Title";
import "../Card/Card.css";
import "../../index.css";
import drinks from "../../assets/drinks.png";
import vegetables from "../../assets/vegetables.png";
import puja from "../../assets/puja.png";
import bakery from "../../assets/bakery.png";
import barbecue from "../../assets/barbecue.png";
import household from "../../assets/household.png";
import rice from "../../assets/rice.png";
import search from "../../assets/search.png";
import snacks from "../../assets/snack.png";

const categoryLogos = {
  vegetables: vegetables,
  grains: rice,
  bakery: bakery,
  household: household,
  meat: barbecue,
  beverages: drinks,
  puja: puja,
  snacks: snacks,
};

const InsertProducts = () => {
  const { filteredProducts, searchQuery, currency, addToCart } =
    useContext(ShopContext);

  const [selectedPrices, setSelectedPrices] = useState({});
  const [selectedDropdown, setSelectedDropdown] = useState({});
  const [size, setSize] = useState("");

  const [sortOption, setSortOption] = useState("");

  const sectionRefs = {
    vegetables: useRef(null),
    snacks: useRef(null),
    grains: useRef(null),
    bakery: useRef(null),
    household: useRef(null),
    meat: useRef(null),
    beverages: useRef(null),
    puja: useRef(null),
  };

  const handleScrollToSection = (category) => {
    const ref = sectionRefs[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  const handleSortChange = (sortOption) => {
    setSortOption(sortOption);
  };

  const getSortedProducts = (products) => {
    if (sortOption === "highToLow") {
      return [...products].sort((a, b) => b.sizes[0].price - a.sizes[0].price);
    } else if (sortOption === "lowToHigh") {
      return [...products].sort((a, b) => a.sizes[0].price - b.sizes[0].price);
    }
    return products;
  };

  const renderProductCard = (item) => {
    // const dropdownValue = selectedDropdown[item.id] || item.sizes[0]?.size;
    const dropdownValue = selectedDropdown[item.id] || "Select Size";
    const productPrice = selectedPrices[item.id];

    return (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.name} />
        <p>{item.company}</p>
        <div className="item_details">
          <p className="item_name">{item.name}</p>
        </div>
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
                    handleDropdown(item.id, sizeObj.size);
                    handleSizeChange(item.id, sizeObj.price);
                    setSize(sizeObj.size);
                  }}
                >
                  {sizeObj.size}
                </button>
              ))}
            </div>
          </ul>
        </div>
        <h4>
          {productPrice !== undefined ? (
            <>
              {currency}
              {productPrice}
            </>
          ) : (
            <h6>Select size to see price</h6>
          )}
        </h4>
        <button className="add_btn" onClick={() => addToCart(item.id, selectedDropdown[item.id])} >
          Add
        </button>
      </div>
    );
  };

  const renderProductsSection = (title, subTitle, logo, category) => {
    const categoryProducts = filteredProducts.filter(
      (item) => item.category === category
    );

    const sortedProducts = getSortedProducts(categoryProducts);

    return (
      <div ref={sectionRefs[category]} key={category}>
        <Title subTitle={subTitle} title={title} logo={logo} />
        <div className="products">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(renderProductCard)
          ) : (
            <p className="no-products">No products found in this category</p>
          )}
        </div>
      </div>
    );
  };

  let dynamicTitle = "Search Results";
  let dynamicSubTitle = "Your search results";
  let dynamicLogo = search;

  if (searchQuery) {
    dynamicTitle = `Results for "${searchQuery}"`;
    dynamicSubTitle = `Found ${filteredProducts.length} matching product(s)`;
    dynamicLogo =
      filteredProducts.length > 0
        ? categoryLogos[filteredProducts[0]?.category]
        : search;
  }

  if (searchQuery) {
    const sortedProducts = getSortedProducts(filteredProducts);
    return (
      <div>
        <Title
          subTitle={dynamicSubTitle}
          title={dynamicTitle}
          logo={dynamicLogo}
        />
        <div className="products">
          {sortedProducts.length > 0 ? (
            sortedProducts.map(renderProductCard)
          ) : (
            <p className="no-products">No products match your search.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="dropdown shop_by_cat">
        <button
          className="btn btn-primary dropdown-toggle "
          type="button"
          data-bs-toggle="dropdown"
        >
          Shop By Category
        </button>
        <ul className="dropdown-menu">
          {Object.keys(sectionRefs).map((category) => (
            <li key={category}>
              <button
                className="dropdown-item"
                onClick={() => handleScrollToSection(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        {/* Relevance Dropdown */}
        <div className="dropdown">
          <button
            className="btn-secondary dropdown-toggle price_filter_btn"
            type="button"
            data-bs-toggle="dropdown"
          >
            Relevance
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSortChange("lowToHigh")}
              >
                Price: Low to High
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleSortChange("highToLow")}
              >
                Price: High to Low
              </button>
            </li>
          </ul>
        </div>
      </div>
      {renderProductsSection(
        "Seasonal Fruits and Vegetables",
        "मौसमी फलफूल र तरकारीहरू",
        vegetables,
        "vegetables"
      )}
      {renderProductsSection(
        "Food, Grains, and Oil",
        "खाद्य, अन्न, र तेल",
        rice,
        "grains"
      )}
      {renderProductsSection(
        "Snacks and Branded Foods",
        "नास्ता र ब्रान्डेड खाद्य पदार्थहरू",
        snacks,
        "snacks"
      )}
      {renderProductsSection(
        "Bakery Cakes Dairy",
        "बेकरी, केक, र डेरी उत्पादनहरू",
        bakery,
        "bakery"
      )}
      {renderProductsSection(
        "Cleaning and Household",
        "सफाइ र घरायसी सामग्रीहरू",
        household,
        "household"
      )}
      {renderProductsSection(
        "Eggs, Fish, and Meat",
        "अण्डा, माछा, र मासु",
        barbecue,
        "meat"
      )}
      {renderProductsSection("Beverages", "पेय पदार्थहरू", drinks, "beverages")}
      {renderProductsSection(
        "Puja Samagri Items",
        "पूजा सामग्री सामग्रीहरू",
        puja,
        "puja"
      )}
    </div>
  );
};

export default InsertProducts;
