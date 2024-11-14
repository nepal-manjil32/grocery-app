import React, { useContext } from 'react'
import { ShopContext } from '../../context/Shopcontext'
import { Link } from 'react-router-dom';

const ProductsItems = ({id, image, name, price}) => {
    const {currency} = useContext(ShopContext);


  return (
    <Link className='' to={`/product/${id}`}>
        <div>
            <img src={image[0]} alt="" />
        </div>
        <p>{name}</p>
        <p>{currency} {price}</p>
    </Link>
  )
}

export default ProductsItems