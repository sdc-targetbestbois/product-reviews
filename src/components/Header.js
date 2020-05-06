import React from 'react';
import css from "../styles/header.css";
import Stars from "./Stars.js"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReviews: [],
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick () {

  }

  render() {
    return (
      <div class="header">
          Guest Rating and Reviews
        <h1> 4.8 </h1>
        <Stars />
        <div>
          <button> Write a Review</button>
        </div>
          <div class="dropdown">
            <button class="dropbtn">Filter by</button>
              <div class="dropdown-content">
                <p>All ratings</p>
                <p>5 stars</p>
                <p>4 stars</p>
                <p>3 stars</p>
                <p>2 stars</p>
                <p>1 stars</p>
              </div>
          </div>

      </div>
    )
  }
}

export default Header;