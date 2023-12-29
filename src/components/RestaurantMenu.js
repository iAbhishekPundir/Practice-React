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
  } = resMenu;

  const { deliveryTime, lastMileTravelString } = sla;

  return (
    <div className="m-4 p-4 bg-slate-200 w-60" key={id}>
      <h1 className="font-bold">Name of the Restaurant</h1>
      <p className="font-semibold"> {name} </p>
      <p className="font-semibold"> {areaName} </p>
      <p className="font-semibold"> {avgRatingString}⭐ </p>
      <p className="font-semibold"> {city} </p>
      <h1 className="font-bold"> Menu </h1>
      <ul>
        {cuisines.map((item) => (
          <li key={item} className="font-semibold">
            {" "}
            {item} - {costForTwoMessage}{" "}
          </li>
        ))}
      </ul>
      <p className="font-semibold"> {locality} </p>
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
