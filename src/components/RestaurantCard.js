import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData;
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
  } = info;
  return (
    <div className="flex flex-col justify-center p-2  text-sm/[2]">
      <img className="w-[100%] h-[120] object-cover rounded-md" src={`${CDN_URL}${cloudinaryImageId}`} />
      <h4 className="pt-2 font-mono font-black"> {name}</h4>
      <h4 className="pt-1 text-[12px] text-center font-semibold border-2 text-gray-700 bg-[#f0f1f0] rounded-md w-[50px]">{avgRating} ⭐</h4>
      <h5 className="pt-1 font-sans font-semibold">{cuisines.join(", ")}</h5>
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
