import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2937;
  padding: 10px 20px;
  color: white;
  font-family: "Segoe UI", sans-serif;
`;

const Title = styled.div`
  h2 {
    margin: 0;
    font-size: 24px;
    color: ${(props) => props.color};

    &:hover {
      color: red;
    }
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
  }
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Title color="#fbbf24" show={true}>
          <h2>Movie-flex</h2>
        </Title>
        <div className="nav-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/128/6131/6131162.png"
            alt="image-icon"
          />
          <span>0</span>
        </div>
      </Nav>
    );
  }
}

export default Navbar;
