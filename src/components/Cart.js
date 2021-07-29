import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const cart = props.cart;
   // const total = cart.reduce((total, pd) => total + pd.price, 0)
   let total = 0;
   for (let i = 0; i < cart.length; i++) {
      const pd = cart[i];
      total = total + pd.price;
   }

   let shipping = 0;
   if (total > 100) {
      shipping = 0;
   }
   else if (total > 50) {
      shipping = 4.99;
   }
   else if (total > 0) {
      shipping = 9.99
   }

   const tax = total / 10;
   const grandTotal = total + shipping + tax;

   const formatNumber = num => {
      const precision = num.toFixed(2);
      return Number(precision);
   }

   return (
      <div className="cart-box">
         <h5>Order summary</h5>
         <p>Items ordered: <span>{cart.length}</span></p>
         <p>Product price: <span>{formatNumber(total)}</span></p>
         <p>Tax (10%): <span>{formatNumber(tax)}</span></p>
         <p>Shipping cost: <span>{formatNumber(shipping)}</span></p>
         <p>Total price: <span>{formatNumber(grandTotal)}</span></p>
      </div>
   );
};

export default Cart;