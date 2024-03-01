import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
  } = info;
  return (
    <div className="flex flex-col justify-center p-2  text-sm/[2]">
      <img className="w-[100%] h-[120] object-cover rounded-md" src={`${CDN_URL}${cloudinaryImageId}`} />
      <h4 className="pt-2 font-mono font-black"> {name}</h4>
      <h4 className="pt-1 font-semibold">{avgRating} stars</h4>
      <h5 className="pt-1">{cuisines.splice(0,3).join(", ")}</h5>
      <h5 className="pt-1">{costForTwo}</h5>
      <h5 className="pt-1">{deliveryTime === undefined ? 45 : 15 } Mins Delivery</h5>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
 return (props) => {
  return(
    <div>
      <label className="bg-gray-500 text-white text-sm p-1 rounded-lg">Promoted</label>
      <RestaurantCard {...props} />
    </div>
  )
 }
}

export default RestaurantCard;
