import React from "react";
import "./Card.css";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Cards = ({ image, price, title, subtitle, rating, addToCart }) => {
  const handleAddToCart = () => {
    const item = { image, price, title, rating }; // Create product object
    addToCart(item); // Pass item to parent function
  };

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <div className="body">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p>{subtitle}</p>
          {/* Star Rating */}
          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) =>
              index < rating ? (
                <FaStar key={index} color="gold" />
              ) : (
                <FaRegStar key={index} color="gray" />
              )
            )}
          </div>
          <div className="btn">
            <button onClick={handleAddToCart}>Add To Cart</button>{" "}
            {/* Corrected */}
          </div>
        </div>
      </div>
    </div>
  );
};
