import RestaurantCard from "../components/RestaurantCard"
import { restaurantList } from "../utils/mockData";

const Search = () => {
    return <div className="search">Search</div>;
  };


const Body = () => {
    return (
      <div>
        <Search />
        <div className="res-card-wrapper">
          {
            restaurantList.map((restaurant) =>   <RestaurantCard key={restaurant.data.id} resData={restaurant} />)
          }
        
        </div>
      </div>
    );
  };

export default Body;