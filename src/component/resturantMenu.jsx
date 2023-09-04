import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imgURL } from "./../config";
import Loading from "./Loading";
import "../app.css";
import useResturantsHooks from "../utils/useResturantsHooks";

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-white p-4 mb-4 shadow-md rounded-lg">
      <img
        src={imgURL + item.imageId}
        alt="Item Image"
        className="w-full h-32 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600">{item.description}</p>
      <div className="flex justify-between mt-4">
        <span className="text-xl font-semibold">${item.price}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ResturantMenu = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const getMenudata = useResturantsHooks(id);

  useEffect(() => {
    const menuInfo =
      getMenudata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card;
    if (menuInfo) {
      setMenuItems(menuInfo.itemCards || []);
    }
  }, [getMenudata]);

  if (getMenudata === 0) {
    return <Loading />;
  }

  const RestroInfo = getMenudata?.cards[0]?.card?.card?.info;

  return (
    <div className="Menu">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold">{RestroInfo?.name}</h2>
        <img
          src={imgURL + RestroInfo?.cloudinaryImageId}
          alt="Restaurant Image"
          className="w-40 h-40 rounded-full mt-4"
        />
        <p className="text-gray-600 mt-2">
          {RestroInfo?.area}, {RestroInfo?.city}
        </p>
        <p className="mt-2">{RestroInfo?.totalRatings} stars</p>
        <p className="mt-2">{RestroInfo?.costForTwoMsg}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item.card.info} />
        ))}
      </div>
    </div>
  );
};

export default ResturantMenu;
