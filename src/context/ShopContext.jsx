import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState({});

  const addToCart = async (itemId, size) =>{

    if(!size){
      toast.error("Please select size");
      return;
    }

    let cartData = structuredClone(cart);

    if(cartData[itemId]){
      if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCart(cartData);
  }

  // useEffect(()=>{
  //   console.log(cart);
  // },[cart])

  const getCartCount = () => {
    let totalCount = 0;
    for(const items in cart){
      for(const item in cart[items]){
        try{
          if(cart[items][item] > 0){
            totalCount += cart[items][item];
          }
        }catch(error){

        }
      }
    }
    return totalCount;
  }

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cart);

    cartData[itemId][size] = quantity;

    setCart(cartData);
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cart) {
        let itemInfo = products.find((product) => product.id === items);
        for (const item in cart[items]) {
            try {
                if (cart[items][item] > 0) {
                    let prices = itemInfo.sizes.find((size) => size.size === item).price;
                    totalAmount += cart[items][item] * prices;
                    
                }
            } catch (error) {
                console.error("Error calculating cart amount:", error);
            }
        }
    }
    return totalAmount;
};

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
    cart, addToCart,
    getCartCount, updateQuantity,
    getCartAmount,
    setProducts
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
