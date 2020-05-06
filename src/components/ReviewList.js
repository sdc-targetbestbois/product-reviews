import React from "react";
import Review from "./Review.js"
import css from "../styles/review.css"


const ReviewList = ({reviews}) => {
  return (
    <div>
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