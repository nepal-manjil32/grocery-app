import React from 'react'
import img_1 from '../../assets/1.jpg'
import earth from '../../assets/earth.jpg'
import space from '../../assets/Space.png'
import './Carousel.css'

const Carousel = () => {
  return (
    <>
     <div class="carousel-six-images">
        <img src={img_1} class="one img-responsive"/>
        <img src={earth} class="two changing img-responsive" />
        <img src={space} class="three changing img-responsive" />
        <img src={img_1} class="four changing img-responsive" />
        <img src={earth} class="five changing img-responsive" />
        <img src={space} class="six changing img-responsive" />
      </div>
    </>
  )
}

export default Carousel
