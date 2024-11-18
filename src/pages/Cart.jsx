import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from '../components/Title/Title'
import Footer from '../components/Footer/Footer'
import bin from '../assets/bin.png'
import CartTotal from '../components/Cart Totel/CartTotal'
import '../pages/css/Cart.css'

const Cart = () => {
  const { products, currency, cart, updateQuantity } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []
    for (const items in cart) {
      for (const item in cart[items]) {
        if (cart[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cart[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cart])

  return (
    <div className="border-t pt-14 cart">
      <div>
        <Title subTitle={'CART'} title={'ITEMS'} />
        {cartData.map((item, index) => {
          const productData = products.find((product) => product.id === item.id)
          const sizeData = productData.sizes.find(
            (size) => size.size === item.size
          ) 
          {/* Upper Part */}
          return (
            <div key={index} className='cart-inner'>
              <div>
                <img src={productData.image} alt="" />
                <div>
                  <p>
                    {productData.name}
                  </p>
                  <div>
                    <p>
                      {currency}
                      {sizeData?.price || 'N/A'}
                    </p>
                    <p>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item.id, item.size, 0)} className='cursor-pointer delete-btn' src={bin} alt="" />
            </div>
          )
        })}
      </div>
      
      {/* Lower Part */}
      <div >
        <div>
            <CartTotal/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
