import React, { useState } from "react";
import "./Navbar.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Navbar = ({ cartItems = [], cardRemove }) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="Amazon Logo" />
      </div>
      <input type="text" className="search-bar" placeholder="Search here..." />

      <div className="cart" onClick={handleCartClick}>
        <div className="cart-img">
          <img src="./cart.png" alt="Cart" />
        </div>

        <div className="counter">
          <p>{cartItems.length}</p>
        </div>
      </div>

      {showCart && (
        <div className="cart-dropdown">
          {/* ✖ Close Button */}
          <button className="close-btn" onClick={() => setShowCart(false)}>
            &times;
          </button>
          {cartItems.length > 0 ? (
            <ul className="selected-cards">
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-img" />
                  <div className="cart-details">
                    <p className="cart-title">{item.title}</p>
                    <p className="cart-price">{item.price}</p>
                    <div className="rating">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < item.rating ? (
                          <FaStar key={i} color="gold" />
                        ) : (
                          <FaRegStar key={i} color="gray" />
                        )
                      )}
                    </div>
                    <div className="order">
                      <button className="place-order">Buy</button>
                      <button
                        className="remove-order"
                        onClick={() => cardRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
