import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import building from "assets/slides/building.jpg";
import sea from "assets/slides/sea.jpg";
import city from "assets/slides/city.jpg";
import styles from "./index.module.css";

const Slideshow = () => {
  return (
    <Slide easing="ease" duration={2000} indicators transitionDuration={300}>
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
