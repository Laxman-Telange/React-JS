/* eslint-disable react/prop-types */
import React from "react";
import "../App.css";

export class Car extends React.Component {
  render() {
    const { model, color, year, image, style } = this.props;

    return (
      <div className="car-name">
        <img src={image} className="car-image" />
        <h1 style={style}>Model Name </h1>
        <p>{model} </p>
        <p>Color - {color} </p>
        <p>Year - {year} </p>
        <button className="btn">Book Now</button>
      </div>
    );
  }
}
