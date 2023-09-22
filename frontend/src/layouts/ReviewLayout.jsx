import React, { useState } from "react";
import StarRating from "../components/StarRating";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState("");

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const formatDateTime = (dateTime) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateTime).toLocaleDateString(undefined, options);
  };

  const handleSubmitReview = () => {
    const newReview = { rating, comment, date: formatDateTime(new Date()) };
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment("");
  };

  return (
    <div className="review-container">
      <h2>Ratings</h2>
      <StarRating
        rating={rating}
        hoverRating={hoverRating}
        onRatingClick={handleRatingClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="comment">
        <textarea
          rows="4"
          cols="50"
          placeholder="Enter your review here..."
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button onClick={handleSubmitReview}>Submit Review</button>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p>Date: {review.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
