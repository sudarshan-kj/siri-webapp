import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import green from "assets/slides/green.jpg";
import girl from "assets/slides/girl.jpg";
import bulb from "assets/slides/bulb.jpg";
import styles from "./index.module.css";

const Slideshow = () => {
  return (
    <Slide
      arrows={false}
      easing="ease"
      duration={2000}
      transitionDuration={500}
    >
      <div className={styles.eachSlide}>
        <div className={styles.bgContainer}>
          <img src={green} alt="fornow" />
          <span />
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div className={styles.bgContainer}>
          <img src={girl} alt="fornow" />
          <span />
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div className={styles.bgContainer}>
          <img src={bulb} alt="fornow" />
          <span />
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
