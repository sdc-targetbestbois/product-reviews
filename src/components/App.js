import React, { Component } from "react";
import Axios from "axios";
import ReviewList from "./ReviewList.js";
import css from "../styles/header.css";
import Stars from "./Stars.js"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      currentReviews: [],
    };
  }

  handleClickAll(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }
  handleClick1(e) {
    e.preventDefault();
    console.log('The link was clicked 1.');
  }
  handleClick2(e) {
    e.preventDefault();
    console.log('The link was clicked 2.');
  }
  handleClick3(e) {
    e.preventDefault();
    console.log('The link was clicked 3.');
  }
  handleClick4(e) {
    e.preventDefault();
    console.log('The link was clicked 4.');
  }
  handleClick5(e) {
    e.preventDefault();
    console.log('The link was clicked 5.');
  }


  componentDidMount() {
    Axios.get('/api/reviews')
    .then((response) => {
      this.setState({allReviews: response.data})
    })
    .catch((error) => {
      console.log("error getting all users clientside:", error);
    })
  }

  render() {
    return (
      <div class="mainContainer">

        {/* HEADER HERE */}
        <div class="header">
            Guest Rating and Reviews
          <h1> 4.8 </h1>
          <Stars />
            <div class="dropdown">
              <button class="dropbtn">Filter by</button>
                <div class="dropdown-content">
                  <a href="#" onClick={this.handleClickAll}> All Reviews</a>
                  <a href="#" onClick={this.handleClick1}> 1 Stars</a>
                  <a href="#" onClick={this.handleClick2}> 2 Stars</a>
                  <a href="#" onClick={this.handleClick3}> 3 Stars</a>
                  <a href="#" onClick={this.handleClick4}> 4 Stars</a>
                  <a href="#" onClick={this.handleClick5}> 5 Stars</a>
                </div>
            </div>
        </div>
        <ReviewList reviews={this.state.allReviews}/>
      </div>
    );
  }
}
