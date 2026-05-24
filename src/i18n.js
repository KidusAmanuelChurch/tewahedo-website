import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import am from "./locales/am/translation.json";
import dk from "./locales/dk/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    am: {
      translation: am,
    },
    dk: {
      translation: dk,
    },
  },

  lng: "am",
  fallbackLng: "am",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;