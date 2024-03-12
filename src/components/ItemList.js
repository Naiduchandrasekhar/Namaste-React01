import { useDispatch, useSelector } from "react-redux";
import { EACH_MENU_ITEM } from "../utils/constants";
import { addItem, removeItem } from "../store/cartSlice";
import { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import { toast } from "react-toastify";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const eachItemQuantity = useSelector((store) => store.cart.items);
  console.log(eachItemQuantity);

  const { mode } = useContext(ThemeContext);

  const handleAdd = (item) => {
    dispatch(addItem(item));
    toast.success("item added successfully");
  };

  const handleSub = (item) => {
    dispatch(removeItem(item));
    toast.error("item removed successfully");
  };

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div key={item.card.info.id} className="flex flex-col">
          <div className="w-12/12 flex justify-between items-center m-2 p-4 rounded-lg">
            <div className="p-4 w-9/12">
              <h3
                className={`${
                  mode ? "text-gray-700" : "text-black"
                } "font-mono font-bold mb-1"`}
              >
                {item.card.info.name}
              </h3>
              <h4 className="my-2 from-neutral-800">
                ₹{item?.card?.info?.price / 100}
              </h4>
            </div>
            <div className="w-3/12 flex flex-col justify-center items-center">
              <img
                className="w-[130px] mb-2 h-[110px] rounded-md object-fit"
                src={EACH_MENU_ITEM + item.card.info.imageId}
              />
              <button className="bg-gray-400 p-1 m-auto w-[75%] rounded-md">
                <span>
                  {eachItemQuantity.find(
                    (ele) => ele.card.info.id === item.card.info.id
                  ) ? (
                    <div className="flex justify-between items-center">
                      <span
                        className="text-xl font-semibold"
                        onClick={() => {
                          handleSub(item);
                        }}
                      >
                        -
                      </span>

                      <span>
                        {eachItemQuantity.map((ele) => {
                          if (ele.card.info.id === item.card.info.id) {
                            return (
                              <span key={ele.card.info.id}>{ele.quantity}</span>
                            );
                          }
                        })}
                      </span>

                      <span
                        className="text-lg font-semibold"
                        onClick={() => {
                          handleAdd(item);
                        }}
                      >
                        +
                      </span>
                    </div>
                  ) : (
                    <span
                      className="text-lg font-semibold"
                      onClick={() => {
                        handleAdd(item);
                      }}
                    >
                      Add
                    </span>
                  )}
                </span>
              </button>
              {item.quantity
                ? `Quantity: ${item.quantity} price: ${
                    Math.floor(item.card.info.price / 100) * item.quantity
                  }`
                : ""}
            </div>
          </div>
          <p className="border-2 border-t-gray-50 w-[100%]"></p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
