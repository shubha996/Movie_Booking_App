import React, { Component } from "react";
import "./left.css";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";

export default class Left extends Component {
  render() {
    return (
      <div className="left-component-div">
        <div className="left-component-btn-div">
          <Button
            startIcon={<ArrowBackIosNewIcon />}
          >
            <Typography>Back to Home</Typography>
          </Button>
        </div>
        <div className="movie-poster">
          <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg" alt=""/>
        </div>
      </div>
    );
  }
}
