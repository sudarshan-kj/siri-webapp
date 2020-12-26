import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; 2020 All rights reserved</p>
      <p className={styles.credits}>
        Designed and Developed by
        <a href="https://krankj.in" target="_blank" rel="noopener noreferrer">
          &nbsp;krankj.in
        </a>
      </p>
    </div>
  );
};

export default Footer;
