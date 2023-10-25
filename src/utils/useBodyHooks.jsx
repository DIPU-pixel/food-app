import React, { useEffect } from "react";

const useBodyHooks = () => {
  const [allResturant, setAllResturant] = React.useState([]);
  const [filterdata, setFilterdata] = React.useState([]);
  const [bannerData, setBannerData] = React.useState([]);

  useEffect(() => {
    getResponseAPi();
  }, []);
  const getResponseAPi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.049287854012995&lng=77.62055971986817&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setBannerData(response);
    setFilterdata(
      response?.data?.cards[5].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllResturant(
      response?.data?.cards[5].card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return { bannerData,allResturant, filterdata, setAllResturant ,setFilterdata};
};

export default useBodyHooks;
