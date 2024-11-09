import React from 'react'
import './Hero.css'
import hero from '../../assets/grocery.png'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero-left'>
            <h1>WELCOME TO </h1>
            <h2>हाट बजार</h2>
            <p>घरकै हाट बजार अनुभव</p>
            <p>"Experience the Local Market at Home"</p>
            <button className='shop-btn hover-btn'>Shop Now</button>
        </div>
        <div className='hero-right'>
            <img src={hero} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
