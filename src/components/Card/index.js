import React from "react";
import styles from "./index.module.css";
import SlideShow from "components/SlideShow";

const Card = ({ size }) => {
  return (
    <div className={`${styles.cardContainer} ${styles[size]}`}>
      <SlideShow />
    </div>
  );
};

export default Card;
