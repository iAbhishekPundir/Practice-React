import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);
  // console.log("line 11", resMenu)
  const [showIndex, setShowIndex] = useState(1);

  if (resMenu === null || resMenu === undefined) {
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
    feeDetails,
    totalRatingsString,
  } = resMenu?.data?.cards[2]?.card?.card?.info;

  const { deliveryTime, lastMileTravelString } = sla;

  const categories =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log("Resaurant Categories : ", categories);

  const { message } = feeDetails;

  return (
    <div className="w-screen ">
      <div
        className="p-4 w-6/12 bg-slate-200 mx-auto my-4 shadow-lg rounded-sm flex justify-between"
        key={id}
      >
        <div>
          <h1 className="font-bold text-lg p-1"> {name} </h1>
          <p className="text-slate-700 p-1">{cuisines.join(", ")}</p>
          <p className="text-slate-700 p-1">
            {areaName}, {lastMileTravelString}🔻
          </p>
          <p>🚲 {message}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-green-600 ">⭐ {avgRatingString} </p>
          <p className="text-gray-400 "> {totalRatingsString} </p>
        </div>
      </div>
      <div className="p-4 w-6/12  mx-auto my-4 ">
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={index}
            resCategoryData={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
