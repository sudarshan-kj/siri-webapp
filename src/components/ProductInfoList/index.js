import React from "react";
import styles from "./ProductInfoList.module.css";
import i18n from "utils/i18n";
import useAutoScroll from "hooks/useAutoScroll";
import config from "../../config";

const ProductInfoList = ({ productInfo, subClick }) => {
  useAutoScroll(true, true, subClick);

  return (
    <div className={styles.mainContainer}>
      {productInfo.map((value) => {
        const i18Categories = i18n.t("categories", { returnObjects: true });
        return (
          <div key={value.key} id={value.key} className={styles.card}>
            <Item
              heading={i18Categories[value.key].name}
              content={i18Categories[value.key].longDescription}
              image={`${config.API_ENDPOINT}${value.mainImage}`}
              flip={true}
            />
          </div>
        );
      })}
    </div>
  );
};

const Item = ({ heading, content, image, flip }) => {
  return (
    <>
      {flip && (
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1>{heading}</h1>
          </div>
          <div className={styles.imageContainer}>
            <img src={image} alt={heading} />
            <span>
              <p>{content}</p>
            </span>
          </div>
        </div>
      )}
      {!flip && (
        <div className={`${styles.contentContainer} ${styles.flip}`}>
          <div className={styles.textContainer}>
            <h1>{heading}</h1>
          </div>
          <div className={styles.imageContainer}>
            <img src={image} alt="heading" />
            <span>
              <p>
                This article is about the well being of all and how that can be
                achieved by just looking at things for the way they are
              </p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfoList;
