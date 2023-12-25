import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurantList } from "../utils/mockData";



// const Search = () => {
//   return (
//     <div className="search">
//       <button onClick={() => setData(data.filter((res) => res.avgRating >= 4))}>
//         Top Rated Restaurants
//       </button>
//     </div>
//   );
// };

const Body = () => {
    const [data, setData] = useState(restaurantList);
    console.log(data);
  return (
    <div>
      {/* <Search /> */}
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
