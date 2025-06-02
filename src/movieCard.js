import React from "react";

class MovieCard extends React.Component {
  render() {
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
            <h4 className="title">The Avengers</h4>
            <p className="plot">
              The movie is about supernaturalt powers of heros.And how they
              saved world
            </p>
            <h5 className="price">Price:199Rs</h5>
            <div className="footer">
              <div className="ratings">8.0</div>
              <div className="stars-disc">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917160.png"
                  alt="minus"
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/128/477/477406.png"
                  alt="star"
                />
                <span>0</span>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3917/3917179.png"
                  alt="plus"
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
