import React from "react";
import "react-toastify/dist/ReactToastify.css";
import styles from "./index.module.css";
import Toast from "components/generic/Toast";
import { ReactComponent as LangIcon } from "assets/lang-icon.svg";

export const langOptions = {
  ENG: { value: "en", displayName: "English" },
  KAN: { value: "kan", displayName: " ಕನ್ನಡ" },
};

export const langLocalStorageKey = "userLanguage";

export const getLanguageObject = (lang, toggle = false) => {
  if (isValidLanguage(lang)) {
    if (toggle) {
      return lang === langOptions.ENG.value ? langOptions.KAN : langOptions.ENG;
    }
    return lang === langOptions.ENG.value ? langOptions.ENG : langOptions.KAN;
  }
};

const isValidLanguage = (lang) => {
  return Object.keys(langOptions).some(
    (key) => langOptions[key]["value"] === lang
  );
};

const LanguageButton = ({ selectedLanguage, onToggleLanguage }) => {
  const changeToLanguage = getLanguageObject(selectedLanguage, true)
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
          getLanguageObject(selectedLanguage, false).displayName
        }`}
        theme="dark"
      />
    </div>
  );
};

export default LanguageButton;
