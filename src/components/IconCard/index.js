import React from "react";
import styles from "./IconCard.module.css";

const IconCard = ({ children, Icon, propStyles }) => (
  <div className={`${styles.container} ${propStyles}`}>
    <div className={styles.iconContainer}>
      <Icon className={styles.icon} />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

export default IconCard;
