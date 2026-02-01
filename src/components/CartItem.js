import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../feature/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div style={styles.row}>
      <h4>{item.title}</h4>

      <div style={styles.qtyBox}>
        <button onClick={() => dispatch(decrement(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increment(item.id))}>+</button>
      </div>

      <p>₹ {item.price * item.quantity}</p>

      {/* ✅ Remove Item */}
      <button
        style={styles.removeBtn}
        onClick={() => dispatch(removeItem(item.id))}
      >
        Remove
      </button>
    </div>
  );
};

const styles = {
  row: {
    borderBottom: "1px solid #ddd",
    padding: 10,
  },
  qtyBox: {
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  removeBtn: {
    marginTop: 5,
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default CartItem;
