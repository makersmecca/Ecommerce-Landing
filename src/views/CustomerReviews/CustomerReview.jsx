import { useRef, useEffect } from "react";
import "./CustomerReviews.scss";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import customerReviews from "../../assets/CustomerReviews";
const CustomerReviews = ({ scrollData }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir) =>
    ref.current.scrollBy({ left: dir * 320, behavior: "smooth" });

  useEffect(() => {
    ref.current.scrollBy(scrollData);
  }, [scrollData]);

  return (
    <div className="reviews-wrapper" ref={ref}>
      {customerReviews.map((review) => (
        <ReviewCard
          customerName={`${review?.firstName} ${review?.lastName}`}
          review={review?.review}
          rating={review?.rating}
        />
      ))}
    </div>
  );
};
export default CustomerReviews;
