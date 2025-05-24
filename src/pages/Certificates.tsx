import { Link, useLocation } from "react-router-dom";
import { CERTIFICATES_BY_CATEGORY } from "../lib/consts";
import { getLanguageContext } from "../components/LanguageContext";
import { useEffect } from "react";

export default function Certificates() {
  const { language, setLanguage } = getLanguageContext();
  const location = useLocation();

  useEffect(() => {
    if (/certificados(\/|$)/.test(location.pathname)) {
      setLanguage('es');
    } else if (/certificates(\/|$)/.test(location.pathname)) {
      setLanguage('en');
    }
  }, [location]);

  return (
    <>
      <h1 className="text-2xl font-bold">{language === "es" ? "Certificados" : "Certificates"}</h1>
      {Object.entries(CERTIFICATES_BY_CATEGORY[language]).map(([category, certificates]) => {
        return (
          <div key={category} className="mb-4">
            <h2>{category}</h2>
            <div className="grid">
              {certificates.map((certificate) => (
                <Link
                  key={certificate.name}
                  to={`/${language === "es" ? "certificado" : "certificate"}/${certificate.name}`}
                >
                  {certificate.title}
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}