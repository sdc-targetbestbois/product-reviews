import React from "react";
import StarRatings from 'react-star-ratings'


const Review = ({review}) => {
  return (
    <div>
      <p>{review.title}</p>
      <p>{review.user}</p>
      <StarRatings
        starDimenstion='4px'
        rating={review.stars}
        starRatedColor='yellow'
        numberOfStars={5}
      />
      <p>{review.reviewText}</p>
    </div>

  )
}

export default Review;