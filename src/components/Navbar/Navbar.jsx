import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import white_logo from '../../assets/whitelogo.png';
import nepal from '../../assets/nepal.gif';
import { Link } from 'react-scroll';

const Navbar = ({ onLogin }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 250);
      console.log("Sticky state:", sticky); 
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${sticky ? 'darknav' : ''}`}>
      <img 
        src={sticky ? white_logo : logo} 
        alt="Logo" 
        className="logo"
      />
      <ul>
        <li><Link to='hero' smooth={true} offset={-1} duration={500}>Home</Link></li>
        <li><Link to='about-container' smooth={true} offset={-270} duration={500}>About</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-300} duration={500}>Contact</Link></li>
        <li><Link to='#' smooth={true} offset={-300} duration={500} className='btn hover-btn' onClick={onLogin}>Sign Up</Link></li>
        <li className='nepal-logo'><img src={nepal} alt=""/></li>
      </ul>
    </nav>
  );
};

export default Navbar;