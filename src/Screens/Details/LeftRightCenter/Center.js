import React, { Component } from "react";
import moviesData from "../../../Common/moviesData";
import { Typography } from "@mui/material";

export default class Center extends Component {
  render() {
    return (
      <div>
        {/* {moviesData.map((item) => (
            <h2>{item.title}</h2>
          ))} */}
        <h2>Inception</h2>
        <div>
          <Typography>Genre: </Typography>
          <Typography>Duration: </Typography>
          <Typography>Release Date: </Typography>
          <Typography>Rating: </Typography>
          <br />
          <Typography>Plot:</Typography>
          <br />
        </div>
        <div>
          <Typography>Trailer:</Typography>
          <iframe
            width="720"
            height="320"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    );
  }
}
