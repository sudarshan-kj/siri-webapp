import React from "react";
import { useLocation } from "react-router-dom";

const useAutoScroll = () => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
};

export default useAutoScroll;
