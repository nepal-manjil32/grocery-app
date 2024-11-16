import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const currency = "रु.";
  const delivery_fee = 15;

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(() => {
        console.log("Error fetching products");
      });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const value = {
    products,
    filteredProducts,
    searchQuery,
    setSearchQuery,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
