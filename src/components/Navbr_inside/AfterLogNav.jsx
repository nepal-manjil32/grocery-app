import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AfterLogNav.css'

const AfterLogNav = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/'); 
  };

  return (
    <nav>
      <ul>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/place-order">Place Order</a></li>
        <li><a href="/orders">Orders</a></li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

AfterLogNav.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AfterLogNav;
