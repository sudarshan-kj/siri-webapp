import React from "react";
import styles from "./index.module.css";
import Logo from "components/Logo";
import Navigation from "components/Navigation";
import LanguageButton from "components/Language";
import i18n from "utils/i18n";

import Slider from "components/generic/animations/Slider";

const Header = ({ selectedLanguage, onToggleLanguage }) => {
  /* Its important to keep the list inside the Header component, else language will not be changed 
  on every render, rather one would have to refresh the page altogether*/
  const list = [
    { name: i18n.t("Home"), link: "homeContainer" },
    { name: i18n.t("About"), link: "aboutContainer" },
    { name: i18n.t("Contact"), link: "footerContainer" },
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Logo />
        <Navigation list={list} />
        <LanguageButton
          selectedLanguage={selectedLanguage}
          onToggleLanguage={onToggleLanguage}
        />
        <Slider color="#b22222" direction="left" duration={1000} />
      </div>
    </div>
  );
};

export default Header;
