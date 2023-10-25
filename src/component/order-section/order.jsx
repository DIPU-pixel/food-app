import {
  selectItemsInCart,
  selectTotalPrice,
} from "../../utils/slices/cartSlice";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigation = useNavigate();
  const cartItems = useSelector(selectItemsInCart);
  console.log(cartItems);
  const price = useSelector(selectTotalPrice);
  console.log(price);
  const discount = (price * 0.1) / 100;
  const deliveryCharges = (price * 0.05) / 100;
  const totalAmt = price / 100 + deliveryCharges - discount;
  const HandleCLick = () => {
    if (cartItems !== 0) {
      toast.success(`Succesfully order `);
    }
    setTimeout(() => {
      navigation("/");
    }, 2000);
  };

  return (
    <div className="basis-5/12 h-fit sticky top-40 p-8 rounded-md border shadow-md my-8 md:m-0">
      <h2 className="text-xl font-bold border-b pb-4">Order Summary</h2>

      {/* order details */}
      <div className="py-4 text-lg space-y-4 border-b">
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Price ({cartItems.length} items)</p>
          <p>₹ {price / 100}</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Discount (10%)</p>
          <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center font-semibold">
          <p className="font-normal">Delivery charges (5%)</p>
          <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
        </div>

        <p className="text-sm my-2">
          You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p>
      </div>

      <div className="py-4 border-b">
        <div className="md:flex justify-between items-center font-bold text-lg md:text-2xl">
          <h1>Total Amount</h1>
          <h1 className="text-orange-500">
            ₹ {parseFloat(totalAmt).toFixed(2)}
          </h1>
        </div>
      </div>

      <button
        onClick={HandleCLick}
        className="w-full block mt-4 uppercase font-bold text-lg bg-orange-600 text-white text-center p-4 rounded-md"
      >
        Place order
      </button>
    </div>
  );
};

export default OrderSummary;
