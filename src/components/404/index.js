import React from "react";
import styles from "./notFound.module.css";
import IconCard from "components/IconCard";
import { ReactComponent as NotFoundIcon } from "assets/icons/common/page-not-found.svg";

const NotFound = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <IconCard Icon={NotFoundIcon}>
          <h1>404 - Not Found</h1>
          <p>Uh! This page does not exist</p>
        </IconCard>
      </div>
    </div>
  );
};

export default NotFound;
