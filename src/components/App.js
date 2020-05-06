import React, { Component } from "react";
import Axios from "axios";
import Header from "./Header.js";
import ReviewList from "./ReviewList.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    Axios.get('/api/reviews')
    .then((response) => {
      this.setState({reviews: response.data}, () => {
        console.log("component did mount")
      })
    })
    .catch((error) => {
      console.log("error getting all users clientside:", error);
    })
  }

  render() {
    return (
      <div class="mainContainer">
        <Header />
        <ReviewList reviews={this.state.reviews}/>
      </div>
    );
  }
}
