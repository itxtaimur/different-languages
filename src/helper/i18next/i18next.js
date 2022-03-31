import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translation Files
import translationEng from "./locales/en/translation.json";
import translationGerman from "./locales/de/translation.json";
import translationFrench from "./locales/fr/translation.json";
import translationDanish from "./locales/dn/translation.json";
import translationEstonian from "./locales/et/translation.json";
import translationItalian from "./locales/it/translation.json";
import translationPortugues from "./locales/pt/translation.json";
import translationSwedish from "./locales/es/translation.json";
import translationFinnish from "./locales/fi/translation.json";
import translationSpanish from "./locales/sp/translation.json";

i18n.use(initReactI18next).init({
  // we init with resources
  resources: {
    en: {
      translations: translationEng,
    },
    de: {
      translations: translationGerman,
    },
    fr: {
      translations: translationFrench,
    },
    dn: {
      translations: translationDanish,
    },
    et: {
      translations: translationEstonian,
    },
    it: {
      translations: translationItalian,
    },
    pt: {
      translations: translationPortugues,
    },
    es: {
      translations: translationSwedish,
    },
    fi: {
      translations: translationFinnish,
    },
    sp: {
      translations: translationSpanish,
    },
  },

  fallbackLng: "en",
  debug: false,

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

export default i18n;
