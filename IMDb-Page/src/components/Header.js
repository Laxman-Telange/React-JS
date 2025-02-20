import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "./SearchBar";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <h1 className="logo-title">IMDb</h1>
          </div>
        </div>

        <div className="menu-icon">
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", height: "25px" }}
          />
        </div>

        {/* Pass onCreateMovie to SearchBar */}
        <div className="search-box">
          <SearchBar onCreateMovie={this.props.onCreateMovie} />
        </div>
      </div>
    );
  }
}
