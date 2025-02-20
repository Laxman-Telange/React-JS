import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faBookmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <div className="dropdown">
          <button className="dropdown-btn">
            All <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>

        <input type="text" placeholder="Search IMDb" className="search-input" />

        <button className="search-btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <div className="sub-title">
          <h1>
            IMDb<span>Pro</span>
          </h1>
        </div>

        <div className="user-menu">
          <div className="watchlist">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
              <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            </div>

            {/* Toggle form visibility */}
            <span
              onClick={this.props.onCreateMovie}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            >
              Create Movie
            </span>
          </div>

          <div className="sign-in">Sign In</div>
          <div className="language-dropdown">
            EN <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
      </div>
    );
  }
}
