import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import Title from '../Title/Title';
import '../../pages/css/Cart.css'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full cart-total">
            <div className="text-2xl">
                <Title subTitle={'Cart'} title={'TOTALS'} />
            </div>

            <div className="flex flex-col gap-2 mt-3 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Delivery Fee</p>
                    <p>{currency}{delivery_fee}.00</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Total</p>
                    <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                </div>
            </div>
            <button className='btn pay-btn'>Pay</button>
        </div>
    );
};

export default CartTotal;
