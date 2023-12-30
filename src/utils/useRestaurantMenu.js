import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);

  const fetchData = async (resId) => {
    const fetchedData = await fetch(MENU_URL + resId);
    const jsonData = await fetchedData.json();
    // console.log("Restaurant Menu : ",jsonData);
    setResMenu(jsonData);
  };

  useEffect(() => {
    fetchData(resId);
  }, []);

  return resMenu;
};

export default useRestaurantMenu;
