import React from "react";
import styles from "./Logo.module.css";
import { langOptions, getLanguageObject } from "components/Language";
import LogoIconEng from "assets/logo-eng.png";
import LogoIconKan from "assets/logo-kan.png";
import i18next from "i18next";
import i18n from "utils/i18n";

/*
Its important to note that the styling of the div to include the logo was not done using CSS.
This is intentional since we could not otherwise control changing the logo on toggling the language */

const Logo = () => {
  const language = getLanguageObject(i18next.language);
  const langLogo =
    language === langOptions.KAN ? (
      <img src={LogoIconKan} alt={i18n.t("Siri Logo")} />
    ) : (
      <img src={LogoIconEng} alt={i18n.t("Siri Logo")} />
    );

  return <div className={styles.logoContainer}>{langLogo}</div>;
};

export default Logo;
