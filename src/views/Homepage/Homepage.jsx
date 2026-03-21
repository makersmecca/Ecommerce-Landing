import { useState, useMemo, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MobileNavbar from "../../components/MobileNavbar/MobileNavbar";
import ProductListing from "../ProductListing/ProductListing";
import Hamburger from "../../components/Hamburger/Hamburger";
import { Products } from "../../assets/Products";
import "./Homepage.scss";
const Homepage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [mobileHeaderFixed, setMobileHeaderFixed] = useState(false);
  const headerSectionRef = useRef(null);
  const popularSectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const headerHeight = headerSectionRef.current?.offsetHeight ?? 0;
      setMobileHeaderFixed(window.scrollY >= headerHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

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
      {isMobile && <MobileNavbar />}
      <div className="header-section" ref={headerSectionRef}>
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
      {isMobile && (
        <div
          className={`mobile-header-section${mobileHeaderFixed ? " mobile-header-fixed" : ""}`}
        >
          <div className="brand-name">ECOMM.COM</div>
          <Hamburger />
          {/* <div className="social-media-container">
            <div className="social-btn">
              <img src="/social-icons/igIcon.svg" height={25} width={25} />
            </div>
            <div className="social-btn">
              <img src="/social-icons/xIcon.svg" height={25} width={25} />
            </div>
            <div className="social-btn">
              <img src="/social-icons/fbIcon.svg" height={25} width={25} />
            </div>
          </div> */}
        </div>
      )}
      {isMobile && mobileHeaderFixed && <div style={{ height: 44 }} />}
      {!isMobile && (
        <div className="navbar-section">
          <Navbar />
        </div>
      )}
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
            <button
              onClick={() => {
                const y =
                  popularSectionRef.current?.getBoundingClientRect().top +
                  window.scrollY -
                  (isMobile ? 80 : 0);
                window.scrollTo({ top: y, behavior: "smooth" });
              }}
            >
              Shop now
            </button>
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
      <div className="products-section" ref={popularSectionRef}>
        <div className="section-title">Popular</div>
        <ProductListing Products={popularProducts} />
        <div className="section-break"></div>
        <div className="section-title">New Launches</div>
        <ProductListing Products={newLaunches} />
        <div className="section-break"></div>
      </div>
      <div className="categories-section"></div>
    </div>
  );
};
export default Homepage;
