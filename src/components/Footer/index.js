import React from "react";
import styles from "./index.module.css";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element name="footerContainer">
      <div className={styles.footer}>
        <p>&copy; 2020 All rights reserved</p>
      </div>
    </Element>
  );
};

export default Footer;
