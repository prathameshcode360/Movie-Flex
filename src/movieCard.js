import React from "react";

class MovieCard extends React.Component {
  render() {
    const { title, poster, plot, price, ratings, stars, fav, cart } =
      this.props.movie;
    const {
      handleIncrease,
      handleDecrease,
      movie,
      handleCart,
      handleFavourite,
    } = this.props;

    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img src={poster} alt="movie-poster" />
          </div>
          <div className="right">
            <h4 className="title">{title}</h4>
            <p className="plot">{plot}</p>
            <h5 className="price">Price:{price}Rs</h5>
            <div className="footer">
              <div className="ratings">{ratings}</div>
              <div className="stars-disc">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917160.png"
                  alt="minus"
                  onClick={() => handleDecrease(movie)}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                  alt="star"
                />
                <span>{stars}</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917179.png"
                  alt="plus"
                  onClick={() => handleIncrease(movie)}
                />
              </div>
              <div className="buttons">
                <button
                  className={fav ? "un-favourite" : "favourite"}
                  onClick={() => handleFavourite(movie)}>
                  {fav ? "Unfavourite" : "Favourite"}
                </button>
                <button
                  className={cart ? "remove-cart" : "cart"}
                  onClick={() => handleCart(movie)}>
                  {cart ? "Remove" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
