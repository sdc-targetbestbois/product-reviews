import React from "react";
import Review from "./Review.js"


const ReviewList = ({reviews}) => {
  console.log(reviews)
  return (
    <div>
      {
        reviews.map((current) => {
          return (
            <span>{current.reviewText}</span>
          )
        })
      }
    </div>

  )
}

export default ReviewList;