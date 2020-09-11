import React from "react";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import styles from "App.module.css";
import { getLanguageObject, langLocalStorageKey } from "components/Language";
import i18next from "i18next";
import usePersistence from "hooks/usePersistence";

const App = () => {
  const [language, setLanguage] = usePersistence(
    langLocalStorageKey,
    i18next.language
  );

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(language, true).value;
    i18next.changeLanguage(toggledLanguage);
    setLanguage(toggledLanguage); // This ensures re-render
  };

  return (
    <div className={styles.wrapper}>
      <Header selectedLanguage={language} onToggleLanguage={onToggleLanguage} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
