import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
// import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5318555&lng=73.8220565&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await fetchedData.json();

    if (jsonData !== undefined) {
      setListOfRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(listOfRestaurants);
    }
  };

  return listOfRestaurants?.length === 0 ? (
    <div className="shimmer-container">
      <Shimmer />
    </div>
  ) : (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants?.filter((res) => res?.info?.avgRating >= 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-wrapper">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
