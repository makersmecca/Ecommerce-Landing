import ProductCard from "../../components/ProductCard/ProductCard";
import { useRef, useEffect, useState } from "react";
import "./ProductListing.scss";
const ProductListing = ({ Products }) => {
  const listingRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = listingRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = listingRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", updateScrollState);
    updateScrollState();
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const scroll = (dir) =>
    listingRef.current.scrollBy({ left: dir * 330, behavior: "smooth" });
  return (
    <>
      <div className="products-listing-wrapper">
        {canScrollLeft && (
          <button className="scroll-btn left" onClick={() => scroll(-1)}>
            <img src="/icons/rightArrow.svg" />
          </button>
        )}
        <div className="products-listing" ref={listingRef}>
          {Products.productsList.map((product) => (
            <div key={product.productId} className="listing-card">
              <ProductCard
                id={product.productId}
                title={product.productName}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                badge={product.badge || ""}
                discount={Math.floor(
                  (parseInt(product.price, 10) /
                    parseInt(product.originalPrice, 10)) *
                    100,
                ).toString()}
                rating={product.rating}
                category={product.category}
              />
            </div>
          ))}
        </div>
        {canScrollRight && (
          <button className="scroll-btn right" onClick={() => scroll(1)}>
            <img src="/icons/rightArrow.svg" />
          </button>
        )}
      </div>
      <div className="CTA-section">
        <button className="cta-btn">View All</button>
      </div>
    </>
  );
};
export default ProductListing;
