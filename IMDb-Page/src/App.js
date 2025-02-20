import React, { Component } from "react";
import * as Components from "./components";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      showForm: false, // Control form visibility
    };
  }

  // Add movie to the list
  handleAddMovie = (movie) => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, movie],
      showForm: false, // Hide form after submission
    }));
  };

  // Toggle form visibility
  handleToggleForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm,
    }));
  };

  render() {
    const { movies, showForm } = this.state;
    return (
      <div className="pannel">
        {/* Pass toggle function to SearchBar */}
        <Components.Header onCreateMovie={this.handleToggleForm} />

        {/* Show Form when 'Create Movie' is clicked */}
        {showForm && <Components.Form onAddMovie={this.handleAddMovie} />}

        {/* Display Movie List */}
        {movies.length > 0 && (
          <div className="form-data">
            {movies.map((movie, index) => (
              <div key={index} className="movie-item">
                <img src={movie.image} alt={movie.title} width="100" />
                <div>
                  <h3>{movie.title}</h3>
                  <p>Year: {movie.year}</p>
                  <p>Duration: {movie.duration}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
