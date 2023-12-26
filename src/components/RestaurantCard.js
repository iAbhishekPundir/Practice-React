import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    id,
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    avgRating,
    sla
  } = resData?.info;
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
        <p> {cuisines.join(", ")} </p>
        <p> {costForTwo} </p>
        <p> {avgRating}⭐ </p>
        <p> {sla.deliveryTime} min </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
