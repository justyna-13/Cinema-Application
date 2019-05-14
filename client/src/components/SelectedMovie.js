import "./SelectedMovie.css";
import "../fontello/css/fontello.css";
import tmdb from "../apis/tmdb";
import React from "react";

class SelectedMovie extends React.Component {
  state = {
    id: null,
    movie: null
  };

  componentDidMount() {
    console.log(this.props.match.params.movie_id);
    let id = this.props.match.params.movie_id;
    console.log(id);

    const movies = async () => {
      await tmdb
        .get(`/movie/${id}`)
        .then(res =>
          this.setState({
            id: id,
            movie: res.data
          })
        )
        .catch(error => console.log(error));
    };
    movies();
  }

  render() {
    if (this.state.movie) {
      const imageUrl = `https://image.tmdb.org/t/p/w500/${
        this.state.movie.poster_path
      }`;
      return (
        <div className="container">
          <div
            className="image"
            style={{ backgroundImage: "url(" + imageUrl + ")" }}
          >
            <div className="rating">{this.state.movie.vote_average}</div>
          </div>
          <div className="details">
            <h1 className="title">{this.state.movie.title}</h1>
            <h3 className="subtitle">{this.state.movie.genres[0].name}</h3>
            <p className="description">{this.state.movie.overview}</p>
          </div>
          <nav className="back">
            <i className="icon-down-open-big" />
          </nav>
        </div>
      );
    } else return null;
  }
}

export default SelectedMovie;
