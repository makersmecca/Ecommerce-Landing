import "./ReviewCard.scss";
const renderStars = (rating) => {
  const starCount = 5;
  return (
    <div className="rating-star-div">
      {Array.from({ length: starCount }, (_, index) => (
        <img
          key={index}
          src={
            index + 1 < rating
              ? "/icons/star-filled.svg"
              : "/icons/star-rating.svg"
          }
          height={18}
          width={18}
        />
      ))}
    </div>
  );
};
const ReviewCard = ({ customerName, review, rating }) => {
  return (
    <div className="review-card">
      <div className="customer-rating">
        <span className="rating">{renderStars(rating)}</span>
      </div>
      <div className="customer-name">{customerName}</div>
      <div className="customer-review">{review}</div>
    </div>
  );
};
export default ReviewCard;
