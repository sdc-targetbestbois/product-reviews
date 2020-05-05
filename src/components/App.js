import React, { Component } from "react";
import Axios from "axios";
import Header from "./Header.js";
import ReviewList from "./ReviewList.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    Axios.get('/api/reviews')
    .then((response) => {
      this.setState({users: response.data})
    })
    .catch((error) => {
      console.log("error getting all users clientside:", error);
    })
  }

  render() {
    return (
      <div class="mainContainer">
        <Header />
        <ReviewList />
      </div>
    );
  }
}
