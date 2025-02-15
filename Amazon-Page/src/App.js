import React, { useState } from "react";
import * as Components from "./components";

const App = () => {
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]); // Add new product to cart array
  };
  const cardRemove = (index) => {
    setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Components.Navbar cartItems={cartItems} cardRemove={cardRemove} />
      <Components.Card addToCart={addToCart} />
      <Components.Footer />
    </div>
  );
};

export default App;
