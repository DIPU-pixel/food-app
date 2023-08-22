import React ,{useState,useEffect} from "react";
import { FETCH_MENU_URL } from "../config";
const useResturantsHooks = (id) => {
    const [getMenudata, setGetMenudata] = useState(null);
    useEffect(() => {
        resturantsMenudata();
      }, []);
      const resturantsMenudata = async () => {
        const menudata = await fetch(
           FETCH_MENU_URL + id
        );
        const response = await menudata.json();
        // console.log(response.data);
        setGetMenudata(response.data);
      };
      return getMenudata

}

export default useResturantsHooks