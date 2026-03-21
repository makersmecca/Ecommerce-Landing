import Cart from "../Cart/Cart";
import UserProfile from "../Login/UserProfile";
import Favourites from "../favourites/Favourites";
import "./MobileNavbar.scss";
const MobileNavbar = () => {
  return (
    <>
      <div className="mobile-navbar-container">
        {/* <div className="search-section">
          <img
            className="search-icon"
            src="/search.svg"
            alt=""
            height={24}
            width={24}
          />
          <input
            id="seach-input"
            className="search-input"
            type="text"
            placeholder="Search for products..."
          />
        </div> */}
        <div className="user-section">
          {/* <Cart />
          <UserProfile />
          <Favourites /> */}
        </div>
      </div>
    </>
  );
};
export default MobileNavbar;
