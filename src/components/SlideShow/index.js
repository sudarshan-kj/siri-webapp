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
        <div style={{ backgroundImage: `url(${green})` }}>
          <span>
            The green sea image describes what best can be done to keep all the
            things going
          </span>
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div style={{ backgroundImage: `url(${girl})` }}>
          <span>The girl in the picture</span>
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
      <div className={styles.eachSlide}>
        <div style={{ backgroundImage: `url(${bulb})` }}>
          <span>The red light bulb</span>
          {/*Refer to corresponding CSS for the reasoning <span /> */}
        </div>
      </div>
    </Slide>
  );
};

export default Slideshow;
