import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(RESTAURANT_MENU + resId);
    const resData = await response.json();
    setResInfo(resData.data);
    // console.log(resData.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
