import React, { Component } from "react";
import Axios from "axios";
import StarRatings from 'react-star-ratings'
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


  //TODO Refactor into one click handler
  handleClickAll(e) {
    e.preventDefault();
    this.setState({currentReviews: this.state.allReviews})
  }
  handleClick1(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 1) {
        matchingReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }
  handleClick2(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 2) {
        matchingReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }
  handleClick3(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 3) {
        matchingReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }
  handleClick4(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 4) {
        matchingReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});;
  }
  handleClick5(e) {
    e.preventDefault();
    let matchingReviews = [];
    this.state.allReviews.forEach((current) => {
      if (current.stars === 5) {
        matchingReviews.push(current);
      }
    })
    this.setState({currentReviews: matchingReviews});
  }


  componentDidMount() {
    Axios.get('http://localhost:8080/api/reviews')
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
    //* code that calculates average*//
    let numberOfReviews = 0;
    let aggregateOfStars = 0;
    this.state.allReviews.forEach((currentValue) => {
            aggregateOfStars += currentValue.stars;
            numberOfReviews += 1;
          })
    let reviewAvg = aggregateOfStars / numberOfReviews;
    return (
      <div className="mainContainer">
        {/* HEADER HERE */}

        <div className="header">
            Guest Rating and Reviews
            <div>
              <h1>{reviewAvg}</h1>
            <StarRatings
              starDimension='18px'
              starSpacing='2px'
              rating={reviewAvg || 0}
              starRatedColor='yellow'
              numberOfStars={5}
            />
            <p>{numberOfReviews} star ratings</p>
            {/* DROPDOWN HERE */}
            </div>
            <div className="dropdown">
              <button className="dropbtn">Filter by</button>
                <div className="dropdown-content">
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
