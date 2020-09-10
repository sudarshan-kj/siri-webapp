import React from "react";
import styles from "./Logo.module.css";
import LogoIcon from "assets/logo-eng.png";
const Logo = () => (
  <div className={styles.logoContainer}>
    <img className={styles.logo} src={LogoIcon} alt="Logo" />
  </div>
);

export default Logo;
