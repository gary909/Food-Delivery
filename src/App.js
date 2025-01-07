// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import './App.css';
//import foodItems from './api';  // Assuming you have food items imported

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header cartItemCount={cart.length} />
      <Routes>
        <Route path="/" element={<h2>Welcome to Food Delivery</h2>} />
        <Route path="/menu" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;
