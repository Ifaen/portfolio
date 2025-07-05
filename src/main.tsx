import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./lib/Router.tsx";
import LanguageProvider from "./components/LanguageContext.tsx";
import "./main.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router />
    </LanguageProvider>
  </StrictMode>,
)
