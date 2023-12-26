import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  console.log("inside body");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5318555&lng=73.8220565&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await fetchedData.json();
    // console.log(jsonData.data.cards.card.card.gridElements.infoWithStyle.restaurants);

    // console.log(jsonData?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    if (jsonData !== undefined) {
      setListOfRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  };

  if (listOfRestaurants?.length === 0) {
    return (
      <div className="shimmer-container">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  return (
    <div>
      {console.log("inside body jsx")}
      <div className="filter">
        <button
          onClick={() => {
            setListOfRestaurants(data?.filter((res) => res.info.avgRating >= 4.5));
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
