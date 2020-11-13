import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { langOptions, langLocalStorageKey } from "components/Language";
import translationKan from "locales/kan/translation.json";
import translationEng from "locales/en/translation.json";

i18next.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: translationEng,
    },

    kan: {
      translations: translationKan,
    },
  },
  //this sets the initial language, which is returned through i18.language()
  lng: localStorage.getItem(langLocalStorageKey) || langOptions.ENG.value,
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
