import React from "react";
import styles from "./Category.module.css";
import Card from "components/Card";
import sampleImage from "assets/slides/bulb.jpg";

const cardData = [
  { image: sampleImage, heading: "Agarbatti" },
  { image: sampleImage, heading: "Detergents" },
  { image: sampleImage, heading: "Phenyls" },
  { image: sampleImage, heading: "Garments" },
  { image: sampleImage, heading: "Rexin" },
  { image: sampleImage, heading: "Pickles" },
  { image: sampleImage, heading: "Bleaching powder" },
  { image: sampleImage, heading: "Millets" },
  { image: sampleImage, heading: "Millet Cafe" },
  { image: sampleImage, heading: "Pushti" },
];

const Categories = () => {
  return (
    <div className={styles.container}>
      {cardData.map((item) => {
        return <ImageCard heading={item.heading} />;
      })}
    </div>
  );
};

const ImageCard = ({ heading, image, content }) => {
  return (
    <Card>
      <div className={styles.cardImage}>
        <img src={sampleImage} />
      </div>
      <h1>{heading}</h1>
    </Card>
  );
};

export default Categories;
