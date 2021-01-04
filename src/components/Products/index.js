import React from "react";
import styles from "./Products.module.css";
import i18n from "utils/i18n";
import IconCard from "components/IconCard";
import useAutoScroll from "hooks/useAutoScroll";
import { Link } from "react-router-dom";
import { authAxios } from "auth";
import { ReactComponent as agarbattisIcon } from "assets/icons/categories/agarbattis.svg";
import { ReactComponent as ayurvedicoilsIcon } from "assets/icons/categories/ayurvedicoils.svg";
import { ReactComponent as beveragesIcon } from "assets/icons/categories/beverages.svg";
import { ReactComponent as cleaningproductsIcon } from "assets/icons/categories/cleaningproducts.svg";
import { ReactComponent as garmentsIcon } from "assets/icons/categories/garments.svg";
import { ReactComponent as milletsIcon } from "assets/icons/categories/millets.svg";
import { ReactComponent as nutritionpowderIcon } from "assets/icons/categories/nutritionpowder.svg";
import { ReactComponent as oilsIcon } from "assets/icons/categories/oils.svg";
import { ReactComponent as picklesIcon } from "assets/icons/categories/pickles.svg";
import { ReactComponent as readytoeatmixesIcon } from "assets/icons/categories/readytoeatmixes.svg";
import { ReactComponent as rexinbagsIcon } from "assets/icons/categories/rexinbags.svg";
import { ReactComponent as snacksIcon } from "assets/icons/categories/snacks.svg";
import { ReactComponent as spicespowdersIcon } from "assets/icons/categories/spicespowders.svg";

const components = {
  agarbattisIcon,
  ayurvedicoilsIcon,
  snacksIcon,
  oilsIcon,
  spicespowdersIcon,
  garmentsIcon,
  milletsIcon,
  readytoeatmixesIcon,
  beveragesIcon,
  cleaningproductsIcon,
  nutritionpowderIcon,
  rexinbagsIcon,
  picklesIcon,
};

const Products = () => {
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const i18Categories = i18n.t("categories", { returnObjects: true });

  React.useEffect(() => {
    authAxios()
      .get("/categories/images")
      .then((result) => {
        setCategories(result.data.categories);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  useAutoScroll();
  if (isLoading) {
    return (
      <div className={`${styles.container} ${styles.centerSpaced}`}>
        Loading...
      </div>
    );
  }

  if (error === true) {
    return (
      <div className={`${styles.container} ${styles.centerSpaced}`}>
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
            if (i18Categories[category.key] && icon)
              return (
                <Link to={`/productInfoList/#${category.key}`}>
                  <IconCard
                    propStyles={styles.icon}
                    Icon={icon}
                    key={category.key}
                  >
                    <p>{i18Categories[category.key].name}</p>
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
