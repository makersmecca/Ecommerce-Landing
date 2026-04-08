import "./CartModal.scss";
import { useCart } from "../../context/CartContext";
import CustomModal from "../../components/CustomModal/CustomModal";
const CartPage = ({ isOpen, onClose }) => {
  const { cart, dispatch } = useCart();

  const renderCartContents = () => {
    return (
      <div className="cart-modal-content">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-details">
              <div className="image-section">
                <img src={item.image} height={80} width={80} />
              </div>
              <div className="details-section">
                <div className="item-name">{item.title}</div>
              </div>
              <div className="update-cart-section">
                <div
                  className={`add-to-cart ${item.qty === 0 && "noCount"}`}
                >
                  {item.qty > 0 && (
                    <button
                      className="remove-btn"
                      onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                    >
                      <img src="/icons/minus.svg" height={40} width={20} />
                    </button>
                  )}
                  {item.qty > 0 && (
                    <span className="quantity-count">{item.qty}</span>
                  )}
                  <button
                    className="add-btn"
                    onClick={() =>
                      dispatch({
                        type: "ADD",
                        item: { ...item },
                      })
                    }
                  >
                    <img src="/icons/plus.svg" height={30} width={30} />
                  </button>
                </div>
                <div className="item-qty">{item.qty}</div>
                <div className="item-price">{item.price}</div>
                <div className="item-original-price">{item.originalPrice}</div>
                <div className="item-discount">{item.discount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        heading={
          <>
            <div className="cart-modal-header">
              <img src="/cart.svg" height={24} width={24} />
              <span>Your cart</span>
            </div>
          </>
        }
        body={<>{renderCartContents()}</>}
      />
    </>
  );
};
export default CartPage;
