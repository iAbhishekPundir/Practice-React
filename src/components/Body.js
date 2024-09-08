import { useEffect, useState } from "react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import RESTAURANT_LIST_MOCK_DATA from "./mocks/RestaurantListMockData.json";

import { useSelector } from "react-redux";

export const PromotedRestaurant = withPromotedLabel(RestaurantCard);
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log("Restaurant data", listOfRestaurants);
  // const cartItems = useSelector()

  //fetching data from swiggy api
  // const fetchData = async () => {
  //   const fetchedData = await fetch(RESTAURANT_LIST_URL);

  //   const jsonData = await fetchedData.json();
  //   console.log("Reastaurant List : ", jsonData);
  //   if (jsonData !== undefined) {
  //     setListOfRestaurants(
  //       jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //     setFilteredData(
  //       jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants
  //     );
  //   }
  // };

  const fetchData = async () => {

    setTimeout(() => {
      setListOfRestaurants(
        RESTAURANT_LIST_MOCK_DATA.data.cards[2].card.card.gridElements
          .infoWithStyle.restaurants
      );
      setFilteredData(
        RESTAURANT_LIST_MOCK_DATA.data.cards[2].card.card.gridElements
          .infoWithStyle.restaurants
      );
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>You're offline, please check your internet!</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <div className="shimmer-container">
      <Shimmer />
    </div>
  ) : (
    <div>
      <div className="flex items-center my-4 mx-10">
        <div className="">
          <input
            data-testid="searchInput"
            className=" mr-4 px-1 border border-gray-400 rounded-sm"
            type="text"
            placeholder="Enter restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="rounded-sm text-white  bg-slate-500 px-2 hover:opacity-80 mr-4"
            onClick={() =>
              setFilteredData(
                listOfRestaurants?.filter((res) =>
                  res?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                )
              )
            }
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="rounded-sm text-white  bg-slate-500 px-2 hover:opacity-80 mr-4"
            onClick={() => {
              setFilteredData(
                listOfRestaurants?.filter((res) => res?.info?.avgRating >= 4.2)
              );
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="rounded-sm text-white  bg-slate-500 px-2 hover:opacity-80 mr-4"
            onClick={() => setFilteredData(listOfRestaurants)}
          >
            Reset
          </button>
          <p className="rounded-sm font-semibold text-white bg-emerald-600 hover:bg-opacity-90 px-2">
            Total Restaurant : {filteredData?.length}{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-5 m-[2rem]">
        {filteredData?.length === 0 ? (
          <h1>No restaurant found🫤</h1>
        ) : (
          filteredData?.map((restaurant) => (
            <Link
              className="link"
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <PromotedRestaurant
                  key={restaurant.info.id}
                  resData={restaurant}
                />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
