import React from "react";
import styles from "./RoundContent.module.css";

const RoundContent = ({ children, bgColor, radius, fill, style }) => {
  let fillAttr = fill ? { padding: 0 } : { padding: "3px" };
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: radius,
        width: radius,
        ...fillAttr,
        ...style,
      }}
      className={styles.defaultRoundContainer}
    >
      {children}
    </div>
  );
};

export default RoundContent;
