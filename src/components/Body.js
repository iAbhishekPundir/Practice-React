import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
// import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_LIST_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestaurants?.length === 0 ? (
    <div className="shimmer-container">
      <Shimmer />
    </div>
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Enter restaurant name"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          onClick={() => {
            setFilteredData(
              listOfRestaurants?.filter((res) => res?.info?.avgRating >= 4.2)
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="reset-btn"
          onClick={() => setFilteredData(listOfRestaurants)}
        >
          Reset
        </button>
        {/* <p style={{marginLeft:"10px"}}><strong> {searchText} </strong></p> */}
      </div>
      <div className="res-card-wrapper">
        {filteredData?.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
