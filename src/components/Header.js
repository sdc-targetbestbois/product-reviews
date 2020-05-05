import React from 'react';
import css from "../styles/header.css";
import Stars from "./Stars.js"

const Header = (props) => {
  return (
    <div class="header">
      Guest Rating and Reviews
    <h1> 4.7 </h1>
    <Stars />
    <div>
      <button> Write a Review</button>
    </div>
      <div class="dropdown">
        <button class="dropbtn">Filter by</button>
        <div></div>
          <div class="dropdown-content">
            <a href="#">All ratings</a>
            <a href="#">5 stars</a>
            <a href="#">4 stars</a>
            <a href="#">3 stars</a>
            <a href="#">2 stars</a>
            <a href="#">1 stars</a>

          </div>
      </div>

    </div>
  )
}

export default Header;