import React, { Component } from "react";
import moviesData from "../../../../Common/moviesData";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import "./left.css";

class Left extends Component {
  render() {
    return (
      <div className="left-div">
        <ImageList sx={{ width: 1 }}>
          <ImageListItem key="Subheader" cols={4}></ImageListItem>
          {moviesData.map((item) => (
            <ImageListItem key={item.id}>
              <div className="image-div">
                <a href="">
                  <img
                    className="image-tag"
                    src={`${item.poster_url}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </a>
              </div>
              <ImageListItemBar
                className="image-bar"
                title={item.title}
                subtitle={item.release_date}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
}
export default Left;
