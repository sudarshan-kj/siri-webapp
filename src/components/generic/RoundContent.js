import React from "react";
import styles from "./RoundContent.module.css";

const RoundContent = ({ children }) => {
  return <div className={styles.roundContainer}>{children}</div>;
};

export default RoundContent;
