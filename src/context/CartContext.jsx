import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const existing = state.find((item) => item.id === action.item.id);
      if (existing)
        return state.map((item) =>
          item.id === action?.item?.id ? { ...item, qty: item.qty + 1 } : item,
        );
      return [...state, { ...action.item, qty: 1 }];

    case "REMOVE":
      return state
        .map((item) =>
          item.id === action.id ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
