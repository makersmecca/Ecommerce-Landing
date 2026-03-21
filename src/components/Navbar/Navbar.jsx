import "./Navbar.scss";
import Cart from "../Cart/Cart";
import UserProfile from "../Login/UserProfile";
import Favourites from "../favourites/Favourites";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="ecom-logo">
        <a href="/">ECOMM.COM</a>
      </div>
      <div className="navItems">
        <ul>
          <li className="shop-dropdown">Shop</li>
          <li className="">On Sale</li>
          <li>New Arrivals</li>
        </ul>
      </div>
      <div className="search-section">
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
      </div>
      <div className="user-section">
        <Cart />
        <UserProfile />
        <Favourites />
      </div>
    </div>
  );
};
export default Navbar;
