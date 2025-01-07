import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartItemCount }) => (
  <header>
    <h1>Food Delivery</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/cart">Cart ({cartItemCount})</Link>
    </nav>
  </header>
);

export default Header;
