import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import common_en from "../locales/en/common.json";
import common_es from "../locales/es/common.json";
import settings_en from "../locales/en/settings.json";
import settings_es from "../locales/es/settings.json";
import curriculum_vitae_en from "../locales/en/curriculum-vitae.json";
import curriculum_vitae_es from "../locales/es/curriculum-vitae.json";
import certificates_en from "../locales/en/certificates.json";
import certificates_es from "../locales/es/certificates.json";
import portfolio_en from "../locales/en/portfolio.json";
import portfolio_es from "../locales/es/portfolio.json";
import paths_en from "../locales/en/paths.json";
import paths_es from "../locales/es/paths.json";
import navbar_en from "../locales/en/navbar.json";
import navbar_es from "../locales/es/navbar.json";

export default i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: common_en,
      settings: settings_en,
      curriculum_vitae: curriculum_vitae_en,
      certificates: certificates_en,
      portfolio: portfolio_en,
      paths: paths_en,
      navbar: navbar_en,
    },
    es: {
      common: common_es,
      settings: settings_es,
      curriculum_vitae: curriculum_vitae_es,
      certificates: certificates_es,
      portfolio: portfolio_es,
      paths: paths_es,
      navbar: navbar_es,
    },
  },
  // List of all namespaces
  ns: [
    "common",
    "settings",
    "curriculum_vitae",
    "certificates",
    "portfolio",
    "paths",
    "navbar",
  ],
  // Default namespace
  defaultNS: "common",
  // Default language
  lng: "en",
  // In case the translation is not found, fallback to english (or when the word is the same in both languages)
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
