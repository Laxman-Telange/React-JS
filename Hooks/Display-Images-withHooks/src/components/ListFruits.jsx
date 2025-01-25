import React from "react";
import "../App.css";

export class ListFruits extends React.Component {
  render() {
    const fruits = ["Banana", "Orange", "Mango", "Apple"];

    return (
      <div>
        <h1>Fruits List</h1>
        <ul>
          {fruits.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
