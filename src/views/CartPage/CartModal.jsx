import "./CartModal.scss";
import { useCart } from "../../context/CartContext";
import CustomModal from "../../components/CustomModal/CustomModal";
import { useEffect, useState } from "react";
const CartPage = ({ isOpen, onClose }) => {
  const { cart, dispatch, total } = useCart();

  const renderCartContents = () => {
    return (
      <div className="cart-modal-content">
        {cart.length === 0 && (
          <div className="no-cart-item">No items in cart</div>
        )}
        <div className="cart-items-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <div className="image-section">
                  <div className="item-discount">{item.discount}% Off</div>
                  <img src={item.image} />
                </div>
                <div className="details-section">
                  <div className="item-name">{item.title}</div>
                </div>
                <div className="update-cart-section">
                  <div className={`add-to-cart ${item.qty === 0 && "noCount"}`}>
                    {item.qty > 0 && (
                      <button
                        className="remove-btn"
                        onClick={() =>
                          dispatch({ type: "REMOVE", id: item.id })
                        }
                      >
                        <img src="/icons/minus.svg" />
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
                      <img src="/icons/plus.svg" />
                    </button>
                  </div>
                  <div className="price-section">
                    <div className="item-original-price">
                      ${item.originalPrice}
                    </div>
                    <div className="item-price">${item.price}</div>
                  </div>
                </div>
                <div className="delete-cart-section">
                  <button
                    className="delete-item-btn"
                    onClick={() => dispatch({ type: "DROP", id: item.id })}
                  >
                    <img src="/icons/delete-icon.svg" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="total-cost">
          <div>Total:</div>
          <div>${total}</div>
        </div>
      </div>
    );
  };

  const renderFooterContent = () => {
    return (
      <div className="cart-modal-footer">
        <button
          className={`checkout-btn ${total === 0 && "btn-disabled"}`}
          disabled={total === 0}
        >
          Checkout
        </button>
      </div>
    );
  };

  return (
    <>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        customClass="cart-modal"
        heading={
          <>
            <div className="cart-modal-header">
              <img src="/cart.svg" height={32} width={32} />
              <span>Your cart</span>
            </div>
          </>
        }
        body={renderCartContents()}
        footer={renderFooterContent()}
      />
    </>
  );
};
export default CartPage;
