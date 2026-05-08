import "./NewsLetter.scss";
import { useState } from "react";
const NewsLetter = () => {
  const [emailInput, setEmailInput] = useState("");
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container-box">
        <div className="newsletter-text">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </div>
        <div className="newsletter-form">
          <div className="newsletter-email-input">
            <input
              placeholder="Enter your email address"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </div>
          <div className="newsletter-subscribe">
            <button>
              Subscribe{" "}
              <img src="icons/notification-bell.svg" height={20} width={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLetter;
