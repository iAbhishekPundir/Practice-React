import { useEffect, useState } from "react";
import RestaurantCard, {
  WithPromotedLabel,
} from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const PromotedRestaurant = WithPromotedLabel(RestaurantCard);
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedData = await fetch(RESTAURANT_LIST_URL);

    const jsonData = await fetchedData.json();

    if (jsonData !== undefined) {
      setListOfRestaurants(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredData(
        jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  };

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
      <div className="flex items-center my-4 mx-4">
        <div className="">
          <input
            className=" mr-4 px-1 ring-1 ring-inset ring-gray-300"
            type="text"
            placeholder="Enter restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="rounded-sm bg-slate-300 px-2 hover:bg-slate-400 mr-4"
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
        <div className="">
          <button
            className="rounded-sm bg-slate-300 px-2 hover:bg-slate-400 mr-4"
            onClick={() => {
              setFilteredData(
                listOfRestaurants?.filter((res) => res?.info?.avgRating >= 4.2)
              );
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="rounded-sm bg-slate-300 px-2 hover:bg-slate-400"
            onClick={() => setFilteredData(listOfRestaurants)}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
                <PromotedRestaurant resData={restaurant} />
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
