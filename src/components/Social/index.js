import React from "react";
import styles from "./Social.module.css";
import { ReactComponent as FacebookIcon } from "assets/icons/fb.svg";

const Social = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.facebook.com" target="blank">
        <FacebookIcon className={styles.fbIcon} />
      </a>
    </div>
  );
};

export default Social;
