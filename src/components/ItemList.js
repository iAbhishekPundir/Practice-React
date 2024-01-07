import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemListData }) => {
  console.log("Categories itemList : ", itemListData);

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  }
  return (
    <div>
      {itemListData !== undefined &&
        itemListData.map((item) => (
          <div data-testid="foodItems" key={item?.card?.info?.id} className="flex justify-between items-center my-4 p-2 shadow-lg bg-slate-100">
            <div className="m-2 p-2">
              <h2 className="m-2 font-bold">{item?.card?.info?.name}</h2>
              <p className="m-2 font-semibold"> ₹{item?.card?.info?.price / 100} <span className="text-red-600">| 10% swiggy off </span></p>
              <p className="m-2 text-gray-600"> {item?.card?.info?.description} </p>
            </div>
            
            <div className="w-36  ">
                <button className="absolute bg-white text-green-500 font-semibold hover:bg-slate-200 rounded-br-xl hover:text-green-600" onClick={() => handleAddToCart(item)}>Add +</button>
                <img className="rounded-md" src={CDN_URL + item?.card?.info?.imageId}  />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
