import React from "react";
import styles from "./Category.module.css";
import Card from "components/Card";
import images from "assets/slides";
import i18n from "utils/i18n";
import { v4 as uuidv4 } from "uuid";

const Categories = ({ lang }) => {
  const cardData = i18n.t("Categories", { returnObjects: true });
  return (
    <div className={styles.container}>
      {cardData.map((item, index) => {
        return <ImageCard key={uuidv4()} heading={item} />;
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
