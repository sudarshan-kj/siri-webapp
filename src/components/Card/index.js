import React from "react";
import styles from "./index.module.css";

const Card = ({ style, size, children }) => {
  return (
    <div style={style} className={`${styles.cardContainer} ${styles[size]}`}>
      {children}
    </div>
  );
};

export default Card;
