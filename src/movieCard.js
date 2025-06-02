import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "The movie is about supernaturalt powers of heros.And how they saved world",
      price: 199,
      ratings: 8.0,
      stars: 0,
    };
  }
  addStar = () => {
    // method 1
    this.setState((preState) => {
      if (preState.stars < 5) {
        return {
          stars: preState.stars + 0.5,
        };
      }
    });
    // method 2
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });
  };
  decreaseStar = () => {
    this.setState((preState) => {
      if (preState.stars > 0) {
        return {
          stars: preState.stars - 0.5,
        };
      }
    });
  };

  render() {
    const { title, plot, price, ratings, stars } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="https://cps-static.rovicorp.com/2/Open/Disney/Program/8905127/_derived_jpg_q90_584x800_m0/Marvels_The_Avengers_PA_4x3_38_1593613918446_3.jpg"
              alt="movie-poster"
            />
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
                  onClick={this.decreaseStar}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                  alt="star"
                />
                <span>{stars}</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917179.png"
                  alt="plus"
                  onClick={this.addStar}
                />
              </div>
              <div className="buttons">
                <button className="favourite">Favourite</button>
                <button className="cart">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
