import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import CurriculumVitae from "../pages/CurriculumVitae";
import Certificates from "../pages/Certificates";
import CertificateDisplay from "../pages/CertificateDisplay";
import Fallback from "../pages/Fallback";
import SettingsModal from "./SettingsModal";
import { getLanguageContext } from "./LanguageContext";

export default function Router() {
  const { language } = getLanguageContext();

  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        {["/portfolio", "/portafolio"].map(path => (
          <Route
            key={path}
            path={path}
            element={<Portfolio />}
          />
        ))}
        <Route path="/" element={<Navigate to={language === 'es' ? '/portafolio' : '/portfolio'} replace />} />

        {/* Certificates */}
        {["/certificados", "/certificates"].map(path => (
          <Route
            key={path}
            path={path}
            element={<Certificates />}
          />
        ))}

        {/* Certificates detail */}
        {[
          "/certificados/:name",
          "/certificates/:name",
        ].map(path => (
          <Route
            key={path}
            path={path}
            element={<CertificateDisplay />}
          />
        ))}

        {/* Curriculum Vitae, redirect all those directions to curriculum-vitae */}
        <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
        {[
          "/cv",
          "/curriculum",
          "/resume",
        ].map(path => (
          <Route
            key={path}
            path={path}
            element={<Navigate to="/curriculum-vitae" replace />}
          />
        ))}

        {/* Fallback everything that doesn't match */}
        <Route path="*" element={<Fallback />} />
      </Routes>
      <SettingsModal />
    </BrowserRouter>
  );
}
