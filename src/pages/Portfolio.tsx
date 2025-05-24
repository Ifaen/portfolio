import { useEffect } from "react";
import { getLanguageContext } from "../components/LanguageContext"
import { Link, useLocation } from "react-router-dom";

export default function Portfolio() {
  const { language, setLanguage } = getLanguageContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/portafolio") {
      setLanguage("es");
    } else if (location.pathname === "/portfolio") {
      setLanguage("en");
    }
  }, [location]);

  return (
    <>
      <h1 className="text-2xl font-bold">{language === "es" ? "Portafolio" : "Portfolio"}</h1>
      {
        language === "es" ?
          <p>
            Actualmente trabajando en mostrar mis certificados y CV
            <br />
            Revisa más tarde por actualizaciones
            <br />
            O revisa mi <Link to="/curriculum-vitae">CV en sfuentes.cl/cv</Link>
          </p> :
          <p>
            Currently working on displaying my Certificates and CV
            <br />
            Check later for updates
            <br />
            Or check my <Link to="/curriculum-vitae">CV at sfuentes.cl/cv</Link>
          </p>
      }
    </>
  )
}