import { Component } from "react";
import MovieCard from "./movieCard";
import movies from "./moviesData";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
    };
  }
  increaseStar = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars >= 5) {
      return;
    }
    movies[movieId].stars = movies[movieId].stars + 0.5;
    this.setState({
      movies: movies,
    });
  };

  decreaseStar = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    if (movies[movieId].stars <= 0) {
      return;
    }
    movies[movieId].stars = movies[movieId].stars - 0.5;
    console.log(movies[movieId].stars);
    this.setState({
      movies: movies,
    });
  };

  handleCart = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].cart = !movies[movieId].cart;
    this.setState({
      movies: movies,
    });
  };
  handleFavourite = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
    this.setState({
      movies: movies,
    });
  };
  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            handleIncrease={this.increaseStar}
            handleDecrease={this.decreaseStar}
            handleCart={this.handleCart}
            handleFavourite={this.handleFavourite}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
