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
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }

  handleClickAll(e) {
    e.preventDefault();
    this.setState({currentReviews: this.state.allReviews})
  }
  handleClick1(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 1) {
        threeStarReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }
  handleClick2(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 2) {
        threeStarReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }
  handleClick3(e) {
    e.preventDefault();
    let threeStarReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 3) {
        threeStarReviews.push(current);
      }
    })
    this.setState({currentReviews: threeStarReviews});
  }
  handleClick4(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 4) {
        threeStarReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});;
  }
  handleClick5(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 5) {
        threeStarReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }


  componentDidMount() {
    Axios.get('/api/reviews')
    .then((response) => {
      this.setState({
        allReviews: response.data,
        currentReviews: response.data
      })
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

        {/*REVIEWS*/}

        <ReviewList reviews={this.state.currentReviews}/>
      </div>
    );
  }
}
