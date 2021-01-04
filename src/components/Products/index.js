import React from "react";
import styles from "./Products.module.css";
import { imageCategories } from "assets/slides";
import i18n from "utils/i18n";
import IconCard from "components/IconCard";
import useAutoScroll from "hooks/useAutoScroll";
import { Link } from "react-router-dom";
import { authAxios } from "auth";
import { ReactComponent as agarbattiIcon } from "assets/icons/categories/agarbatti.svg";
import { ReactComponent as siricafeIcon } from "assets/icons/categories/siricafe.svg";
import { ReactComponent as snacksIcon } from "assets/icons/categories/snacks.svg";
import { ReactComponent as franchiseIcon } from "assets/icons/categories/franchise.svg";
import { ReactComponent as garmentsIcon } from "assets/icons/categories/garments.svg";
import { ReactComponent as kokumIcon } from "assets/icons/categories/kokum.svg";
import { ReactComponent as phenylIcon } from "assets/icons/categories/phenyl.svg";
import { ReactComponent as nutritionpowderIcon } from "assets/icons/categories/nutritionpowder.svg";
import { ReactComponent as sirishopIcon } from "assets/icons/categories/sirishop.svg";
import { ReactComponent as rexinbagsIcon } from "assets/icons/categories/rexinbags.svg";
import { ReactComponent as pickleIcon } from "assets/icons/categories/pickle.svg";

const components = {
  agarbattiIcon,
  siricafeIcon,
  snacksIcon,
  franchiseIcon,
  garmentsIcon,
  kokumIcon,
  phenylIcon,
  nutritionpowderIcon,
  sirishopIcon,
  rexinbagsIcon,
  pickleIcon,
};

const compare = (a, b) => {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
};

const Products = () => {
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(false);
  const i18Categories = i18n.t("categories", { returnObjects: true });

  React.useEffect(() => {
    authAxios()
      .get("/categories/images")
      .then((result) => setCategories(result.data.categories))
      .catch((err) => {
        console.log("I am setting the error");
        setError(true);
      });
  }, []);

  useAutoScroll();
  if (error) {
    return (
      <div className={`${styles.container} ${styles.error}`}>
        Something went wrong
      </div>
    );
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <h1>Our Product Range</h1>
        <div className={styles.container}>
          {categories.map((category) => {
            let icon = components[`${category.key}Icon`];
            if (categories[category.key] && icon)
              return (
                <Link to={`/productInfoList/#${category.key}`}>
                  <IconCard
                    propStyles={styles.icon}
                    Icon={icon}
                    key={category.key}
                  >
                    <p>{categories[category.key].name}</p>
                  </IconCard>
                </Link>
              );
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
