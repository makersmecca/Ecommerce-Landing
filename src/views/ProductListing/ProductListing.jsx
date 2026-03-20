import ProductCard from "../../components/ProductCard/ProductCard";
import { useRef, useEffect } from "react";
import "./ProductListing.scss";
const ProductListing = ({ Products }) => {
  const listingRef = useRef(null);

  useEffect(() => {
    const el = listingRef.current;
    if (!el) return;
    const onWheel = (e) => {
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir) =>
    listingRef.current.scrollBy({ left: dir * 530, behavior: "smooth" });
  return (
    <>
      <div className="products-listing-wrapper">
        <button className="scroll-btn left" onClick={() => scroll(-1)}>
          <img src="/icons/rightArrow.svg" />
        </button>
        <div className="products-listing" ref={listingRef}>
          {Products.productsList.map((product) => (
            <div key={product.productId} className="listing-card">
              <ProductCard
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
              />
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll(1)}>
          <img src="/icons/rightArrow.svg" />
        </button>
      </div>
      <div className="CTA-section">
        <button className="cta-btn">View All</button>
      </div>
    </>
  );
};
export default ProductListing;
