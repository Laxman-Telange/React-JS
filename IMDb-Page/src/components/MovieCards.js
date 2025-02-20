import React, { Component } from "react";
import "./MovieCard.css";

export class MovieCard extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="movie-card">
        <div className="container">
          <div className="movie-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="movie-details">
            <h3>{item.title}</h3>
            <p>{item.year}</p>
            <p>{item.Duration}</p>
          </div>
        </div>
      </div>
    );
  }
}
