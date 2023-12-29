import { CDN_URL } from "../utils/constants";

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-1 bg-slate-900 text-white rounded-sm">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resData?.info;
  return (
    <div
      className="w-60  m-2 rounded-md bg-slate-200 hover:bg-slate-300"
      key={id}
    >
      <div className="w-90 p-2">
        <img className="rounded-md" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="p-2 m-1" key={id}>
        <h1 className="font-bold ">{name}</h1>
        <p> {cuisines.join(", ")} </p>
        <p> {costForTwo} </p>
        <p> {avgRating}⭐ </p>
        <p> {sla.deliveryTime} min </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
