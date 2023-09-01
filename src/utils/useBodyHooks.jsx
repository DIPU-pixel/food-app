import React,{useEffect} from 'react'

const useBodyHooks = () => {
    const [allResturant, setAllResturant] = React.useState([]);
    const [filterdata, setFilterdata] = React.useState([]);
    useEffect(() => {
        getResponseAPi();
      }, []);
    const getResponseAPi = async () => {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.049287854012995&lng=77.62055971986817&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const response = await data.json();
         console.log(response);
        setFilterdata(
          response?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setAllResturant(
          response?.data?.cards[2].card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
    
      };
   return {allResturant,filterdata,setAllResturant}

}

export default useBodyHooks