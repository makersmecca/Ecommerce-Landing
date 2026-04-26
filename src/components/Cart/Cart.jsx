import "./Cart.scss";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartPage from "../../views/CartPage/CartModal";

const Cart = () => {
  const { cart } = useCart();

  const [cartCount, setCartCount] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    setCartCount(cart.reduce((acc, item) => acc + item.qty, 0));
  }, [cart]);

  return (
    <>
      <CartPage isOpen={showCartModal} onClose={() => setShowCartModal(false)} />
      <div className="cart-section" onClick={() => setShowCartModal(true)}>
        <div className="cart-count">{cartCount}</div>
        <img src="/cart.svg" />
      </div>
    </>
  );
};
export default Cart;
