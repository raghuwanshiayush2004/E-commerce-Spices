import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount , all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Ensure you return inside map */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className='cartitems-format cartitems-format-main'>
                <img src={e.image} alt='' className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>Rs {e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>Rs {e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt='Remove from cart'
                  className='cartitems-remove-icon'
                />
              </div>
              <hr />
            </div>
          );
        }
        // Return null if cartItems[e.id] is 0 to satisfy the map requirement
        return null;
      })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
            <h1>Cart Total</h1>
            <div>
                <div className='cartitems-total-item'>
                    <p>Subtotal</p>
                    <p>Rs {getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cartitems-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-item'>
                    <h3>Total</h3>
                    <h3>Rs {getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed to Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className='cartitems-promobox'>
                <input type='text' placeholder='Promo Code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
