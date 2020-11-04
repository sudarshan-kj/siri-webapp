import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import images from "assets/slides";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import styles from "./index.module.css";
import { ReactComponent as Arrow } from "assets/left-arrow.svg";

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
        prevArrow={
          <div className={styles.prevArrowContainer}>
            <Arrow className={styles.prevArrow} />
          </div>
        }
        nextArrow={
          <div className={styles.nextArrowContainer}>
            <Arrow className={styles.nextArrow} />
          </div>
        }
        arrows={true}
        easing="ease"
        style={{
          display: loading ? "none" : "block",
        }}
        duration={2000}
        transitionDuration={500}
      >
        {images.map((image) => {
          return (
            <div className={styles.eachSlide}>
              <div className={styles.bgContainer}>
                <img src={image} alt="fornow" onLoad={imageLoaded} />
                <span className={styles.tint}>
                  <h1>Empowering rural youth</h1>
                </span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default Slideshow;
