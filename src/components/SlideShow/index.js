import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import green from "assets/slides/green.jpg";
import girl from "assets/slides/girl.jpg";
import bulb from "assets/slides/bulb.jpg";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import styles from "./index.module.css";

const Slideshow = () => {
  const [loading, setLoading] = useState(true);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const imageLoaded = () => {
    setLoading(false);
  };

  return (
    <div>
      <div
        className={styles.loadingBgContainer}
        style={{
          display: loading ? "flex" : "none",
        }}
      >
        <PulseLoader
          css={override}
          size={30}
          color={"#B22222"}
          loading={loading}
        />
      </div>

      <Slide
        prevArrow={<div className={styles.customArrow}>ok</div>}
        arrows={true}
        easing="ease"
        style={{
          display: loading ? "none" : "block",
        }}
        duration={2000}
        transitionDuration={500}
      >
        <div className={styles.eachSlide}>
          <div className={styles.bgContainer}>
            <img src={green} alt="fornow" onLoad={imageLoaded} />
            <span className={styles.tint}>
              <p>This is Sudarshan KJ and he is going to be the best ever!</p>
            </span>
          </div>
        </div>

        <div className={styles.eachSlide}>
          <div className={styles.bgContainer}>
            <img src={girl} alt="fornow" />
            <span className={styles.tint}>
              <p>This is Sudarshan KJ and he is going to be the best ever!</p>
            </span>
            {/*Refer to corresponding CSS for the reasoning <span /> */}
          </div>
        </div>
        <div className={styles.eachSlide}>
          <div className={styles.bgContainer}>
            <img src={bulb} alt="fornow" />
            <span className={styles.tint}>
              <p>This is Sudarshan KJ and he is going to be the best ever!</p>
            </span>
            {/*Refer to corresponding CSS for the reasoning <span /> */}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
