import React from "react";
import { useParams } from "react-router-dom";
import { imgURL } from "./../config";
import Loading from './Loading';
import "../app.css"
import useResturantsHooks from "../utils/useResturantsHooks";
const ResturantMenu = () => {
  const { id } = useParams();
  const getMenudata =useResturantsHooks(id)

  // console.log(getMenudata);
  const RestroInfo = getMenudata?.cards[0]?.card?.card?.info;
  const menuInfo= getMenudata?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card;
  console.log(menuInfo);

  return RestroInfo === 0 ?
  <Loading/> : (
    <div className="Menu">
      <div>
        <h2>{RestroInfo?.name}</h2>
        <img
          src={imgURL + RestroInfo?.cloudinaryImageId}
          alt="image not found"
        />
        <h2>{RestroInfo?.area}</h2>
        <h2>{RestroInfo?.city}</h2>
        <h2>{RestroInfo?.totalRatings} stars</h2>
        <h2>{RestroInfo?.costForTwoMsg}</h2>
      </div>
      <div>
        {
            menuInfo?.itemCards?.map((x,index)=>{
              return(
                <div key={index}>
                  <p>{x?.card?.info?.name}</p>
                </div>
              )
            })
        }

      </div>
    </div>
  );
};

export default ResturantMenu;
