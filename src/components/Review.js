import React from "react";
import StarRatings from 'react-star-ratings'
import css from "../styles/review.css"


const Review = ({review}) => {
  return (
    <div>
      <h4 className="reviewTitle">{review.title}</h4>
      <div className="recommendBar">
        <div className="stars">
          <StarRatings
          starDimension='18px'
          starSpacing='0px'
          rating={review.stars}
          starRatedColor='yellow'
          numberOfStars={5}
          />
        </div>

        <div>
          {review.stars > 2 ? <span>| Would recommend</span> : <span>| Would not recommend</span>}
        </div>

      </div>
      <p className="userLine">{review.user} - {Math.floor(Math.random() * (31 - 1) + 1)} days ago, Verified purchaser</p>
      <p>{review.reviewText}</p>
    </div>

  )
}

export default Review;