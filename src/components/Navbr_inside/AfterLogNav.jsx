import React from 'react';
import { useNavigate } from 'react-router-dom';

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

export default AfterLogNav;
