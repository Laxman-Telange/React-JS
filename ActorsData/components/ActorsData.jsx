import React from "react";
import "./ActorsData.css";
import { indianActors } from "./ActorBio"; // Import actor data

export class ActorsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedActor: null, // Track selected actor
    };
  }

  // Handle card click to update selected actor
  handleCardClick = (actor) => {
    this.setState({ selectedActor: actor }); //this.setState use for call state
  };

  // Render actor cards
  renderActorCards = () => {
    return (
      <div className="actor-cards">
        {indianActors.map((actor, index) => (
          <div
            className="actor-card"
            key={index}
            onClick={() => this.handleCardClick(actor)}
          >
            <img src={actor.image} alt={actor.name} className="actor-image" />

            <h3 className="name">
              {actor.name} <button>More Details</button>
            </h3>
          </div>
        ))}
      </div>
    );
  };
  renderMovies = () => {
    {
      indianActors.map((actor, id) => {
        <div
          className="actor-card"
          key={id}
          onClick={() => this.handleCardClick(actor)}
        >
          <img src={actor.image} alt={actor.name} className="actor-image" />
          <h2>Title:{actor.rating}</h2>;
        </div>;
      });
    }
  };
  // Render actor details if selected
  renderMoviesForSelectedActor = () => {
    const { selectedActor } = this.state;
    if (!selectedActor) return null;

    const actorMovies = selectedActor.movies; // Use movies directly from selected actor

    return (
      <div className="movie-list">
        {actorMovies.length > 0 ? (
          actorMovies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <div className="actor-image">
                <img src={movie.banner} />
              </div>
              <div className="movie-details">
                <h3>{movie.title}</h3>
                <p>
                  <strong>Year:</strong> {movie.year}
                </p>
                <p>
                  <strong>Rating:</strong> {movie.rating}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found for this actor.</p>
        )}
      </div>
    );
  };

  render() {
    return (
      <div className="actors-container">
        <h1 className="title">Top 10 Indian Actors</h1>
        <p className="">{this.renderActorCards()}</p> {/* Render actor cards */}
        <p className="actors-cards"></p>
        {this.renderMovies()}
        {this.renderMoviesForSelectedActor()}
      </div>
    );
  }
}
