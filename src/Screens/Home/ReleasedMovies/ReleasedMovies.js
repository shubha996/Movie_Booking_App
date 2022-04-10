import React, { Component } from "react";
import './releasedMovies.css';
import Left from "./LeftAndRight/Left";
import Right from "./LeftAndRight/Right";

export default class ReleasedMovies extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="left">
          <Left />
        </div>
        <div className="right">
          <Right />
        </div>
      </div>
    );
  }
}
