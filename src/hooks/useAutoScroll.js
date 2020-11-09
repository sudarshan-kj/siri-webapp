import React from "react";
import { useLocation } from "react-router-dom";

const useAutoScroll = (applyOffset = false) => {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1));
      if (element) {
        if (applyOffset) {
          window.scrollTo(0, 0); // if coming from another scrolled page (scrolled to bottom),
          //it is necessary to reset the scroll so that we scroll correctly to the element in place
          var cardBottom = element.getBoundingClientRect().bottom;
          var elementPosition = element.getBoundingClientRect().top;
          let offset = cardBottom - elementPosition;
          var offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          element.style.transition = "transform 0.5s";
          element.style.transform = "scale(1.05)";
          let id = setTimeout(reset, 1000);
          function reset() {
            element.style = "";
            clearTimeout(id);
          }
        } else {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, applyOffset]);
};

export default useAutoScroll;
