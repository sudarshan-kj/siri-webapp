import React from "react";
import styles from "./Category.module.css";

import images from "assets/slides";
import i18n from "utils/i18n";
import IconCard from "components/IconCard";
import { ReactComponent as agarbattiIcon } from "assets/icons/categories/agarbatti.svg";

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
            <IconCard
              Icon={agarbattiIcon}
              // key={image.key}
              // image={image.path}
              // heading={categories[image.key].name}
            >
              <p>{categories[image.key].name}</p>
            </IconCard>
          );
        return null;
      })}
    </div>
  );
};

// const IconCard = ({ heading, image }) => {
//   return (
//     <Card>
//       <div className={styles.cardImage}>
//         <img src={image} alt={heading} />
//       </div>
//       <h1>{heading}</h1>
//     </Card>
//   );
// };

export default Categories;
