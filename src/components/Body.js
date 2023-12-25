import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
    const [data, setData] = useState(restaurantList);
    console.log(data);
  return (
    <div>
      <div className="filter">
      <button onClick={()=>{setData(restaurantList?.filter((res)=> res.data.avgRating >= 4))}} >
        Top Rated Restaurants
      </button>
    </div>
      <div className="res-card-wrapper">
        {data?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
