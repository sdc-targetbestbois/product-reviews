import React, { Component } from "react";
import Axios from "axios";
import Header from "./Header.js";
import ReviewList from "./ReviewList.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
    };
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
        <Header />
        <ReviewList reviews={this.state.allReviews}/>
      </div>
    );
  }
}
