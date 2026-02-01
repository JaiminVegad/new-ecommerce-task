import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increment, decrement } from "../feature/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((i) => i.id === product.id),
  );

  return (
    <div style={styles.card}>
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>

      {cartItem ? (
        <div style={styles.qtyBox}>
          <button onClick={() => dispatch(decrement(product.id))}>-</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => dispatch(increment(product.id))}>+</button>
        </div>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: 15,
    width: 200,
    textAlign: "center",
  },
  qtyBox: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },
};

export default ProductCard;
