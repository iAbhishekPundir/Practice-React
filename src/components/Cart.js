import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto">
      <div className="flex justify-center">
        <h1 className="font-bold text-lg m-2">Cart</h1>
        <button
          className="bg-red-500 text-white px-2 m-2 rounded-md hover:bg-red-700"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h1>Cart is empty, please add something 😊</h1>
      ) : (
        cartItems?.map((item) => <CartItems item={item} />)
      )}
    </div>
  );
};

export default Cart;
