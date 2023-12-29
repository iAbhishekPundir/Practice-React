import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  const fetchData = async (resId) => {
    const fetchedData = await fetch(MENU_URL + resId);
    const jsonData = await fetchedData.json();
    console.log(jsonData);
    setResMenu(jsonData?.data?.cards[0]?.card?.card?.info);
  };

  useEffect(() => {
    fetchData(resId);
  }, []);

  return resMenu;
};

export default useRestaurantMenu;
