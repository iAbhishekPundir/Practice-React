import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    deliveryTime,
    cuisines,
    costForTwoString,
    cloudinaryImageId,
    id,
  } = resData?.data;
  return (
    <div className="res-card-container" key={id}>
      <div className="res-image">
        <img src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="res-info" key={id}>
        <p>
          {" "}
          <b>{name} </b>
        </p>
        <p> {deliveryTime} </p>
        <p> {cuisines.join(", ")} </p>
        <p> {costForTwoString} </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
