import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import { getLanguageObject } from "./components/Language";
import i18next from "i18next";
//import useSkipFirstRender from "./hooks/useSkipFirstRender";

const App = () => {
  const [language, setLanguage] = useState(i18next.language);
  const [, setUpdate] = useState(false);

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(language, true).value;
    setLanguage(toggledLanguage);
  };

  //Adding this dependency 'language' is very important. Otherwise it will cause infinite renders.
  useEffect(() => {
    i18next.changeLanguage(language);
    setUpdate((prevupdate) => !prevupdate);
  }, [language]);

  return (
    <div className={styles.wrapper}>
      <Header onToggleLanguage={onToggleLanguage} />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
