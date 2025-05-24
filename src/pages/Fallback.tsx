import { getLanguageContext } from "../components/LanguageContext";

export default function Fallback() {
  const { language } = getLanguageContext();

  return (
    <div>
      <h1>{language === "es" ? "404 - Página no encontrada" : "404 - Page Not Found"}</h1>
    </div>
  );
}