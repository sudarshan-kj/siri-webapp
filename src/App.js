import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import { getLanguageObject } from "./components/Language";
import i18next from "i18next";

const App = () => {
  const [language, setLanguage] = useState(i18next.language);

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(language, true).value;
    i18next.changeLanguage(toggledLanguage);
    setLanguage(toggledLanguage); // This ensures re-render
  };

  return (
    <div className={styles.wrapper}>
      <Header onToggleLanguage={onToggleLanguage} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
