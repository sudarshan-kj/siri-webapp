import React from "react";
import styles from "./index.module.css";
import Logo from "components/Logo";
import Navigation from "components/Navigation";
import LanguageButton from "components/Language";

const list = [
  { name: "Home", link: "#" },
  { name: "About Us", link: "#" },
  { name: "Contact", link: "#footerId" },
];

const Header = ({ selectedLanguage, onToggleLanguage }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation list={list} />
      <LanguageButton
        selectedLanguage={selectedLanguage}
        onToggleLanguage={onToggleLanguage}
      />
    </div>
  );
};

export default Header;
