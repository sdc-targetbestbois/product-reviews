import React, { Component } from "react";
import Header from "./Header.js"
import ReviewList from "./ReviewList.js"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World check"
    };
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
