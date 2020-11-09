import React from "react";
import styles from "./Logo.module.css";
import { langOptions, getLanguageObject } from "components/Language";
import LogoIconEng from "assets/logo/logo-eng.png";
import LogoIconKan from "assets/logo/logo-kan.png";
import i18next from "i18next";
import i18n from "utils/i18n";
import { Link } from "react-router-dom";
/*
Its important to note that the styling of the div to include the logo was not done using CSS.
This is intentional since we could not otherwise control changing the logo on toggling the language */

const Logo = () => {
  const language = getLanguageObject(i18next.language);
  const langLogo =
    language === langOptions.KAN ? (
      <img
        className={styles.logo}
        src={LogoIconKan}
        alt={i18n.t("Siri Logo")}
      />
    ) : (
      <img
        className={styles.logo}
        src={LogoIconEng}
        alt={i18n.t("Siri Logo")}
      />
    );

  return (
    <div className={styles.logoContainer}>
      <Link to="/productInfoList">{langLogo}</Link>
    </div>
  );
};

export default Logo;
