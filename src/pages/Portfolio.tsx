import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getLanguageContext } from "../components/LanguageContext";
import { Link, useLocation } from "react-router-dom";

export default function Portfolio() {
  const { t, i18n } = useTranslation();
  const { setLanguage } = getLanguageContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/portafolio") {
      i18n.changeLanguage("es");
      setLanguage("es");
    } else if (location.pathname === "/portfolio") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }, [location]);

  return (
    <>
      <h1 className="text-2xl font-bold">{t("portfolio.title")}</h1>
      <p>
        {t("portfolio.work_in_progress")}
        <br />
        {t("portfolio.check_later")}
        <br />
        <Link to="/curriculum-vitae">{t("portfolio.cv_link")}</Link>
      </p>
    </>
  );
}
