import Cart from "../Cart/Cart";
import UserProfile from "../Login/UserProfile";
import Favourites from "../favourites/Favourites";
import "./MobileNavbar.scss";
const MobileNavbar = () => {
  return (
    <>
      <div className="mobile-navbar-container">
        <div className="navbar-items">
          <div className="search">
            <img src="/search.svg" height={25} width={25} />
          </div>
          <div className="cart">
            <Cart />
          </div>
          <div className="favourites">
            <Favourites />
          </div>
          <div className="userprofile">
            <UserProfile />
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileNavbar;
