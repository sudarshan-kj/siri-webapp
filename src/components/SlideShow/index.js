import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import building from "assets/slides/food.jpg";
import sea from "assets/slides/girl.jpg";
import city from "assets/slides/bulb.jpg";
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
        <div>
          <img src={building} alt="sea" />
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div>
          <img src={city} alt="sea" />
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div>
          <img src={sea} alt="sea" />
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
