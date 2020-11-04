import React from "react";
import styles from "./ProductList.module.css";
import images from "assets/banners";
import Card from "components/Card";

const ProductList = () => {
  return (
    <div className={styles.mainContainer}>
      {images.map((image, index) => {
        if (index % 2 === 0)
          return (
            <Card size="max">
              <Item heading="Empower me" image={image} flip={true} />
            </Card>
          );
        else {
          return (
            <Card size="max">
              <Item heading="Empower me" image={image} flip={true} />
            </Card>
          );
        }
      })}
    </div>
  );
};

const Item = ({ heading, image, flip }) => {
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
              <p>
                This article is about the well being of all and how that can be
                achieved by just looking at things for the way they are
              </p>
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

export default ProductList;
