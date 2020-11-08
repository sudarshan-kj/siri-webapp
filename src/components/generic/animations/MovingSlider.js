import React from "react";
import styles from "./MovingSlider.module.css";

const MovingSlider = ({ duration, color, direction, style }) => {
  const slideRef = React.useRef();
  const appliedDirection = direction === "left" ? { left: 0 } : { right: 0 };
  const customStyle = {
    backgroundColor: color,
    ...appliedDirection,
    ...style,
  };
  React.useEffect(() => {
    /*Not applying other styles since the .animate api is not widely supported by browsers*/
    slideRef.current.animate(
      [
        {
          width: "0%",
        },
        {
          width: "100%",
        },
      ],
      {
        duration: duration,
        easing: "ease-out",
      }
    );
  });
  return <div ref={slideRef} style={customStyle} className={styles.slider} />;
};

export default MovingSlider;
