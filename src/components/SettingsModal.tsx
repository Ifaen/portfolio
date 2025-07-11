import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Language } from "../lib/types";
import { getLanguageContext } from "./LanguageContext";

export default function SettingsModal() {
  const [open, setOpen] = useState(false);

  const { t, i18n } = useTranslation(["settings"]);

  const { language, setLanguage } = getLanguageContext();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  function translatePath(fromLang: Language, toLang: Language): string {
    const segments = window.location.pathname.split("/").filter(Boolean);

    const fromKeys = i18n.store.data[fromLang].paths as Record<string, string>;
    const toKeys = i18n.store.data[toLang].paths as Record<string, string>;

    const matchingKeys = segments.map((segment) => {
      const key = Object.entries(fromKeys).find(
        ([, val]) => val === segment
      )?.[0];

      if (!key) return segment;

      return toKeys[key];
    });

    // Join the matching keys into a path
    return "/" + matchingKeys.join("/");
  }

  return (
    <>
      <div id="settings-button" className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setOpen(true)}
          className="p-1 m-1 bg-amber-50 rounded transition-colors cursor-pointer print:hidden hover:bg-amber-100"
        >
          <Settings className="w-5 h-5 transition-all hover:w-6 hover:h-6" />
        </button>
      </div>

      {open && (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/50">
          <div className="grid gap-3 justify-center items-center p-4 text-[#a13e2d] bg-amber-100 rounded shadow-xl">
            <h2 className="mb-2 text-lg font-bold text-center">
              {t("settings:title")}
            </h2>

            <div className="flex gap-2 justify-center items-center mb-2">
              <label htmlFor="language-select">{t("settings:language")}:</label>

              <select
                id="language-select"
                value={language}
                onChange={(e) => {
                  const newLang = e.target.value as Language;

                  // Translate path
                  const translatedPath = translatePath(language, newLang);
                  window.history.pushState(null, "", translatedPath);

                  setLanguage(newLang);
                  setOpen(false);
                }}
                className="p-1 font-bold bg-white rounded border"
              >
                <option value="en">{t("common:languages.en")}</option>
                <option value="es">{t("common:languages.es")}</option>
              </select>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="flex justify-center items-center font-bold transition-colors cursor-pointer hover:text-amber-500"
            >
              {t("common:close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
