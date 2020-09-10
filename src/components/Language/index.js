import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./index.module.css";
import Toast from "components/generic/Toast";
import { ReactComponent as LangIcon } from "assets/lang-icon.svg";
import i18next from "i18next";

export const Lang = {
  ENG: { value: "en", displayName: "English" },
  KAN: { value: "kan", displayName: " ಕನ್ನಡ" },
};

export const getLanguageObject = (lang, toggle = false) => {
  if (isValidLanguage(lang)) {
    if (toggle) {
      return lang === Lang.ENG.value ? Lang.KAN : Lang.ENG;
    }
    return lang === Lang.ENG.value ? Lang.ENG : Lang.KAN;
  }
};

const isValidLanguage = (lang) => {
  return Object.keys(Lang).some((key) => Lang[key]["value"] === lang);
};

const LanguageButton = ({ onToggleLanguage }) => {
  const changeToLanguage = getLanguageObject(i18next.language, true)
    .displayName;

  return (
    <div className={styles.lang}>
      <div className={styles.buttonContainer}>
        <button className={styles.langButton} onClick={onToggleLanguage}>
          <LangIcon className={styles.langIcon} />
          {changeToLanguage}
        </button>
      </div>
      <Toast
        message={`Language changed to: ${
          getLanguageObject(i18next.language, false).displayName
        }`}
        theme="dark"
      />
    </div>
  );
};

export default LanguageButton;
