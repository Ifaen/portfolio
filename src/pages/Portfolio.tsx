import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getLanguageContext } from "../components/LanguageContext";
import InfoPanel from "../components/InfoPanel";
import {
  IconBrandGithubFilled,
  IconBrandGitlab,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
} from "@tabler/icons-react";

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

        <section
          id="hero"
          className="h-screen flex items-center justify-center bg-gray-900 bg-[url(jason-mavrommatis-GPPAjJicemU-unsplash.jpg)] bg-cover bg-no-repeat bg-[left_55%] text-white"
        >
          <div className="grid max-w-2/3 gap-y-6 text-center bg-amber-200/50 p-4 rounded-lg backdrop-blur-xs">
            <h1 className="text-2xl font-bold">{t("i_am.title")}</h1>
            <p>{t("i_am.description")}</p>
            <p>{t("i_am.description_2")}</p>

            <address className="flex gap-2 justify-center">
              <a
                href="https://github.com/ifaen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithubFilled className="w-4 h-4  hover:text-[#a13e2d]" />
              </a>

              <a
                href="https://gitlab.com/ifaen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGitlab className="w-4 h-4 fill-white hover:text-[#a13e2d] hover:fill-[#a13e2d]" />
              </a>

              <a
                href="https://linkedin.com/in/dev-sfuentes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedinFilled className="w-4 h-4  hover:text-[#a13e2d]" />
              </a>

              <a
                href="https://instagram.com/sfuentes616"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagramFilled className="w-4 h-4  hover:text-[#a13e2d]" />
              </a>
            </address>
          </div>
        </section>
        <InfoPanel />
      </main>
    </>
  );
}
