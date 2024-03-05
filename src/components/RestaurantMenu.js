import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM_IMG } from "../utils/constants";
import { EACH_MENU_ITEM } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const params = useParams();
  const { restId } = params;
  //console.log(restId )

  /*Custome Hook Implemented*/
  let resInfo = useRestaurantMenu(restId);

  if (resInfo === null) return <Shimmer />;

  //console.log("ss" ,resInfo.cards[2].groupedCard.cardGroupMap.REGULAR);

  const {
    name,
    avgRating,
    cuisines,
    totalRatingsString,
    cloudinaryImageId,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info;

  const items =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      .itemCards ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      .itemCards;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  //console.log(categories);

  const filterCategory = categories.filter((category) => {
    return (
      category?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  console.log(filterCategory);


  return (
    <div className="mt-[70px]">
      <div className="p-4 flex justify-center items-center bg-[#121111] text-white mb-3">
        <div>
          <img
            className="h-[150] mr-4"
            src={MENU_ITEM_IMG + cloudinaryImageId}
            alt={cloudinaryImageId}
          />
        </div>
        <div className="rest_details">
          <h3 className="mx-2 mb-4">{name}</h3>
          <h4 className="mx-2 mb-4">{cuisines.join(", ")}</h4>
          <span className="mx-2 border-3 bg-[#024f24] p-1 rounded-md">
            ⭐{avgRating}
          </span>
          <span>|</span>
          <span className="mx-2">{sla.slaString}</span>
          <span>|</span>
          <span className="mx-2">{totalRatingsString}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[100%]">
        {filterCategory.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            setShowIndexNull={() => setShowIndex(null)}
            currentIndex={index}
            showIndex={showIndex}
            data={category.card.card}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
