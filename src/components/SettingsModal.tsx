
import { useState } from "react";
import { Settings } from "lucide-react";
import { getLanguageContext } from "./LanguageContext";
import type { Language } from "../lib/types";
import { PATH_TRANSLATIONS } from "../lib/consts";
import { useNavigate } from "react-router-dom";

// This allows for any future languages to be added without breaking the code
function getLanguageIndex(language: Language): number {
  if (language === "en") return 0;
  if (language === "es") return 1;

  return 0; // Fallback to english
}

function getTranslatedSegment(
  segment: string,
  fromLangIndex: number,
  toLangIndex: number
): string {
  // Find the translation group
  const translationGroup = PATH_TRANSLATIONS.find(group =>
    group[fromLangIndex] === segment
  );

  // Return translated segment if found, otherwise original
  return translationGroup?.[toLangIndex] ?? segment;
}

function translatePath(
  path: string,
  fromLang: Language,
  toLang: Language
): string {
  const fromLangIndex = getLanguageIndex(fromLang);
  const toLangIndex = getLanguageIndex(toLang);

  return path
    .split('/')
    .map(segment => getTranslatedSegment(segment, fromLangIndex, toLangIndex))
    .join('/');
}

export default function SettingsModal() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = getLanguageContext();

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => setOpen(true)} className="fixed top-4 right-4">
        <Settings />
      </button>

      {open && (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black/50">
          <div className="p-4 bg-white rounded shadow-xl">
            <h2 className="mb-2">Settings</h2>

            <div className="mb-2">
              <label htmlFor="language-select" className="block mb-1">Language</label>
              <select
                id="language-select"
                value={language}
                onChange={(e) => {
                  const newLanguage = e.target.value as Language;

                  const translatedPath = translatePath(window.location.pathname, language, newLanguage);

                  setLanguage(newLanguage);

                  navigate(translatedPath, { replace: true });

                  setOpen(false);
                }}
                className="p-1 border"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <button onClick={() => setOpen(false)} className="mt-2">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
