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
      <main>
        <nav className="grid max-w-4/5 mx-auto fixed top-0 left-0 right-0 z-10 bg-gray-600">
          <ul className="flex gap-4 justify-center">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#certificates">Certificates</Link>
            </li>
          </ul>
        </nav>

        <section className="h-screen flex items-center justify-center bg-gray-900 bg-[url(jason-mavrommatis-GPPAjJicemU-unsplash.jpg)] bg-cover bg-no-repeat bg-[left_55%]">
          <div className="grid max-w-2/3 gap-2 bg-amber-200/50 p-4 rounded-lg backdrop-blur-xs">
            <header className="flex flex-col gap-y-2">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti iste dolores voluptatem voluptas qui maxime corrupti,
                doloribus facere dolorum quis minus assumenda itaque laudantium
                repellat, facilis reprehenderit accusantium expedita soluta.
              </p>
            </header>
          </div>
        </section>
      </main>
    </>
  );
}
