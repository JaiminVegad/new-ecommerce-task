import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../feature/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 && <p>Cart is empty</p>}

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {cartItems.length > 0 && (
        <>
          <h3>Total: ₹ {total}</h3>

          {/* ✅ Clear Cart */}
          <button style={styles.clearBtn} onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  clearBtn: {
    background: "#000",
    color: "#fff",
    padding: "8px 15px",
    border: "none",
    cursor: "pointer",
    marginTop: 10,
  },
};

export default Cart;
