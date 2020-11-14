import React from "react";
import styles from "./ProductInfoList.module.css";
import { imageCategories } from "assets/slides";
import i18n from "utils/i18n";
import useAutoScroll from "hooks/useAutoScroll";

const ProductInfoList = () => {
  useAutoScroll(true, true);

  return (
    <div className={styles.mainContainer}>
      {imageCategories.map((image) => {
        const categories = i18n.t("Categories", { returnObjects: true });
        return (
          <div key={image.key} id={image.key} className={styles.card}>
            <Item
              heading={categories[image.key].name}
              content={categories[image.key].longDescription}
              image={image.path}
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
            <img src={image} alt="heading" />
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
