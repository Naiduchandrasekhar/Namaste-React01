import { EACH_MENU_ITEM } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <div key={item.card.info.id} className="flex flex-col">
          <div className="w-12/12 flex justify-between items-center m-2 p-4 rounded-lg">
            <div className="p-4 w-9/12">
              <h3 className="font-mono text-black font-bold mb-1">
                {item.card.info.name}
              </h3>
              <h4 className="my-2 from-neutral-800">
                ₹{item?.card?.info?.price / 100}
              </h4>
            </div>
            <div className="w-3/12">
              <img
                className="w-[130px] h-[110px] rounded-md object-fit"
                src={EACH_MENU_ITEM + item.card.info.imageId}
              />
            </div>
          </div>
          <p className="border-2 border-t-gray-50 w-[100%]"></p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

