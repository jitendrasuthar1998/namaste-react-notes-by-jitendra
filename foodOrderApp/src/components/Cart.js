import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="font-bold text-2xl">Cart</h1>
        <button
          className="p-2 m-2 bg-black text-white rounded self-center mx-auto"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 && (
        <div className="border-red-600 mt-4 border-2 w-6/12 mx-auto rounded p-3 text-center text-red-800">
          <h1>Your cart is empty. Add Items to the cart.</h1>
        </div>
      )}
      <div className="w-6/12 mx-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
