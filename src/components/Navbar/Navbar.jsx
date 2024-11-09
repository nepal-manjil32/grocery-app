import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 80 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`containe ${sticky ? 'darknav' : ''}`}>
      <img src={logo} alt=""  className='logo'/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-250} duration={500}>About</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-300} duration={500}>Contact</Link></li>
        <li><Link to='contact' smooth={true} offset={-300} duration={500} className='btn hover-btn'>Sign Up</Link></li>
      </ul>
    </nav>
  )
}

export default navbar
