import React, { useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import styles from "./index.module.css";
import i18n from "utils/i18n";
import { ReactComponent as Arrow } from "assets/icons/common/left-arrow.svg";
import fetchCategories from "helpers/fetchCategories";
import { flatCategories } from "helpers/parsingHelper";
import config from "config";

const Slideshow = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  React.useEffect(() => {
    (async function () {
      const categories = await fetchCategories();
      if (categories) {
        setCategories(categories);
      }
    })();
  }, []);

  const imageLoaded = () => {
    setLoading(false);
  };

  const i18Categories = i18n.t("categories", { returnObjects: true });

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
        {flatCategories(categories).map((value) => {
          return (
            <div className={styles.eachSlide}>
              <div className={styles.bgContainer}>
                <img
                  className={styles.firstImage}
                  src={`${config.API_ENDPOINT}${value.mainImage}`}
                  alt="fornow"
                  onLoad={imageLoaded}
                />
                <img
                  className={styles.secondImage}
                  src={`${config.API_ENDPOINT}${value.mainImage}`}
                  alt="fornow"
                  onLoad={imageLoaded}
                />
                <span className={styles.tint}>
                  {i18Categories[value.key] && (
                    <h1>{i18Categories[value.key].description}</h1>
                  )}
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
