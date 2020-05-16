import React from "react";
import StarRatings from 'react-star-ratings'


const Review = ({review}) => {
  return (
    <div>
      <h4 style={{marginBottom: "8px", marginTop: "0px"}}>{review.title}</h4>
      <div style={{display: "inline-block" }}>
        <StarRatings
        starDimension='18px'
        starSpacing='0px'
        rating={review.stars}
        starRatedColor='yellow'
        numberOfStars={5}
        />
        {review.stars > 2 ? <p>would recommend</p> : <p>Would not recommend</p>}
      </div>
      <p style={{fontSize: "12px", marginTop: "4px"}}>{review.user} - 4 days ago, Verified purchaser</p>
      <div style={{marginTop: "16px"}}></div>
      <p>{review.reviewText}</p>
    </div>

  )
}

export default Review;