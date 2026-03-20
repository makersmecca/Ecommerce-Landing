import "./ProductCard.scss";

const ProductCard = ({
  image = "",
  title = "",
  price = "",
  originalPrice = "",
  badge = "",
  discount = "",
  currency = "$",
}) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        {badge && <span className="product-card__badge">{badge}</span>}

        <img src={image} alt={title} />
      </div>

      <div className="product-card__info">
        <h3 className="product-card__title">{title}</h3>

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
          {discount && <span className="discount">{discount}% off</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
