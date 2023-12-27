import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }

  const {
    areaName,
    avgRatingString,
    city,
    cloudinaryImageId,
    costForTwoMessage,
    cuisines,
    id,
    locality,
    name,
    sla,
  } = resMenu?.data?.cards[2]?.card?.card?.info;
  const { deliveryTime, lastMileTravelString } = sla;

  return (
    <div key={id}>
      <h1>Name of the Restaurant</h1>
      <p> {name} </p>
      <p> {areaName} </p>
      <p> {avgRatingString} </p>
      <p> {city} </p>
      <h2> Menu </h2>
      <ul>
        {cuisines.map((item) => (
          <li key={item}>
            {" "}
            {item} - {costForTwoMessage}{" "}
          </li>
        ))}
      </ul>
      <p> {locality} </p>
      <p>
        <b>
          {" "}
          {deliveryTime}min -- {lastMileTravelString}{" "}
        </b>
      </p>
    </div>
  );
};

export default RestaurantMenu;
