import React from "react";
import Review from "./Review.js"
import reviewCSS from "../styles/review.css"
import reviewListCSS from "../styles/reviewList.css"


const ReviewList = ({reviews}) => {
  return (
    <div class="reviewList">
      {
        reviews.map((current) => {
          return (
            <div class="review"><Review review={current}/></div>
          )
        })
      }
    </div>

  )
}

export default ReviewList;