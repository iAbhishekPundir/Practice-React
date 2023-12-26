import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
// import { restaurantList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
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
      setFilteredData(
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
        <div className="search">
          <input
            type="text"
            placeholder="Enter restaurant name"
            value={searchText}
            onChange={(e) => {
              console.log(e);
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
              listOfRestaurants?.filter((res) => res?.info?.avgRating >= 4.5)
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
