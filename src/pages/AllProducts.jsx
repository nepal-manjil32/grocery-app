import React, { useContext } from 'react'
import { ShopContext } from '../context/Shopcontext'

const AllProducts = () => {

    const {products} = useContext(ShopContext);
    
  return (
    <div>
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            {/* filter */}
            <div className='min-w-60'>
                <p className='my-'></p>
            </div>
        </div>
    </div>
  )
}

export default AllProducts