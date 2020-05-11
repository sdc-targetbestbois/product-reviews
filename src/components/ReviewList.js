import React from "react";
import Review from "./Review.js"
import reviewCSS from "../styles/review.css"
import reviewListCSS from "../styles/reviewList.css"


const ReviewList = ({reviews}) => {
  return (
    <div className="reviewList">
      {
        reviews.map((current, index) => {
          return (
            <div key={index} className="review"><Review review={current}/></div>
          )
        })
      }
    </div>

  )
}

export default ReviewList;