import { Component } from "react";
import MovieList from "./movieList";
import Navbar from "./navbar";
import movies from "./moviesData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
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
    let { movies, cartCount } = this.state;
    const movieId = movies.indexOf(movie);
    movies[movieId].cart = !movies[movieId].cart;
    if (movies[movieId].cart) {
      cartCount += 1;
    } else {
      cartCount -= 1;
    }

    this.setState({
      movies: movies,
      cartCount: cartCount,
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
    const { movies, cartCount } = this.state;
    return (
      <>
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          increaseStar={this.increaseStar}
          decreaseStar={this.decreaseStar}
          handleCart={this.handleCart}
          handleFavourite={this.handleFavourite}
        />
      </>
    );
  }
}

export default App;
