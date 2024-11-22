import React, { useState } from "react";
import axios from "axios";
import "../Admin/Admin.css";

const Add = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [company, setCompany] = useState("");
  const [category, setCategory] = useState("");
  const [sizes, setSizes] = useState([]); 
  const [newSize, setNewSize] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const addSize = () => {
    if (newSize && newPrice) {
      setSizes([...sizes, { size: newSize, price: parseFloat(newPrice) }]);
      setNewSize("");
      setNewPrice("");
    } else {
      alert("Please enter both size and price!");
    }
  };

  const handleData = async (e) => {
    e.preventDefault();

    try {
      const { data: products } = await axios.get(
        "http://localhost:3000/products"
      );

      const existingProduct = products.find((product) => product.id === id);

      if (existingProduct) {
        const updatedProduct = {
          ...existingProduct,
          sizes: [...existingProduct.sizes, ...sizes],
        };

        await axios.put(`http://localhost:3000/products/${id}`, updatedProduct);
        alert("Product updated successfully!");
      } else {
        const newProduct = { id, name, image, company, category, sizes };
        await axios.post("http://localhost:3000/products", newProduct);
        alert("Product added successfully!");
      }

      setId("");
      setName("");
      setImage("");
      setCompany("");
      setCategory("");
      setSizes([]);
    } catch (error) {
      console.error("Error updating or adding product:", error);
    }
  };

  return (
    <div className="admin_container">
      <div className="add_items">
        <p className="add_p">Add or Update Item</p>
        <form onSubmit={handleData}>
          <div className="add_form">
            <label>Item ID</label>
            <input
              type="text"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
            <label>Item Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Item Image</label>
            <input
              type="text"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Item Company</label>
            <input
              type="text"
              className="form-control"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label>Item Category</label>
            <input
              type="text"
              className="form-control"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <label>Item Sizes</label>
            <div className="size-inputs">
              <input
                type="text"
                className="form-control size-input"
                placeholder="Size (e.g., 41 g)"
                value={newSize}
                onChange={(e) => setNewSize(e.target.value)}
              />
              <input
                type="number"
                className="form-control price-input"
                placeholder="Price (e.g., 10)"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
              <button type="button" className="add_size_btn" onClick={addSize}>
                Add Size
              </button>
            </div>
            <ul>
              {sizes.map((size, index) => (
                <li key={index}>
                  {size.size} - {size.price}
                </li>
              ))}
            </ul>

            <button type="submit" className="btn btn-primary add_item_btn">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
