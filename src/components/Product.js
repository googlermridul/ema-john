import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
   // console.log(props.product);
   const {name, price, seller, img, stock} = props.product;
   return (
      <div className="product-box">
         <div className="img-box">
            <img src={img} alt="" />
         </div>
         <div className="info-box col-8">
            <h6>{name}</h6>
            <span>By: {seller}</span>
            <h5>${price}</h5>
            <p>Only {stock} left in stock - Order Quickly</p>
            <button className="cart-btn" onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
         </div>
      </div>
   );
};

export default Product;