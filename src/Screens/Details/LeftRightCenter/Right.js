import React, { Component } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default class Right extends Component {
  render() {
    return (
      <div>
        <h3>Rate this movie:</h3>
        <div>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
          <StarBorderIcon></StarBorderIcon>
        </div>
        <div>
          <h3>Artists:</h3>
          <Card sx={{ maxWidth: 140 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
          </Card>
        </div>
      </div>
    );
  }
}
