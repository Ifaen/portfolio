import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getLanguageContext } from "../components/LanguageContext";

export default function Portfolio() {
  const { t } = useTranslation("portfolio");
  const location = useLocation();
  const { setLanguage } = getLanguageContext();

  useEffect(() => {
    if (location.pathname === "/portafolio") {
      setLanguage("es");
    } else if (location.pathname === "/portfolio") {
      setLanguage("en");
    }
  }, [location]);

  return (
    <>
      <main className="text-white">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p>{t("work_in_progress")}</p>

        <p>{t("check_later")}</p>

        <Link to="/curriculum-vitae">{t("cv_link")}</Link>
      </main>
    </>
  );
}
