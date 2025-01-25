// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const HooksCar = () => {
  const [selectedCar, setSelectedCar] = useState("BMW"); // Default value

  // Images for different cars
  const fruitImages = {
    BMW: "../src/assets/bmw.jpg",
    CYBER: "../src/assets/cyber.jpg",
    MARUTI: "../src/assets/maruti.jpg",
    THAR: "../src/assets/thar.jpg",
  };

  // Handle selection change
  const handleSelectChange = (event) => {
    setSelectedCar(event.target.value);
  };

  return (
    <div className="hook">
      <h1>Selected Car:</h1>
      <select className="drop" onChange={handleSelectChange}>
        <option value="BMW">BMW</option>
        <option value="CYBER">CYBER TRUCK</option>
        <option value="MARUTI">MARUTI</option>
        <option value="THAR">THAR</option>
      </select>
      <h2>You selected:</h2>
      <div style={{ marginTop: "20px" }}>
        <img
          src={fruitImages[selectedCar]}
          alt={selectedCar}
          style={{
            width: "350px",
            height: "350px",
            borderRadius: "0 0 10px 10px",
          }}
        />
      </div>
    </div>
  );
};
