import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AfterLogNav.css'
import logo from '../../assets/logo.png';
import white_logo from '../../assets/whitelogo.png';
import cart from '../../assets/cart.png';
import { ShopContext } from '../../context/Shopcontext';

const AfterLogNav = ({ onLogout }) => {
  const navigate = useNavigate();

  const {setSearchQuery} = useContext(ShopContext);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleLogout = () => {
    onLogout();
    navigate('/'); 
  };

  return (
    <nav className='afterlogin-nav'>
      <img 
        src={white_logo} 
        alt="Logo" 
        className="logo"
      />
      <div class="btn-group categories">
          <button class="btn btn-secondary dropdown-toggle category-btn white-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
          <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Seasonal Fruits and Vegetables</a></li>
          <li><a class="dropdown-item" href="#">Food, Grains, and Oil</a></li>
          <li><a class="dropdown-item" href="#">Bakery Cakes Dairy</a></li>
          <li><a class="dropdown-item" href="#">Cleaning and Household</a></li>
          <li><a class="dropdown-item" href="#">Eggs, Fish, and Meat</a></li>
          <li><a class="dropdown-item" href="#">Beverages</a></li>
          <li><a class="dropdown-item" href="#">Puja Samagri Items</a></li>
          <li></li>
          </ul>
      </div>
      <ul>
        <li><input type="text" placeholder="Search.." className='search' onChange={handleSearchChange}></input></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/place-order">Place Order</a></li>
        <li><a href="/orders">Orders</a></li>
      </ul>
      <div className='cart-logout-div'>
        <button className='cart'><img src={cart} /></button>
        <button onClick={handleLogout} className='white-btn hover-btn'>Logout</button>
      </div>
    </nav>
  );
};

AfterLogNav.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AfterLogNav;
