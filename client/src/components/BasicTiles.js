import React, { Component } from "react";
import tmdb from "../apis/tmdb";
import TilesList from "./TilesList";

class BasicTiles extends Component {
  state = { movie: [] };

  componentDidMount() {
    const movies = async () => {
      await tmdb
        .get("/discover/movie?")
        .then(res => this.setState({ movie: res.data.results }))
        .catch(error => console.log(error));
    };
    movies();
  }
  componentDidUpdate() {
    console.log(this.state.movie);
  }
  render() {
    return (
      <div>
<<<<<<< HEAD
        <div>Nav</div>
        <TilesList movie={this.state} />
=======
        <div>List</div>
>>>>>>> save0
      </div>
    );
  }
}

export default BasicTiles;
