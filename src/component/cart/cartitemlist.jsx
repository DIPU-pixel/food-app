import { useSelector, useDispatch } from "react-redux";
// import {
//   decreaseItemQuantity,
//   increaseItemQuantity,
//   removeFromCart,
//   selectItemsInCart,
// } from '../features/cart/cartSlice';
// import { CDN_URL } from '../utils/constants';
import { imgURL } from "../../config";
import { decreseItemOne, increseItemByOne, removeBYIndex, selectItemsInCart } from "../../utils/slices/CartSlice";

const CartItemList = () => {
  const cartInfo = useSelector(selectItemsInCart);
  const dispatch = useDispatch();
  const removeItem = (id) => dispatch(removeBYIndex({ id }));
  const removeItemOne = (id) => dispatch(decreseItemOne({ id }));
  const increaseItemOne = (id) => dispatch(increseItemByOne({ id }));


  if (cartInfo.length === 0) {
    return (
      <div className="flex grow min-h-[60vh] justify-center items-center">
        <p>Your cart is empty!</p>
      </div>
    );
  }

  return (
    <ul className="basis-7/12">
      {cartInfo &&
        cartInfo.map((items) => (
          <li
            key={items?.item.id}
            className="flex gap-4 justify-between max-w-[600px] my-4"
          >
            <div className="basis-3/12">
              <img
                className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                src={imgURL + items?.item?.imageId}
                alt=""
              />
            </div>
            <div className="basis-9/12">
              <p className="text-lg font-semibold">{items?.item?.name}</p>

              <p className="hidden md:block">
                {items?.item?.description?.length > 50
                  ? items?.item?.description.slice(0, 50) + "..."
                  : items?.item?.description}
              </p>

              <p className="my-2 space-x-1">
                <span className="font-semibold">
                  ₹
                  {parseFloat(
                    (
                      items?.quantity * parseFloat(items?.item?.price / 100)
                    ).toFixed(2)
                  )}
                </span>
                <span className="text-gray-800 font-normal">
                  ({items?.item?.price / 100} × {items?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <button
                  onClick={()=>removeItemOne(items?.item?.id)}
                  disabled={items?.quantity === 1}
                    className={
                      "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                    }
                  >
                    -
                  </button>
                  <p className="font-bold w-8 h-8 flex justify-center items-center">
                    {items?.quantity}
                  </p>
                  <button
                    onClick={() =>
                      increaseItemOne(items?.item?.id)
                    }
                    className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(items?.item?.id)}
                  className="border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItemList;
