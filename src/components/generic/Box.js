import React from "react";
import styles from "./Box.module.css";

const Box = ({ children, bgColor, radius, fill, style, round }) => {
  let fillShape = round ? { borderRadius: "50%" } : null;
  let fillAttr = fill ? { padding: 0 } : { padding: "3px" };
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: radius,
        width: radius,
        ...fillAttr,
        ...fillShape,
        ...style,
      }}
      className={styles.defaultBox}
    >
      {children}
    </div>
  );
};

export default Box;
