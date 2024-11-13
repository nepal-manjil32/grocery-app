import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './AfterLogNav.css'
import logo from '../../assets/logo.png';
import white_logo from '../../assets/whitelogo.png';

const AfterLogNav = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/'); 
  };

  return (
    <nav className='afterlogin-nav'>
      <img 
        src={logo} 
        alt="Logo" 
        className="logo"
      />
      <ul>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/place-order">Place Order</a></li>
        <li><a href="/orders">Orders</a></li>
        <li>
          <button onClick={handleLogout}>Cart</button>
        </li>
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
