import React, { useContext } from "react";
import axios from "axios";
import { ShopContext } from "../../context/Shopcontext";
import "./delete.css";
import "../../../src/index.css";
import "../Card/card.css";

const Delete = () => {
  const { products, setProducts } = useContext(ShopContext);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then(() => {
        alert("Product Deleted");
        const updatedProducts = products.filter((product) => product.id !== id);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Error in Deleting:", error);
      });
  };

  return (
    <div className="delete products">
      {products.length > 0 ? (
        products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.company}</p>
            <div className="item_details">
              <p className="item_name">{product.name}</p>
            </div>
            <button
              className="add_btn"
              onClick={() => handleDelete(product.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default Delete;
