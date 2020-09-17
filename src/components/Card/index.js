import React from "react";
import styles from "./index.module.css";
import SlideShow from "components/SlideShow";
import { Element } from "react-scroll";

const Card = ({ size }) => {
  return (
    <div className={`${styles.cardContainer} ${styles[size]}`}>
      <Element name="headerContainer">
        <SlideShow />
      </Element>
    </div>
  );
};

export default Card;
