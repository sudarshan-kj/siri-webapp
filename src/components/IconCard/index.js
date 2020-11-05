import React from "react";
import styles from "./IconCard.module.css";

const IconCard = ({ children, Icon }) => (
  <div className={styles.container}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icon} />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default IconCard;
