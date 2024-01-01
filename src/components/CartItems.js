import { CDN_URL } from "../utils/constants";

const CartItems = ({ item }) => {
  return (
    <div
      key={item?.card?.info?.id}
      className="flex justify-between items-center my-4 p-2 shadow-lg bg-slate-100"
    >
      <div className="m-2 p-2">
        <h2 className="m-2 font-bold">{item?.card?.info?.name}</h2>
        <p className="m-2 font-semibold"> ₹{item?.card?.info?.price / 100} </p>
        <p className="m-2 text-gray-600"> {item?.card?.info?.description} </p>
      </div>

      <div className="w-36  ">
        <img className="rounded-md" src={CDN_URL + item?.card?.info?.imageId} />
      </div>
    </div>
  );
};

export default CartItems;
