import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ resCategoryData, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex();
        
    }
  return (
    <div>
      {resCategoryData?.itemCards?.length !== undefined && (
        <div className="">
          <div onClick={handleClick} className="bg-slate-200 flex justify-between m-2 px-4 py-2 rounded-sm shadow-md hover:cursor-pointer">
            <span className="text-large font-bold">
              {resCategoryData?.title} ({resCategoryData?.itemCards?.length})
            </span>
            <span >{resCategoryData?.title && showItems ? "⬆️" : "⬇️" }</span>
          </div>

          <div className="">
            { showItems && <ItemList itemListData={resCategoryData?.itemCards} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
