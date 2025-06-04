import { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#1f2937" /* dark gray */,
          padding: "10px 20px",
          color: "white",
        }}>
        <div className="title">
          <h2>Movie-flex</h2>
        </div>
        <div className="nav-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6131/6131162.png"
            alt="image-icon"
          />
          <span>0</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
