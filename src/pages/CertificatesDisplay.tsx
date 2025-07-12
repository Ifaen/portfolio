import { useParams } from "react-router-dom";
import { getLanguageContext } from "../components/LanguageContext";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CertificateDisplay() {
  const { name } = useParams();
  const { language, setLanguage } = getLanguageContext();
  const location = useLocation();

  // Ignore context and prioritize URL to set language
  useEffect(() => {
    if (/certificados(\/|$)/.test(location.pathname)) {
      setLanguage("es");
    } else if (/certificates(\/|$)/.test(location.pathname)) {
      setLanguage("en");
    }
  }, [location]);

  return (
    <div className="w-full h-screen">
      <iframe
        src={`/certificates/${language}/${name}.pdf`}
        className="w-full h-full"
      />
    </div>
  );
}
