import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
<<<<<<< Updated upstream
    const currency = "रु.";
=======
    const [searchQuery, setSearchQuery] = useState('');
    const currency = "₹";
>>>>>>> Stashed changes
    const delivery_fee = 15;

    const filteredProducts = products.filter(product => 
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
