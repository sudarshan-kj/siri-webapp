import React from "react";
import styles from "./index.module.css";

const Card = ({ style, size, children, noShadow }) => {
  const shadow = noShadow
    ? ""
    : { boxShadow: "0 0 10px 5px rgb(0, 0, 0, 0.1)" };

  return (
    <div
      style={{ ...style, ...shadow }}
      className={`${styles.cardContainer} ${styles[size]}`}
    >
      {children}
    </div>
  );
};

export default Card;
