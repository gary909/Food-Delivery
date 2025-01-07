// CartPage.js
import React from 'react';

const CartPage = ({ cart }) => (
  <div>
    <h2>Your Cart</h2>
    <ul>
      {cart.map((product, index) => (
        <li key={index}>{product.name} - ${product.price}</li>
      ))}
    </ul>
    <button>Proceed to Checkout</button>
  </div>
);

export default CartPage;
