import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import CurriculumVitae from "./Curriculum-Vitae";
import Certificates from "./certificates/Certificates";
import ToeicCertificate from "./certificates/toeic-bridge/toeic-bridge";

export default function Router() {
  const subdomain = window.location.host.split(".")[0];

  let baseComponent;

  switch (subdomain) {
    case "portfolio":
      baseComponent = <Portfolio />;
      break;
    case "curriculum-vitae":
      baseComponent = <CurriculumVitae />;
      break;
    case "certificates":
      baseComponent = (
        <Routes>
          <Route path="/" element={<Certificates />} />
          <Route path="/toeic-bridge" element={<ToeicCertificate />} />
        </Routes>
      );
      break;
    default:
      baseComponent = <Portfolio />; // fallback
  }

  return <BrowserRouter>{baseComponent}</BrowserRouter>;
}
