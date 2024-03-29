import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>&copy; 2022 All rights reserved</p>
      <p className={styles.credits}>
        Designed and Developed by
        <a href="https://krankj.in" target="_blank" rel="noopener noreferrer">
          &nbsp;krankj.in
        </a>
      </p>
      <p className={styles.updated}>Updated on 17.06.2022</p>
    </div>
  );
};

export default Footer;
