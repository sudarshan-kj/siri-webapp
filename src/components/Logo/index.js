import React from "react";
import styles from "./Logo.module.css";

const Logo = () => (
  <div className={styles.logo}>
    <img
      className={styles.logoIcon}
      src={"../../assets/logo-eng.png"}
      alt="Logo"
    />
  </div>
);

export default Logo;
