import React from "react";
import styles from "./Category.module.css";
import Card from "components/Card";
import images from "assets/slides";
import i18n from "utils/i18n";

const Categories = () => {
  const cardData = i18n.t("Categories", { returnObjects: true });
  return (
    <div className={styles.container}>
      {cardData.map((item) => {
        return <ImageCard key={item.id} heading={item.name} />;
      })}
    </div>
  );
};

const ImageCard = ({ heading, image, content }) => {
  return (
    <Card>
      <div className={styles.cardImage}>
        <img src={images[0]} />
      </div>
      <h1>{heading}</h1>
    </Card>
  );
};

export default Categories;
