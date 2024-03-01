import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OFFLINE_URL } from "../utils/constants";
import { withPromotedLabel } from "./RestaurantCard";
import ThemeContext from "../utils/ThemeContext";

const Body = () => {
  const [listRestaurant, setListRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const {mode} = useContext(ThemeContext)

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    scrollTo(0, 0);
  }, []);

  const fetchData = async () => {
    const data = await fetch(ALL_RESTAURANTS_URL);
    const jsonData = await data.json();
    const listData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(listData);

    setListRestaurant(listData);
    setFilterRestaurant(listData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="offline_status_Container">
        <img src={OFFLINE_URL} />
        <h1>
          Looks like you're offline!! Please check your internet connection!
        </h1>
      </div>
    );

  return listRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className={mode ? "bg-black min-h-[100vh] text-white p-4" : "bg-white min-h-[100vh] text-black p-4"}>
      <div className="flex justify-between items-center w-[500]   pb-4">
        <div className="ml-12">
          <input
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            type="search"
            className="outline-none border-solid border-2 mr-4 text-black"
            placeholder="type any restaurant"
          />
          <button
            onClick={() => {
              const filterResult = listRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              if (filterResult.length === 0) {
                setErrorMessage(true);
                setSearchText("");
              } else {
                setFilterRestaurant(filterResult);
                setErrorMessage(false);
              }
            }}
            className="border-2 bg-gray-500 text-[white] hover:bg-white hover:text-black p-[3] rounded-md"
          >
            {errorMessage ? "ClicK For Restaurants" : "Search"}
          </button>
        </div>
        {errorMessage ? (
          ""
        ) : (
          <button
    
            className="border-2 bg-gray-500 text-[white] hover:bg-white hover:text-black p-[3] rounded-md"
            onClick={() => {
              const result = listRestaurant.filter((res) => {
                return res.info.avgRating > 4.3;
              });
              setFilterRestaurant(result);
            }}
          >
            Top Rated Restaurants
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {errorMessage ? (
          <h1 className="errorRes">No matches restaurant found</h1>
        ) : (
          filterRestaurant.map((restaurant) => {
            return (
              <Link
                className={`${mode ? "bg-[#333232] text-white": "bg-white  text-black"} w-[220] rounded-lg h-[350]  m-2 bg-[#f0f0f0] hover:border-2 border-solid border-neutral-800 shadow-lg`}
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {restaurant.info.veg ? <RestaurantCardPromoted resData={restaurant}  /> : <RestaurantCard resData={restaurant} />}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
