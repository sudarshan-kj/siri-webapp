import React from "react";
import styles from "./index.module.css";
import Logo from "../Logo";
import Navigation from "../Navigation";
import LanguageButton from "../Language";

const list = [
  { name: "Home", link: "#footerId" },
  { name: "About Us", link: "#footerId" },
  { name: "Contact", link: "#footerId" },
];

const Header = ({ onToggleLanguage }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <Navigation list={list} />
      <LanguageButton onToggleLanguage={onToggleLanguage} />
    </div>
  );
};

export default Header;
