import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import CurriculumVitae from "./CurriculumVitae";
import Certificates from "./certificates/Certificates";
import CertificateDetail from "./certificates/CertificateDetail";
import Fallback from "./Fallback";

export default function Router() {
  const lang = navigator.language.startsWith("es") ? "es" : "en";


  return (
    <BrowserRouter>
      <Routes>
        {/* Portfolio */}
        <Route path="/" element={<Portfolio lang={lang} />} />
        <Route path="/portafolio" element={<Portfolio lang="es" />} />
        <Route path="/portfolio" element={<Portfolio lang="en" />} />


        {/* Certificates */}
        <Route path="/certificados" element={<Certificates lang="es" />} />
        <Route path="/certificates" element={<Certificates lang="en" />} />
        {/* Certificates detail */}
        <Route path="/certificados/:id" element={<CertificateDetail lang="es" />} />
        <Route path="/certificates/:id" element={<CertificateDetail lang="en" />} />

        {/* Curriculum Vitae: auto-detect if no language in path */}
        <Route path="/curriculum-vitae" element={<CurriculumVitae lang={lang} />} />
        <Route path="/cv" element={<Navigate to="/curriculum-vitae" replace />} />

        {/* Fallback everything else to portfolio */}
        <Route path="*" element={<Fallback lang={lang} />} />
      </Routes>
    </BrowserRouter>
  );
}
