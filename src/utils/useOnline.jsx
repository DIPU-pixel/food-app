import { useEffect, useState } from "react";

const useOnline = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  const HandleOnline = () => {
    setOnlineStatus(true);
  };
  const handleOfline = () => {
    setOnlineStatus(false);
  };
  useEffect(() => {
    window.addEventListener("online",HandleOnline);
    window.addEventListener("offline", handleOfline);
    return () => {
      window.removeEventListener("online", HandleOnline);
      window.removeEventListener("offline", handleOfline);
    };
  }, []);
  return onlineStatus;
};

export default useOnline;
