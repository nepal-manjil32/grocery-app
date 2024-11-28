import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AfterLogNav.css'
import white_logo from '../../assets/whitelogo.png';
import cart from '../../assets/cart.png';
import { ShopContext } from '../../context/Shopcontext';

const AfterLogNav = ({ onLogout }) => {
  const navigate = useNavigate();

  const {setSearchQuery, getCartCount} = useContext(ShopContext);
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleLogout = () => {
    onLogout();
    navigate('/'); 
  };

  return (
    <nav className='afterlogin-nav'>
      <Link to={'/'}>
        <img src={white_logo} alt="Logo" className="logo" />
      </Link>
      <ul>
        <li><input type="text" placeholder="Search..." className='search' onChange={handleSearchChange}></input></li>
      </ul>
      <div className='cart-logout-div'>
        <Link to='/AppAfterLog/cart' className='cartlogo' onClick={() => console.log('Navigating to cart')}>
          <img className='cart_img' src={cart} />
          <p className='p_cart'>{getCartCount()}</p>
        </Link>
        <button onClick={handleLogout} className='white-btn hover-btn'>Logout</button>
        <Link to={'/AppAfterLog/admin'} className='admin-btn'>Admin</Link>
      </div>
    </nav>
  );
};

export default AfterLogNav;
