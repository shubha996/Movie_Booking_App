import React, { Component } from "react";
import "./details.css";
import Header from "../../Common/Header/Header";
import Left from "./LeftRightCenter/Left";
import Center from "./LeftRightCenter/Center";
import Right from "./LeftRightCenter/Right";

export default class Details extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="body-div">
          <div className="left-div">
            <Left />
          </div>
          <div className="center-div">
            <Center />
          </div>
          <div className="right-div">
            <Right />
          </div>
        </div>
      </div>
    );
  }
}
