import React from 'react';
import { useState } from 'react';
import fakeData from '../fakeData'
import Cart from './Cart';
import Product from './Product';
import './Shop.css'

const Shop = () => {
   const first10 = fakeData.slice(0, 10);
   const [products, setProducts] = useState(first10);

   const [cart, setCart] = useState([])

   const handleAddProduct = (product) => {
      const newCart = [...cart, product]
      setCart(newCart)
   }

   return (
      <div className="shop-container row mx-0">
         <div className="product-container col-8 col-lg-9">
            {
               products.map(pd => <Product product={pd} key={pd.key} handleAddProduct={handleAddProduct}></Product>)
            }
         </div>
         <div className="cart-container col-4 col-lg-3">
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Shop;