import React from "react";
import styles from "./Category.module.css";
import Card from "components/Card";
import images from "assets/slides";
import i18n from "utils/i18n";

const Categories = () => {
  const categories = i18n.t("Categories", { returnObjects: true });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      {images.map((image) => {
        if (categories[image.key])
          return (
            <ImageCard
              key={image.key}
              image={image.path}
              heading={categories[image.key].name}
            />
          );
        return null;
      })}
    </div>
  );
};

const ImageCard = ({ heading, image }) => {
  return (
    <Card>
      <div className={styles.cardImage}>
        <img src={image} alt={heading} />
      </div>
      <h1>{heading}</h1>
    </Card>
  );
};

export default Categories;
