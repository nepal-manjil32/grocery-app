import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Shopcontext'
import Title from '../components/Title/Title'
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
    <div className="border-t pt-14  cart">
      <div className="text-2xl mb-3 font-bold">
        <Title subTitle={'YOUR'} title={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product.id === item.id)
          const sizeData = productData.sizes.find(
            (size) => size.size === item.size
          ) 
          {/* Upper Part */}
          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2_0.5fr] items-center gap-4 cart-upper"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {sizeData?.price || 'N/A'}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
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
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
            <CartTotal/>
        </div>
      </div>
    </div>
  )
}

export default Cart
