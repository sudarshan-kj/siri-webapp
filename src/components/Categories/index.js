import React from "react";
import styles from "./Category.module.css";
import Card from "components/Card";
import sampleImage from "assets/slides/bulb.jpg";

const Categories = () => {
  return (
    <div className={styles.container}>
      <ImageCard heading={"Agarbattis"} />
      <ImageCard heading={"Detergents"}>I am a category</ImageCard>
      <ImageCard heading={"Phenyls"}>I am a category</ImageCard>
      <ImageCard heading={"Garments"}>I am a category</ImageCard>
    </div>
  );
};

const ImageCard = ({ heading, image, content }) => {
  return (
    <Card>
      <h1>{heading}</h1>
      <div className={styles.cardImage}>
        <img src={sampleImage} />
      </div>
    </Card>
  );
};

export default Categories;
