import React from "react";
import styles from "./Box.module.css";
import PulseLoader from "react-spinners/PulseLoader";

const Box = ({
  children,
  bgColor,
  radius,
  fill,
  style,
  round,
  isLoading,
  showLoading,
}) => {
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
      {showLoading && (
        <PulseLoader
          size={10}
          color={"rgb(217, 217, 217)"}
          loading={isLoading}
        />
      )}

      {children}
    </div>
  );
};

export default Box;
