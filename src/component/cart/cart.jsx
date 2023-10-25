import React, { useEffect } from "react";
import CartItemList from "./cartitemlist";
import { useDispatch } from "react-redux";
import { removeAllItem, selectItemsInCart } from "../../utils/slices/CartSlice";
import OrderSummary from "../order-section/order";
import { useSelector } from "react-redux";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, `0`);
  }, []);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectItemsInCart);
  return (
    <div className="m-5">
      <div className="container-max py-8 pb-16">
        <div className="flex justify-between">
          <h1 className="text-2xl my-4 font-semibold">Cart</h1>
          <button
            className="bg-orange-500  h-8 w-20 text-white rounded-lg"
            onClick={() => dispatch(removeAllItem())}
          >
            Clear
          </button>
        </div>

        <div className="min-h-[60vh] pb-8 md:flex gap-8">
          <CartItemList />
          {/* order summary */}
          {cartItems && cartItems.length !== 0 && <OrderSummary />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
