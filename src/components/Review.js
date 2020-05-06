import React from "react";


const Review = ({review}) => {
  return (
    <div>
      <p>{review.title}</p>
      <p>{review.stars}</p>
      <p>{review.reviewText}</p>
    </div>

  )
}

export default Review;