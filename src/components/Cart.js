import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {clearCart} from "../store/cartSlice"
import { toast } from "react-toastify";

const Cart = () => {
  const { mode } = useContext(ThemeContext);
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  return (
    <div
      className={`${
        mode
          ? "bg-black min-h-[100vh] text-white p-4"
          : "bg-white min-h-[100vh] text-black p-4"
      } mt-[70px]`}
    >
      <div className="text-center">
        <h1 className="font-bold text-xl my-4">Cart</h1>
      </div>
      <div className="text-center">
        {items.length > 0 ? (
          <div>
            <button className="border-2 bg-gray-200 p-1 w-[100px] rounded-lg" onClick={() => {
              dispatch(clearCart())
              toast.info("Cart 🛒 is Cleared Successfully")
             }}
              >Clear Cart
              </button>
            <ItemList items={items} />
          </div>
        ) : (
          <div>
            <h1 className="mb-4"> Cart is empty 🛒 </h1>
            <Link to="/" className="border-2 p-2 hover:bg-gray-200 text-gray-500">
              See restaurants near you
            </Link>
          </div>
        )}
      </div>
      <div className="text-center font-extrabold">  {items.length > 0 && <h1>TotalPrice: {
      items
      .map(item => Math.floor(item.card.info.price / 100) * item.quantity)
      .reduce((acc, curr) => acc + curr, 0)
      }</h1>}</div>
    </div>
  );
};

export default Cart;
