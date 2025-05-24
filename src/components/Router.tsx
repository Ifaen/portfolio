import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "../pages/Portfolio";
import CurriculumVitae from "../pages/CurriculumVitae";
import Certificates from "../pages/Certificates";
import CertificateDisplay from "../pages/CertificateDisplay";
import Fallback from "../pages/Fallback";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        {["/", "/portfolio", "/portafolio"].map(path => (
          <Route
            key={path}
            path={path}
            element={<Portfolio />}
          />
        ))}

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
          "/certificado/:name",
          "/certificate/:name",
        ].map(path => (
          <Route
            key={path}
            path={path}
            element={<CertificateDisplay />}
          />
        ))}

        {/* Curriculum Vitae */}
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
    </BrowserRouter>
  );
}
