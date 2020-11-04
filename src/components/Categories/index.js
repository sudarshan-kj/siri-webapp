import React from "react";
import styles from "./Category.module.css";
import Card from "components/Card";
import images from "assets/slides";
import i18n from "utils/i18n";

const Categories = () => {
  const categories = i18n.t("Categories", { returnObjects: true });
  return (
    <div className={styles.container}>
      {images.map((image) => {
        if (categories[image.key])
          return (
            <ImageCard
              key={image.key}
              image={image.path}
              heading={categories[image.key].description}
            />
          );
      })}
    </div>
  );
};

const ImageCard = ({ heading, image, content }) => {
  return (
    <Card>
      <div className={styles.cardImage}>
        <img src={image} />
      </div>
      <h1>{heading}</h1>
    </Card>
  );
};

export default Categories;
