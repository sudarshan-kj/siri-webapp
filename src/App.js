import React, { useState } from "react";
import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import styles from "App.module.css";
import { getLanguageObject, langLocalStorageKey } from "components/Language";
import RoundContent from "components/generic/RoundContent";
import i18next from "i18next";
import usePersistence from "hooks/usePersistence";
import BackToTop from "react-back-to-top-button";
import { ReactComponent as BackToTopIcon } from "assets/top.svg";
import Card from "components/Card";
import Slider from "components/generic/animations/Slider";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = usePersistence(
    langLocalStorageKey,
    i18next.language
  );

  const onToggleLanguage = () => {
    let toggledLanguage = getLanguageObject(language, true).value;
    i18next.changeLanguage(toggledLanguage);
    setLanguage(toggledLanguage); // This ensures re-render
  };

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className={styles.wrapper}>
      <Header selectedLanguage={language} onToggleLanguage={onToggleLanguage} />
      <Card size="max" />
      <Main />
      <Footer />
      <BackToTop showAt={200} speed={1000} style={{ marginRight: "1%" }}>
        <RoundContent radius="35px" bgColor="#C8C8C8">
          <BackToTopIcon className={styles.backToTopIcon} />
        </RoundContent>
      </BackToTop>
      <Slider color="#b22222" direction="left" duration={1000} />
    </div>
  );
};

export default App;
