import Navbar from "../../components/Navbar/Navbar";
import { Products } from "../../assets/Products";
import "./Homepage.scss";
import { useState, useMemo } from "react";
import ProductListing from "../ProductListing/ProductListing";
const Homepage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const popularProducts = useMemo(
    () => ({
      productsList: Products.flatMap((cat) =>
        cat.productsList.filter((p) => p.badge !== "New!"),
      ).sort(() => Math.random() - 0.5),
    }),
    [],
  );
  const newLaunches = useMemo(
    () => ({
      productsList: Products.flatMap((cat) =>
        cat.productsList.filter((p) => p.badge === "New!"),
      ).sort(() => Math.random() - 0.5),
    }),
    [],
  );
  return (
    <div className="homepage-container">
      <div className="header-section">
        {showHeader && (
          <div className="header-top">
            <div className="social-media-container">
              <div className="social-btn">
                <img src="/social-icons/igIcon.svg" />
              </div>
              <div className="social-btn">
                <img src="/social-icons/xIcon.svg" height={25} width={25} />
              </div>
              <div className="social-btn">
                <img src="/social-icons/fbIcon.svg" />
              </div>
            </div>
            <div className="info-container">
              Sign up and get 20% off to your first order.{"  "}
              <a href="#">Sign Up Now</a>
            </div>
            <div className="close-header">
              <button
                className="close-header-btn"
                onClick={() => setShowHeader(false)}
              >
                <img src="/icons/closeIcon.svg" height={18} width={18} />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="navbar-section">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="hero-img">
          <img src="/heroImg.png" alt="" />
        </div>
        <div className="hero-content">
          <div className="hero-heading">
            Style That Speaks <br />
            Before You Do
          </div>
          <div className="hero-subheading">
            Discover curated fashion for every moment. <br />
            Crafted for comfort, designed to stand out.
          </div>
          <div className="cta-btn">
            <button>Shop now</button>
          </div>
          <div className="hero-stats-sections">
            <div className="stat">
              <div className="stat-data">200+</div>
              <div className="stat-name">International Brands</div>
            </div>
            <div className="stat">
              <div className="stat-data">2,000+</div>
              <div className="stat-name">High Quality Products</div>
            </div>
            <div className="stat">
              <div className="stat-data">30,000+</div>
              <div className="stat-name">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
      <div className="products-section">
        <div className="section-title">Popular</div>
        <ProductListing Products={popularProducts} />
        <div className="section-break"></div>
        <div className="section-title">New Launches</div>
        <ProductListing Products={newLaunches} />
      </div>
    </div>
  );
};
export default Homepage;
