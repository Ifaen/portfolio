import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Language } from "../lib/types";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export default function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize state with type safety
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language.startsWith("es") ? "es" : "en"; // Prioritize spanish, if not, fallback to english
    return (savedLang as Language) || browserLang;
  });

  // Sync language to localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function getLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("getLanguageContext must be used within a LanguageProvider");
  }
  return context;
}