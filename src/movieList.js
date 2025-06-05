import { Component } from "react";
import MovieCard from "./movieCard";

class MovieList extends Component {
  render() {
    const { movies, handleCart, handleFavourite, decreaseStar, increaseStar } =
      this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            movie={movie}
            handleIncrease={increaseStar}
            handleDecrease={decreaseStar}
            handleCart={handleCart}
            handleFavourite={handleFavourite}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
