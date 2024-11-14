import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AfterLogNav.css'
import logo from '../../assets/logo.png';
import white_logo from '../../assets/whitelogo.png';
import cart from '../../assets/cart.png';

const AfterLogNav = ({ onLogout }) => {
  const navigate = useNavigate();

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
          <li><a class="dropdown-item" href="#">Vegetables</a></li>
          <li><a class="dropdown-item" href="#">Snacks</a></li>
          <li><a class="dropdown-item" href="#">Drinks</a></li>
          </ul>
      </div>
      <ul>
        <li><input type="text" placeholder="Search.." className='search'></input></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/place-order">Place Order</a></li>
        <li><a href="/orders">Orders</a></li>
      </ul>
      <div className='cart-logout-div'>
        <button onClick={handleLogout} className='cart'><img src={cart} /></button>
        <button onClick={handleLogout} className='white-btn hover-btn'>Logout</button>
      </div>
    </nav>
  );
};

AfterLogNav.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AfterLogNav;
