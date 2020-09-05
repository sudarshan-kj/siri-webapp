import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import { getLanguageObject } from "./components/Language";
import i18next from "i18next";

const App = () => {
  const [lang, setLang] = React.useState(i18next.language);

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(lang, true).value;
    i18next.changeLanguage(toggledLanguage);
    setLang(toggledLanguage);
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
