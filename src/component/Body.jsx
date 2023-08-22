import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
// import { restaurants } from "../config";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { getFiltervalue } from "../utils/utils";
import useBodyHooks from "./../utils/useBodyHooks";
import useOnline from "../utils/useOnline";

const Body = () => {
  const mainDetails = useBodyHooks();
  const onlineStatus=useOnline()
  const { allResturant, filterdata ,setFilterdata} = mainDetails;
  const [serachInput, setSearchinput] = React.useState("");
  function handleButtonClick() {
    const data = getFiltervalue(serachInput, allResturant);
    setFilterdata(data);
  }
   
      
  if(!onlineStatus){
   return  <p>  you are ofline</p>
  }
  //   if(filterdata?.length  === 0) return  <h1> no result found</h1>
  return allResturant?.length === 0 ? (
    <Loading />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          value={serachInput}
          placeholder="search data"
          onChange={(e) => setSearchinput(e.target.value)}
        />
        <button onClick={handleButtonClick}>search</button>
      </div>
      <div className="resturant-list">
        {filterdata?.map((datainfo, index) => (
          <div key={index}>
            <Link to={"/resturantmenu/" + datainfo.info.id} key={index}>
              <ResturantCard restaurant={datainfo.info} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Body;
