import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
// import { restaurants } from "../config";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { getFiltervalue } from "../utils/utils";
import useBodyHooks from "./../utils/useBodyHooks";
import useOnline from "../utils/useOnline";
import Banner from "./Banner-container/banner";

const Body = () => {
  const mainDetails = useBodyHooks();
  const onlineStatus = useOnline();
  const { allResturant, filterdata, setFilterdata } = mainDetails;
  const [serachInput, setSearchinput] = React.useState("");
  function handleButtonClick() {
    const data = getFiltervalue(serachInput, allResturant);
    setFilterdata(data);
  }
  if (!onlineStatus) {
    return <p> you are ofline</p>;
  }
    if(filterdata?.length  === 0) return  <h1> no result found</h1>
  return allResturant?.length === 0 ? (
    <Loading />
  ) : (
    <div className=" m-5">
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          value={serachInput}
          className="p-2 w-80 rounded-md "
          placeholder="search data"
          onChange={(e) => setSearchinput(e.target.value)}
        />
        <button
          className="rounded w-40 m-2 p-2 bg-purple-500 text-white hover:bg-purple-700 hover:text-gray-100 "
          onClick={handleButtonClick}
        >
          search
        </button>
      </div>
      <div>
        <Banner />
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 ">
        {filterdata?.map((datainfo, index) => (
          <div key={index}>
            <Link to={"/resturantmenu/" + datainfo.info.id} key={index}>
              <ResturantCard restaurant={datainfo.info} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
