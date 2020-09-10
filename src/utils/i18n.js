import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationKan from "locales/kan/translation.json";
import translationEng from "locales/en/translation.json";

i18next.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: translationEng,
    },

    kan: {
      translations: translationKan,
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18next;
