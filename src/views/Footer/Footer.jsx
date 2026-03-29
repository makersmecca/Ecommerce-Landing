import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="branding">
        <a href="/" className="brand-name">
          <img src="/Logo.png" className="brand-logo-img" alt="brand logo" />
          VERITY.COM
        </a>
        <div className="brand-address">
          <img src="/icons/location-pin.svg" alt="" className="address-pin" />
          <span className="address-text">
            742 Evergreen Terrace, Suite 3B Springfield, IL 62704, USA
          </span>
        </div>
        <div className="social-media-container">
          <div className="social-btn">
            <img src="/social-icons/igIcon.svg" height={25} width={25} />
          </div>
          <div className="social-btn">
            <img src="/social-icons/xIcon.svg" height={25} width={25} />
          </div>
          <div className="social-btn">
            <img src="/social-icons/fbIcon.svg" height={25} width={25} />
          </div>
        </div>
      </div>

      <div className="hyperlink-columns">
        <div className="first-column">
          <div className="footer-column">
            <div className="row-header">COMPANY</div>
            <a href="#" className="row-links">
              About Us
            </a>
          </div>
          <div className="footer-column">
            <div className="row-header">HELP</div>
            <a href="#" className="row-links">
              Customer Support
            </a>
            <a href="#" className="row-links">
              Terms & conditions
            </a>
            <a href="#" className="row-links">
              Privacy policy
            </a>
          </div>
        </div>
        <div className="second-column">
          <div className="footer-column">
            <div className="row-header">FAQs</div>
            <a href="#" className="row-links">
              Account
            </a>
            <a href="#" className="row-links">
              Deliveries
            </a>
            <a href="#" className="row-links">
              Orders
            </a>
            <a href="#" className="row-links">
              Payments
            </a>
          </div>
          <div className="footer-column">
            <div className="row-header">CONTACT US</div>
            <a href="" className="row-links">
              Email
            </a>
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
