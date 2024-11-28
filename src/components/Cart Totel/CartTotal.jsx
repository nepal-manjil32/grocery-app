import React, { useContext } from 'react';
import { ShopContext } from '../../context/Shopcontext';
import Title from '../Title/Title';
import '../../pages/css/Cart.css'

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="cart-total">
            <div>
                <div className='price'>
                    <h1 className='total-payment-heading'>TOTAL PAYMENT</h1>
                </div>
                <div className='price'>
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='price'>
                    <p>Delivery Fee</p>
                    <p>{currency}{delivery_fee}.00</p>
                </div>
                <hr />
                <div className='cart-totalprice price'>
                    <p>Total</p>
                    <p>{currency}{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</p>
                </div>
            </div>
            <button className='pay-btn'><a href="../">Pay</a></button>
        </div>
    );
};

export default CartTotal;
