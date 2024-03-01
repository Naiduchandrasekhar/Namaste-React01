import { useState, useEffect } from "react";
import { RESTAURANT_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (restId) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchRestaurantMenu();
    scrollTo(0,0)
  }, []);

  const fetchRestaurantMenu = async () => {
    try {
      const data = await fetch(RESTAURANT_MENU_URL + restId);
      const json = await data.json();
      console.log(data);
      console.log(json.data);
      setResinfo(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
