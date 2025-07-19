import { useState, useEffect } from "react";
import { Languages, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import type { Language } from "../lib/types";
import { getLanguageContext } from "./LanguageContext";

export default function LanguagePanel() {
  const [open, setOpen] = useState(false);
  const [stage, setStage] = useState<"idle" | "width" | "height">("idle");

  const { t, i18n } = useTranslation(["settings", "common"]);
  const { language, setLanguage } = getLanguageContext();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  function translatePath(fromLang: Language, toLang: Language): string {
    const segments = window.location.pathname.split("/").filter(Boolean);
    const fromKeys = i18n.store.data[fromLang].paths as Record<string, string>;
    const toKeys = i18n.store.data[toLang].paths as Record<string, string>;

    return (
      "/" +
      segments
        .map((segment) => {
          const key = Object.entries(fromKeys).find(
            ([, val]) => val === segment
          )?.[0];
          return key ? toKeys[key] : segment;
        })
        .join("/")
    );
  }

  function handleToggle() {
    if (!open) {
      setOpen(true);
      setStage("width");
    } else {
      setStage("idle");
      setOpen(false);
    }
  }

  return (
    <motion.div
      initial={false}
      animate={{
        width: open ? 240 : 30,
        height: open && stage === "height" ? "auto" : 30,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (stage === "width") {
          setStage("height");
        }
      }}
      className="fixed top-4 right-4 z-50 bg-[#d5c7bc] text-[#a13e2d] rounded shadow-lg border border-[#a13e2d] overflow-hidden"
    >
      <button
        onClick={handleToggle}
        className="w-full h-full flex items-center justify-center"
        aria-label="Toggle Language Panel"
      >
        {!open && <Languages className="w-4 h-4" />}
      </button>

      <AnimatePresence>
        {open && stage === "height" && (
          <motion.div
            key="panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="p-3 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-sm font-bold">{t("settings:title")}</h2>
              <button onClick={handleToggle}>
                <X className="w-4 h-4" />
              </button>
            </div>

            <label htmlFor="language-select" className="text-sm font-semibold">
              {t("settings:language")}
            </label>

            <select
              id="language-select"
              value={language}
              onChange={(e) => {
                const newLang = e.target.value as Language;
                const translatedPath = translatePath(language, newLang);
                setLanguage(newLang);
                window.history.pushState(null, "", translatedPath);
                setOpen(false);
                setStage("idle");
              }}
              className="p-1 text-sm font-bold bg-white rounded border"
            >
              <option value="en">{t("common:languages.en")}</option>
              <option value="es">{t("common:languages.es")}</option>
            </select>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
