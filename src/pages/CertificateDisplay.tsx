import { useParams } from "react-router-dom";
import { CERTIFICATES_BY_CATEGORY } from "../lib/consts";
import { getLanguageContext } from "../components/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Certificate } from "../lib/types";

export default function CertificateDisplay() {
  const { name } = useParams();
  const { language, setLanguage } = getLanguageContext();
  const location = useLocation();

  useEffect(() => {
    if (/^\/certificado(\/|$)/.test(location.pathname)) {
      setLanguage('es');
    } else if (/^\/certificate(\/|$)/.test(location.pathname)) {
      setLanguage('en');
    }
  }, [location]);

  let categories = CERTIFICATES_BY_CATEGORY[language]; // Filter categories by the language

  let entry: Certificate | undefined;

  for (const category of Object.values(categories)) {
    entry = category.find((cert) => cert.name === name);
    if (entry) break;
  }

  if (!entry) {
    return <h1>{language === "es" ? "Certificado no encontrado" : "Certificate not found"}</h1>;
  }

  return (
    <div className="w-full h-screen">
      <h1 className="mb-4 text-xl">{entry.title}</h1>
      <iframe
        src={`/certificates/${language}/${entry.name}.pdf`}
        className="w-full h-full"
      />
    </div>
  );
}
