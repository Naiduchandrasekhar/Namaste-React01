import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  currentIndex,
  showIndex,
  setShowIndexNull,
}) => {
  const handleCategory = () => {
    if (currentIndex === showIndex) {
      setShowIndexNull();
    } else {
      setShowIndex();
    }
  };

  return (
    <div className=" w-[50%] p-3 m-2 border-y-2 cursor-pointer shadow-lg bg-gray-50   ">
      <div
        className="flex justify-between items-center"
        onClick={handleCategory}
      >
        <div>
          <h1 className="font-mono font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </h1>
        </div>
        <div>{showItems ? "⬇️" : "⬆️ "}</div>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
