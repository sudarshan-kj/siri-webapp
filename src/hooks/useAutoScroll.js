import React from "react";
import { useLocation } from "react-router-dom";

const useAutoScroll = (focusCenter = false, transition = false, id) => {
  const location = useLocation();
  React.useEffect(() => {
    let divId;
    if (location.hash || id) {
      if (location.hash) {
        divId = location.hash.slice(1);
      } else if (id) {
        divId = id;
      }
      let element = document.getElementById(divId);
      if (element) {
        window.scrollTo(0, 0); // if coming from another scrolled page (scrolled to bottom),
        //it is necessary to reset the scroll so that we scroll correctly to the element in place
        var cardBottom = element.getBoundingClientRect().bottom;
        var elementPosition = element.getBoundingClientRect().top;
        let offset = 100; //This is the size of the header + 16px
        if (focusCenter) {
          offset = cardBottom - elementPosition;
        }
        if (divId === "video") offset = 84;
        var offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        if (transition) {
          element.style.transition = "transform 1s";
          element.style.transform = "scale(1.05)";
          let id = setTimeout(reset, 1000);
          function reset() {
            element.style = "";
            clearTimeout(id);
          }
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, focusCenter, transition]);
};

export default useAutoScroll;
