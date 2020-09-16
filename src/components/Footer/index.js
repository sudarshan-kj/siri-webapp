import RoundContent from "components/generic/RoundContent";
import React from "react";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <div id="footerId" className={styles.footer}>
      <p>&copy; 2020 All rights reserved</p>
      <RoundContent>
        <h2>Hello</h2>
      </RoundContent>
    </div>
  );
};

export default Footer;
