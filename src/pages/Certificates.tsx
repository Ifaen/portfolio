import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Certificate } from "../lib/types";
import { CircleAlert, SquareArrowOutUpRight } from "lucide-react";
import { getLanguageContext } from "../components/LanguageContext";

export default function Certificates() {
  const location = useLocation();
  const { t } = useTranslation(["paths", "certificates"]);
  const { setLanguage } = getLanguageContext();

  useEffect(() => {
    if (location.pathname === "/certificados") {
      setLanguage("es");
    } else if (location.pathname === "/certificates") {
      setLanguage("en");
    }
  }, [location]);

  return (
    <>
      <main className="text-white">
        <h1 className="text-2xl font-bold">
          {t("paths:certificates").toUpperCase()}
        </h1>

        {Object.entries(
          t("certificates:categories", { returnObjects: true }) as Record<
            string,
            Record<string, Certificate>
          >
        ).map(([category, certificates], indexCategory) => {
          return (
            <section key={indexCategory} className="mb-4">
              <h2 className="text-xl font-bold">{category}</h2>

              <div className="grid">
                {Object.values(certificates).map(
                  (certificate, indexCertificate) => (
                    <article key={indexCertificate}>
                      {certificate.url ? (
                        <Link
                          to={certificate.url}
                          className="flex gap-2 items-center"
                        >
                          {certificate.title}
                          <SquareArrowOutUpRight className="w-3 h-3" />
                        </Link>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="flex gap-2 items-center cursor-pointer"
                          >
                            {certificate.title}
                            <CircleAlert className="w-3 h-3" />
                          </button>
                        </>
                      )}
                    </article>
                  )
                )}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
