// Checkout.js
import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const Checkout = ({ cart }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const totalAmount = cart.reduce((total, product) => total + product.price, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', { name, address });
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <button type="submit">Place Order</button>
      </form>

      <div className="paypal-button">
        <PayPalButton
          amount={totalAmount}
          onSuccess={(details, data) => {
            alert("Payment successful: " + details.payer.name.given_name);
            console.log(details, data);
          }}
          options={{
            clientId: "your-client-id-here" // Use your PayPal sandbox client ID
          }}
        />
      </div>
    </div>
  );
};

export default Checkout;
