import React from 'react'
<<<<<<< HEAD

function Hero() {
  return (
    <div>Hero</div>
  )
}

export default Hero
=======
import './Hero.css'
import hero from '../../assets/hero.png'

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
>>>>>>> 127c77d (new components added)
