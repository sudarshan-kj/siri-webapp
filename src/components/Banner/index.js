import React from "react";
import styles from "./Banner.module.css";
import images from "assets/banners";

const Banner = () => {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
        <h1>
          Empower. <br></br>Grow.<br></br> Repeat
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <img src={images[0]} alt="nice" />
      </div>
    </div>
  );
};

export default Banner;
