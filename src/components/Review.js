import React from "react";
import StarRatings from 'react-star-ratings'
import css from "../styles/review.css"


const Review = ({review}) => {
  return (
    <div>
      <h4 className="reviewTitle">{review.title}</h4>
      <div className="stars">
        <StarRatings
        starDimension='18px'
        starSpacing='0px'
        rating={review.stars}
        starRatedColor='yellow'
        numberOfStars={5}
        />
        {review.stars > 2 ? <p>would recommend</p> : <p>Would not recommend</p>}
      </div>
      <p className="userLine">{review.user} - 4 days ago, Verified purchaser</p>
      <p>{review.reviewText}</p>
    </div>

  )
}

export default Review;