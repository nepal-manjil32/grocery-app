import React from 'react'
import './Card.css'
import lemon from '../../images/lemon.webp'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt="" />
        <p>{props.company}</p>
        <h5>{props.name}</h5>
        <h4>{props.price}</h4>
        <button>Add</button>
    </div>
  )
}

export default Card
