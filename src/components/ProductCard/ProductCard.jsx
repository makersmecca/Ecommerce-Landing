import "./ProductCard.scss";
import { useCart } from "../../context/CartContext";
const ProductCard = ({
  id,
  image = "",
  title = "",
  price = "",
  originalPrice = "",
  badge = "",
  discount = "",
  currency = "$",
  rating = 0,
  category = "",
}) => {
  const renderStars = () => {
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

  const { cart, dispatch } = useCart();
  const quantityCount = cart.find((i) => i.id === id)?.qty ?? 0;

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        {badge && <span className="product-card__badge">{badge}</span>}

        <img src={image} alt={title} />
      </div>
      {discount && <span className="discount">{discount}% off</span>}

      <div className={`add-to-cart ${quantityCount === 0 && "noCount"}`}>
        {quantityCount > 0 && (
          <button
            className="remove-btn"
            onClick={() => dispatch({ type: "REMOVE", id })}
          >
            <img src="/icons/minus.svg" height={40} width={20} />
          </button>
        )}
        {quantityCount > 0 && (
          <span className="quantity-count">{quantityCount}</span>
        )}
        <button
          className="add-btn"
          onClick={() =>
            dispatch({
              type: "ADD",
              item: {
                id,
                title,
                price,
                originalPrice,
                category,
                image,
                discount,
              },
            })
          }
        >
          <img src="/icons/plus.svg" height={30} width={30} />
        </button>
      </div>

      <div className="product-card__info">
        <div className="product-card__details">
          <h3 className="product-card__title" title={title}>
            {title}
          </h3>

          <div className="product-card__price">
            <span className="price">
              {currency}
              {price}
            </span>
            {originalPrice && (
              <span className="original-price">
                {currency}
                {originalPrice}
              </span>
            )}
            <div className="product-rating">
              <span className="rating">
                <span>{rating}/5</span>
                {renderStars()}
              </span>
            </div>
          </div>
        </div>

        {/* <div className="add-to-cart">
          <button>
            <img src="/icons/plus.svg" height={24} width={24} />
            Add
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
