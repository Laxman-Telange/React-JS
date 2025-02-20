import React, { Component } from "react";
import { MovieCard } from "./MovieCards";
import "./MoviePannel.css";
import { data } from "./movie-data";

export class MoviePanel extends Component {
  render() {
    return (
      <div className="movie-panel">
        {data.map((item) => item.id && <MovieCard key={item.id} item={item} />)}
      </div>
    );
  }
}
