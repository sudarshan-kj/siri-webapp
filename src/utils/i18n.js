import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationKan from "locales/kan/translation.json";
import translationEng from "locales/en/translation.json";

i18next.use(LanguageDetector).init({
  // we init with resources

  /*adding the key 'lng' is important here since it defines the language the LS uses when the it is not yet initialized. If not set, it defaults to 'en-GB',
   which causes getLanguageObject() in {components/Logo} to fail*/

  resources: {
    en: {
      translations: translationEng,
    },

    kan: {
      translations: translationKan,
    },
  },
  lng: "en",
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
