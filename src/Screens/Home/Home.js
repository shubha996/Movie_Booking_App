import React, { Component } from "react";
import "./home.css";
import Header from "../../Common/Header/Header";
import Heading from "./Heading";
import VerticalImageList from "./VerticalImageList";
import moviesData from "../../Common/moviesData";
import ReleasedMovies from "./ReleasedMovies/ReleasedMovies";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Heading/>
        <VerticalImageList/>
        <ReleasedMovies/>
      </div>
    );
  }
}
export default Home;
