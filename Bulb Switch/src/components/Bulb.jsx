import { useState } from "react";

export const Bulb = () => {
  const [bulbColor, setBulbColor] = useState("yellow");
  const bulbImages = {
    yellow: "../src/assets/yellow-bulb.jpg",
    red: "../src/assets/red-bulb.jpg",
    green: "../src/assets/green-bulb.jpg",
  };
  const changeColor = (color) => {
    setBulbColor(color);
  };
  return (
    <div>
      <h1>Change Bulb Color</h1>
      <div className="bulb-container">
        <img
          src={bulbImages[bulbColor]} // Switch image dynamically
          alt={`${bulbColor} bulb`}
          style={{ width: "250px", height: "250px" }}
        />
      </div>

      <div>
        <div className="btn">
          <button
            onClick={() => changeColor("yellow")}
            style={{ backgroundColor: "yellow", color: "black", margin: "5px" }}
          >
            Yellow
          </button>
          <button
            onClick={() => changeColor("red")}
            style={{ backgroundColor: "red", color: "white", margin: "5px" }}
          >
            Red
          </button>
          <button
            onClick={() => changeColor("green")}
            style={{ backgroundColor: "green", color: "white", margin: "5px" }}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
};
