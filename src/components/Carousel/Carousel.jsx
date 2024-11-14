import React from 'react'
import img_1 from '../../images/carousel-1.png'
import img_2 from '../../images/carousel-2.png'
import img_3 from '../../images/carousel-3.jpg'
import './Carousel.css'

const Carousel = () => {
  return (
    <>
     <div class="carousel-six-images">
        <img src={img_1} class="one img-responsive"/>
        <img src={img_2} class="two changing img-responsive" />
        <img src={img_3} class="three changing img-responsive" />
      </div>
    </>
  )
}

export default Carousel