import React from "react";
import styles from "./index.module.css";

const Card = ({ size }) => {
  return (
    <div className={`${styles.cardContainer} ${styles[size]}`}>
      <h2>Heading</h2>
      <img></img>
      <p>This image was captured in the ...</p>
    </div>
  );
};

export default Card;
