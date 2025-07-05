import { useState } from "react";
import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Language } from "../lib/types";
import { getLanguageContext } from "./LanguageContext";

function translatePath(
  i18n: any,
  t: any,
  path: string,
  fromLang: Language,
  toLang: Language
): string {
  const segments = path.split("/").filter(Boolean);

  // Temporarily switch language to access the translation
  i18n.changeLanguage(toLang);

  const translated = segments.map((segment) => {
    // Try to reverse-lookup the key for the segment
    const keys = Object.entries(
      i18n.getResource(fromLang, "translation", "paths") || {}
    );
    const match = keys.find(([, val]) => val === segment);
    const key = match?.[0];

    if (!key) return segment;

    return t(`paths.${key}`);
  });

  // Restore original language
  i18n.changeLanguage(fromLang);

  return "/" + translated.join("/");
}

export default function SettingsModal() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const language = i18n.language as Language;

  const { setLanguage } = getLanguageContext();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-50 p-1 m-1 bg-amber-50 rounded transition-colors cursor-pointer print:hidden hover:bg-amber-100"
      >
        <Settings className="w-5 h-5 transition-all hover:w-6 hover:h-6" />
      </button>

      {open && (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/50">
          <div className="grid gap-3 justify-center items-center p-4 text-[#a13e2d] bg-amber-100 rounded shadow-xl">
            <h2 className="mb-2 text-lg font-bold text-center">
              {t("settings.title")}
            </h2>

            <div className="flex gap-2 justify-center items-center mb-2">
              <label htmlFor="language-select">{t("settings.language")}:</label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => {
                  const newLang = e.target.value as Language;

                  const translatedPath = translatePath(
                    i18n,
                    t,
                    window.location.pathname,
                    language,
                    newLang
                  );

                  i18n.changeLanguage(newLang);
                  setLanguage(newLang);

                  navigate(translatedPath, { replace: true });
                  setOpen(false);
                }}
                className="p-1 font-bold bg-white rounded border"
              >
                <option value="en">{t("languages.en")}</option>
                <option value="es">{t("languages.es")}</option>
              </select>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="flex justify-center items-center font-bold transition-colors cursor-pointer hover:text-amber-500"
            >
              {t("settings.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
