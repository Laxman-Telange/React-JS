import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "",
      year: "",
      duration: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddMovie(this.state); // Pass data to App.js
    this.setState({ image: "", title: "", year: "", duration: "" }); // Reset form after submission
  };

  render() {
    const { image, title, year, duration } = this.state;
    return (
      <div className="form-container">
        <h1>Add Movie</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="image"
            value={image}
            placeholder="Image URL"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="year"
            value={year}
            placeholder="Year"
            onChange={this.handleChange}
            required
          />
          <input
            type="text"
            name="duration"
            value={duration}
            placeholder="Duration"
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    );
  }
}
